import { find } from 'lodash';
import React from 'react';
import type { Element } from 'react';
import transitions from 'material-ui/styles/transitions';
import Menu from 'material-ui/Menu/Menu';
import Popover from 'material-ui/Popover/Popover';
import PopoverAnimationVertical from 'material-ui/Popover/PopoverAnimationVertical';
import keycode from 'keycode';
import Events from 'material-ui/utils/events';

import { DropDownButton } from './drop-down-button/drop-down-button.component';

require('./drop-down-menu.component.scss');

const isValid = (value) => {
  return (
    value !== '' &&
    value !== undefined &&
    value !== null &&
    !(Array.isArray(value) && value.length === 0)
  );
};

export type DropDownMenuProps = {
  children?: Element<*> | Element<*>[],
  disabled?: boolean,
  hintText?: Element<*>,
  id?: string,
  inTitleBar?: boolean,
  maxHeight?: number,
  multiple?: boolean,
  name?: string,
  onChange?: (evt: any, value: any, previousValue: any, index: number) => void,
  onClose?: () => void,
  onBlur?: () => void,
  onFocus?: () => void,
  selectionRenderer?: (value: any) => void,
  tabIndex?: number,
  value?: any,
  getValueKey?: (value: any) => number | string | boolean | null | undefined,
  width?: number | string,
};

type State = {
  open: boolean,
};

const getRealValue = (children, value, getValueKey) => {
  if (value && getValueKey) {
    if (value.length) {
      const foundChild = find(
        children,
        (child) => getValueKey(child.props.value) === value
      );
      return foundChild ? foundChild.props.value : undefined;
    }
    return getValueKey(value);
  }
  return value;
};

const getDisplayValue = (props: DropDownMenuProps) => {
  const {
    children,
    multiple = false,
    selectionRenderer,
    value,
    getValueKey,
  } = props;

  const simplifiedValue = value && getValueKey ? getValueKey(value) : value;
  const simplifiedChildren =
    children && getValueKey
      ? React.Children.map(children, (child) =>
          React.cloneElement(child, { value: getValueKey(child.props.value) })
        )
      : children;
  let displayValue = '';
  if (multiple) {
    const values = [];
    React.Children.forEach(simplifiedChildren, (child) => {
      if (
        child &&
        simplifiedValue &&
        simplifiedValue.includes(child.props.value)
      ) {
        if (selectionRenderer) {
          values.push(child.props.value);
        } else {
          values.push(child.props.label || child.props.primaryText);
        }
      }
    });

    displayValue = [];
    if (selectionRenderer) {
      displayValue = selectionRenderer(values);
    } else {
      displayValue = values.reduce(
        (acc, val) => (acc === null ? [val] : [...acc, ', ', val]),
        null
      );
    }
  } else {
    React.Children.forEach(simplifiedChildren, (child) => {
      if (child && simplifiedValue === child.props.value) {
        if (selectionRenderer) {
          displayValue = selectionRenderer(value);
        } else {
          displayValue = child.props.label || child.props.primaryText;
        }
      }
    });
  }
  return displayValue;
};

const getStyles = (props) => {
  const { inTitleBar = false, width = 'auto' } = props;

  return {
    root: {
      display: 'inline-block',
      height: inTitleBar ? 44 : 34,
      outline: 'none',
      position: 'relative',
      transition: transitions.easeOut(),
      width,
    },
  };
};

export class DropDownMenu extends React.Component<DropDownMenuProps, State> {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  props: DropDownMenuProps;

  dropDownButton = undefined;
  rootNode = undefined;

  handleClickControl = (event) => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.setState({
        open: !this.state.open,
        anchorEl: this.rootNode,
      });
    }
  };

  handleRequestCloseMenu = () => {
    this.close(false);
  };

  handleEscKeyDownMenu = () => {
    this.close(true);
  };

  handleKeyDown = (event) => {
    switch (keycode(event)) {
      case 'up':
      case 'down':
      case 'space':
      case 'enter':
        event.preventDefault();
        this.setState({
          open: true,
          anchorEl: this.rootNode,
        });
        break;
      default:
    }
  };

  handleItemClick = (event, child, index) => {
    if (this.props.multiple) {
      if (!this.state.open) {
        this.setState({ open: true });
      }
    } else {
      event.persist();
      this.setState(
        {
          open: false,
        },
        () => {
          this.handleChange(event, child.props.value, undefined, index);
          this.close(Events.isKeyboard(event));
        }
      );
    }
  };

  handleChange = (event, value, previousValue, index) => {
    if (this.props.onChange) {
      const realValue = getRealValue(
        this.props.children,
        value,
        this.props.getValueKey
      );
      this.props.onChange(event, realValue, previousValue, index);
    }
  };

  close = () => {
    this.setState(
      {
        open: false,
      },
      () => {
        if (this.props.onClose) {
          this.props.onClose();
        }
        if (this.dropDownButton) {
          this.dropDownButton.focus();
        }
      }
    );
  };

  render() {
    const {
      children,
      disabled = false,
      hintText = <span>{'\xA0'}</span>,
      maxHeight = 500,
      multiple = false,
      onClose, // eslint-disable-line no-unused-vars
      selectionRenderer, // eslint-disable-line no-unused-vars
      getValueKey,
      value,
      width = 'auto',
      ...other
    } = this.props;

    const { anchorEl, open } = this.state;

    const hasValue = isValid(value);

    const styles = getStyles(this.props);

    let menuWidth;
    if (anchorEl && width !== 'auto') {
      menuWidth = anchorEl.clientWidth;
    }

    const simplifiedChildren =
      children && getValueKey
        ? React.Children.map(children, (child) =>
            React.cloneElement(child, { value: getValueKey(child.props.value) })
          )
        : children;
    const simplifiedValue = value && getValueKey ? getValueKey(value) : value;

    return (
      <div
        ref={(n) => {
          this.rootNode = n;
        }}
        style={styles.root}
      >
        <DropDownButton
          ref={(n) => {
            this.dropDownButton = n;
          }}
          disabled={disabled}
          disableTouchRipple
          disableFocusRipple={false}
          onKeyDown={this.handleKeyDown}
          onClick={this.handleClickControl}
          width={width === 'auto' ? 'auto' : '100%'}
          isHint={!hasValue}
          {...other}
        >
          {hasValue ? getDisplayValue(this.props) : hintText}
        </DropDownButton>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          animated
          animation={PopoverAnimationVertical}
          open={open}
          onRequestClose={this.handleRequestCloseMenu}
        >
          <Menu
            autoWidth={width === 'auto'}
            desktop
            maxHeight={maxHeight}
            multiple={multiple}
            onEscKeyDown={this.handleEscKeyDownMenu}
            onItemClick={this.handleItemClick}
            value={simplifiedValue}
            width={menuWidth}
          >
            {simplifiedChildren}
          </Menu>
        </Popover>
      </div>
    );
  }
}
