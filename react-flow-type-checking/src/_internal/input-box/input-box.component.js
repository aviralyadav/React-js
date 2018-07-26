// @flow
import React from 'react';
import type { Element } from 'react';
import { MultiInputControl } from './multi-input-control/multi-input-control.component';
import { InputUnderline } from './input-underline/input-underline.component';
import { grey100, grey400 } from '../../../theme/js/v1-theme/v1.colors';

import classes from './input-box.component.scss';

const getStyle = (disabled, isFocused, height, width) => {
  return {
    backgroundColor: disabled ? grey100 : undefined,
    borderColor: isFocused ? grey400 : undefined,
    cursor: disabled ? 'not-allowed' : undefined,
    height,
    width,
  };
};

export type InputBoxProps = {
  children?: Element<*> | Element<*>[],
  disabled?: boolean,
  errorText?: Element<*>, // used to changed the color of the focus underline
  height?: number,
  onBlur?: (any) => void,
  onFocus?: (any) => void,
  width?: number | string,
};

type State = {
  isFocused: boolean,
};

export class InputBox extends React.Component<InputBoxProps, State> {
  static dsuiName = 'InputBox';

  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
  };

  state = {
    isFocused: false,
  };

  props: InputBoxProps;

  handleInputFocus = (event: any) => {
    if (this.props.disabled) {
      return;
    }
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleInputBlur = (event: any) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;

    const {
      children,
      disabled = false,
      errorText,
      height,
      onBlur,
      onFocus,
      width,
      ...other
    } = this.props;

    const inputProps = {
      disabled,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      ...other,
    };

    const childrenWithProps = this.props.children
      ? React.Children.map(this.props.children, (child) =>
          React.cloneElement(child, {
            ...inputProps,
          })
        )
      : undefined;

    const content =
      React.Children.count(children) > 1 ? (
        <MultiInputControl>{childrenWithProps}</MultiInputControl>
      ) : (
        childrenWithProps
      );

    return (
      <div
        className={classes.inputBox}
        style={getStyle(disabled, isFocused, height, width)}
      >
        {content}
        {isFocused && <InputUnderline error={Boolean(errorText)} />}
      </div>
    );
  }
}
