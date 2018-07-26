// @flow
import classnames from 'classnames';
import React from 'react';
import type { Element } from 'react';

import { grey400 } from '../../../theme/js/v1-theme/v1.colors';
import { InputClearButton } from './input-clear-button/input-clear-button.component';
import { EnhancedTextarea } from './enhanced-textarea/enhanced-textarea.component';
import { InputHintText } from './input-hint-text/input-hint-text.component';
import { InputIcon } from './input-icon/input-icon.component';
import { InputPrompt } from './input-prompt/input-prompt.component';

import classes from './raw-text-input.component.scss';

/**
 * Check if a value is valid to be displayed inside an input.
 */
const isValid = (value) => {
  return (
    value !== '' &&
    value !== undefined &&
    value !== null &&
    !(Array.isArray(value) && value.length === 0)
  );
};

const getInputStyle = (disabled, left, right, textAlign) => {
  return {
    paddingLeft: left,
    paddingRight: right,
    textAlign,
    color: disabled ? grey400 : undefined,
    cursor: disabled ? 'not-allowed' : 'inherit',
  };
};

export type RawTextInputProps = {
  defaultValue?: any,
  disabled?: boolean,
  hasClearButton?: boolean,
  hintText?: Element<*>,
  icon?: Element<*>,
  id?: string,
  multiLine?: boolean,
  name?: string,
  inputClassName?: string,
  onBlur?: (any) => void,
  onChange?: (any, string) => void,
  onClearClick?: (any) => void,
  onFocus?: (any) => void,
  promptLeftText?: Element<*>,
  promptRightText?: Element<*>,
  rows?: number,
  rowsMax?: number,
  textAlign?: string,
  tabIndex?: number,
  type?: string,
  value?: any,
};

type State = {
  hasValue: boolean,
  leftPromptWidth: number,
  rightPromptWidth: number,
};

/*
 * PRIVATE
 * Renders an input or textarea with optional
 * hintText, promptLeftText, promptRightText, left icon & right clear button.
 */
export class RawTextInput extends React.Component<RawTextInputProps, State> {
  state = {
    hasValue: false,
    leftPromptWidth: 0,
    rightPromptWidth: 0,
  };

  componentWillMount() {
    const { props } = this;
    this.setState({
      hasValue: isValid(props.value) || isValid(props.defaultValue),
    });
  }

  componentWillReceiveProps(nextProps: RawTextInputProps) {
    if (Object.prototype.hasOwnProperty.call(nextProps, 'value')) {
      const hasValue = isValid(nextProps.value);
      this.setState({
        hasValue,
      });
    }
    if (!nextProps.promptLeftText && this.state.leftPromptWidth) {
      this.setState({ leftPromptWidth: 0 });
    }
    if (!nextProps.promptRightText && this.state.rightPromptWidth) {
      this.setState({ rightPromptWidth: 0 });
    }
  }

  props: RawTextInputProps;

  handlePromptWidthChange(width: number, propName: string) {
    if (width !== this.state[propName]) {
      this.setState({ [propName]: width });
    }
  }

  handleInputChange = (event: any) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!this.props.hasOwnProperty('value')) {
      this.setState({ hasValue: isValid(event.target.value) });
    }
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, event.target.value);
    }
  };

  render() {
    const {
      disabled,
      defaultValue,
      hintText,
      icon,
      hasClearButton,
      promptLeftText,
      promptRightText,
      inputClassName,
      onBlur,
      onFocus,
      onChange,
      onClearClick,
      multiLine,
      rows,
      rowsMax,
      textAlign,
      value,
      ...other
    } = this.props;

    const { state } = this;

    const activeProps = {
      disabled,
      onBlur: (e) => {
        if (typeof onBlur === 'function') {
          onBlur(e);
        }
      },
      onFocus: (e) => {
        if (typeof onFocus === 'function') {
          onFocus(e);
        }
      },
      onChange: this.handleInputChange,
    };

    const hasIcon = Boolean(icon);

    let left = 10;
    if (hasIcon) {
      left = 34;
    } else if (state.leftPromptWidth) {
      left = state.leftPromptWidth + 17;
    }

    let right = 10;
    if (hasClearButton) {
      right = 34;
    } else if (state.rightPromptWidth) {
      right = state.rightPromptWidth + 17;
    }

    const inputElement = multiLine ? (
      <EnhancedTextarea
        textareaClassName={classnames(classes.textarea, inputClassName)}
        textareaStyle={getInputStyle(disabled, left, right, textAlign)}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        rowsMax={rowsMax}
        {...other}
        {...activeProps}
      />
    ) : (
      <input
        className={classnames(classes.input, inputClassName)}
        style={getInputStyle(disabled, left, right, textAlign)}
        type="text"
        value={value}
        defaultValue={defaultValue}
        {...other}
        {...activeProps}
      />
    );

    return (
      <div className={classes.rawTextInput}>
        {hintText && (
          <InputHintText
            style={{ left, right, textAlign }}
            show={!state.hasValue}
            text={hintText}
          />
        )}
        {hasIcon && <InputIcon icon={icon} color={grey400} />}
        {!hasIcon &&
          Boolean(promptLeftText) && (
            <InputPrompt
              style={{ left: 10 }}
              text={promptLeftText}
              onWidthChange={(w) =>
                this.handlePromptWidthChange(w, 'leftPromptWidth')
              }
            />
          )}
        {!hasClearButton &&
          Boolean(promptRightText) && (
            <InputPrompt
              style={{ right: 10 }}
              text={promptRightText}
              onWidthChange={(w) =>
                this.handlePromptWidthChange(w, 'rightPromptWidth')
              }
            />
          )}
        {hasClearButton && (
          <InputClearButton
            {...activeProps}
            onClick={onClearClick}
            color={grey400}
          />
        )}
        {inputElement}
      </div>
    );
  }
}
