// @flow
import classnames from 'classnames';
import React from 'react';
import type { Node } from 'react';
import CaretDownIcon from 'mdi-react/MenuDownIcon';
import EnhancedButton from 'material-ui/internal/EnhancedButton';
import FocusRipple from 'material-ui/internal/FocusRipple';
import classes from './drop-down-button.component.scss';
import {
  black,
  blue900,
  grey400,
  white,
} from '../../../../theme/js/v1-theme/v1.colors';

export type DropDownButtonProps = {
  className?: string,
  buttonClassName?: string,
  children?: Node,
  disabled?: boolean,
  disableFocusRipple?: boolean,
  disableTouchRipple?: boolean,
  Icon?: Function,
  id?: string,
  isHint?: boolean,
  inverted?: boolean,
  name?: string,
  onBlur?: (any) => void,
  onFocus?: (any) => void,
  onKeyDown?: (any) => void,
  onClick?: (any) => void,
  tabIndex?: number,
  width?: number | string,
};

type State = {
  isFocused: boolean,
  isKeyboardFocused: boolean,
  hovered: boolean,
  touch: boolean,
};

export class DropDownButton extends React.Component<
  DropDownButtonProps,
  State
> {
  state = {
    isFocused: false, // eslint-disable-line react/no-unused-state
    isKeyboardFocused: false,
    hovered: false, // eslint-disable-line react/no-unused-state
    touch: false,
  };

  componentWillReceiveProps(nextProps: DropDownButtonProps) {
    if (nextProps.disabled) {
      this.setState({
        hovered: false, // eslint-disable-line react/no-unused-state
      });
    }
  }

  props: DropDownButtonProps;

  enhancedButton: any = undefined;

  focus() {
    this.enhancedButton.button.focus();
    this.enhancedButton.setKeyboardFocus();
  }

  notify(callbackName: string, event: any) {
    const callback = this.props[callbackName];
    if (typeof callback === 'function') callback(event);
  }

  handleBlur = (event: any) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ isFocused: false, isKeyboardFocused: false });
    this.notify('onBlur', event);
  };

  handleFocus = (event: any) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ isFocused: true });
    this.notify('onFocus', event);
  };

  handleKeyboardFocus = (event: any, isKeyboardFocused: boolean) => {
    this.setState({ isKeyboardFocused });
  };

  handleMouseEnter = (event: any) => {
    // Cancel hover styles for touch devices
    // eslint-disable-next-line react/no-unused-state
    if (!this.state.touch) this.setState({ hovered: true });
    this.notify('onMouseEnter', event);
  };

  handleMouseLeave = (event: any) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ hovered: false });
    this.notify('onMouseLeave', event);
  };

  handleTouchStart = (event: any) => {
    this.setState({ touch: true });
    this.notify('onTouchStart', event);
  };

  render() {
    const {
      disabled = false,
      disableFocusRipple = false,
      disableTouchRipple = false,
      children,
      Icon,
      isHint = false,
      inverted = false,
      onBlur, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      width = 'auto', // eslint-disable-line no-unused-vars
      className,
      buttonClassName,
      ...other
    } = this.props;

    const { isKeyboardFocused } = this.state;

    const styles = getStyles(this.props);

    return (
      <EnhancedButton
        ref={(n) => {
          this.enhancedButton = n;
        }}
        className={classnames(
          classes.dropDownButton,
          buttonClassName,
          className
        )}
        disabled={disabled}
        disableFocusRipple
        disableTouchRipple={disableTouchRipple}
        touchRippleColor={blue900}
        touchRippleOpacity={1}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyboardFocus={this.handleKeyboardFocus}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
        {...other}
      >
        <div className={classes.contentWrapper}>
          <span
            className={classnames(
              classes.content,
              { [classes.isHint]: isHint, [classes.inverted]: inverted },
              className
            )}
          >
            {children}
          </span>
          <div className={classes.iconWrapper}>
            {isKeyboardFocused &&
              !disabled &&
              !disableFocusRipple && (
                <FocusRipple
                  color={styles.focusRippleColor}
                  opacity={0.3}
                  show
                  style={styles.focusRippleStyle}
                />
              )}
            {Icon ? (
              <Icon
                className={classnames(classes.arrow, {
                  [classes.inverted]: inverted,
                })}
              />
            ) : (
              <CaretDownIcon
                className={classnames(classes.arrow, {
                  [classes.inverted]: inverted,
                })}
              />
            )}
          </div>
        </div>
      </EnhancedButton>
    );
  }
}

const getStyles: (props: any) => any = (props) => {
  const { disabled = false, inverted = false } = props;

  let color = inverted ? white : black;
  if (disabled) {
    color = grey400;
  }

  return {
    focusRippleColor: color,
    focusRippleStyle: {
      top: 0,
      left: undefined, // overrides default 0
      right: 0,
    },
  };
};
