// @flow
import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

const rowsHeight = 20;
const padTopBottom = 11;

const calcHeight = (rows = 1) => {
  return rows * rowsHeight + padTopBottom;
};

const getStyles = (state) => {
  return {
    root: {
      boxSizing: 'border-box',
      position: 'relative', // because the shadow has position: 'absolute'
    },
    textarea: {
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',
      boxSizing: 'border-box',
      cursor: 'inherit',
      height: state.height,
      margin: 0,
      paddingBottom: 0,
      resize: 'none',
      width: '100%',
    },
    shadow: {
      border: 'none',
      boxSizing: 'border-box',
      height: 'auto',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      margin: 0,
      overflow: 'hidden',
      paddingTop: 0,
      paddingBottom: 0,
      position: 'absolute',
      resize: 'none',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
    },
  };
};

type EnhancedTextareaProps = {
  defaultValue?: any,
  disabled?: boolean,
  onChange?: Function,
  onHeightChange?: Function,
  rows?: number,
  rowsMax?: number,
  shadowStyle?: any,
  style?: any,
  textareaClassName?: string,
  textareaStyle?: any,
  value?: string,
  valueLink?: any,
};

type EnhancedTextareaState = {
  height: ?number,
};

/*
 * PRIVATE
 * Adapted from: material-ui/TextField.EnhancedTextarea
 * Renders a textarea that automatically grows and shrinks in height.
 * It uses an hidden textarea 'shadow' to measure the height of the text.
 */
export class EnhancedTextarea extends React.Component<
  EnhancedTextareaProps,
  EnhancedTextareaState
> {
  static defaultProps = {
    rows: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state: EnhancedTextareaState = {
    height: null,
  };

  componentWillMount() {
    this.setState({
      height: calcHeight(this.props.rows),
    });
  }

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentWillReceiveProps(nextProps: EnhancedTextareaProps) {
    if (
      nextProps.value !== this.props.value ||
      nextProps.rows !== this.props.rows ||
      nextProps.rowsMax !== this.props.rowsMax
    ) {
      this.syncHeightWithShadow(nextProps.value, null, nextProps);
    }
  }

  getInputNode() {
    return this.input;
  }

  setValue(value: string) {
    this.getInputNode().value = value;
    this.syncHeightWithShadow(value);
  }

  props: EnhancedTextareaProps;

  input: any;
  shadow: any;

  syncHeightWithShadow(
    newValue: ?string = undefined,
    event: any = null,
    props: ?EnhancedTextareaProps = null
  ) {
    props = props || this.props; // eslint-disable-line no-param-reassign
    const { rows = 1 } = props;

    const { shadow } = this;
    const displayText =
      newValue === '' || newValue === undefined || newValue === null
        ? ' '
        : newValue;

    if (this.props.rows !== rows) {
      shadow.rows = rows;
    }

    if (displayText !== undefined) {
      shadow.value = displayText;
    }

    let newHeight = shadow.scrollHeight;

    // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013
    if (newHeight === undefined) return;

    // shadow has no padding
    newHeight += padTopBottom;

    if (props.rowsMax && props.rowsMax >= rows) {
      const maxHeight = calcHeight(props.rowsMax);
      newHeight = Math.min(maxHeight, newHeight);
    }

    newHeight = Math.max(newHeight, calcHeight(1));

    if (this.state.height !== newHeight) {
      this.setState({
        height: newHeight,
      });

      if (props.onHeightChange) {
        props.onHeightChange(event, newHeight);
      }
    }
  }

  handleResize = (event: any) => {
    this.syncHeightWithShadow(undefined, event);
  };

  handleChange = (event: any) => {
    this.syncHeightWithShadow(event.target.value);

    if (Object.prototype.hasOwnProperty.call(this.props, 'valueLink')) {
      // $FlowFixMe
      this.props.valueLink.requestChange(event.target.value);
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      onChange, // eslint-disable-line no-unused-vars
      onHeightChange, // eslint-disable-line no-unused-vars
      rows,
      rowsMax, // eslint-disable-line no-unused-vars
      shadowStyle,
      style,
      textareaClassName,
      textareaStyle,
      valueLink,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.state);
    const rootStyles = Object.assign(styles.root, style);
    const textareaStyles = Object.assign(styles.textarea, textareaStyle);
    const shadowStyles = Object.assign(
      {},
      textareaStyles,
      styles.shadow,
      shadowStyle
    );
    const props = {};

    if (Object.prototype.hasOwnProperty.call(this.props, 'valueLink')) {
      // $FlowFixMe
      other.value = this.props.valueLink.value;
      props.valueLink = valueLink;
    }

    return (
      <div style={prepareStyles(rootStyles)}>
        <EventListener target="window" onResize={this.handleResize} />
        <textarea
          ref={(n) => {
            this.shadow = n;
          }}
          className={textareaClassName}
          style={prepareStyles(shadowStyles)}
          tabIndex="-1"
          rows={rows}
          defaultValue={this.props.defaultValue}
          readOnly
          value={this.props.value}
          {...props}
        />
        <textarea
          {...other}
          ref={(n) => {
            this.input = n;
          }}
          className={textareaClassName}
          style={prepareStyles(textareaStyles)}
          rows={rows}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
