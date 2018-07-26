// @flow
import React from 'react';
import type { Element } from 'react';

import classes from './input-prompt.component.scss';

export type InputPromptProps = {
  onWidthChange?: Function,
  style?: any,
  text?: Element<*>,
};

type State = {
  width: number,
};

/*
 * PRIVATE
 * Renders a prompt text that measures its width.
 */
export class InputPrompt extends React.PureComponent<InputPromptProps, State> {
  state = {
    width: 0,
  };

  componentDidMount() {
    this.measureWidth();
  }

  componentDidUpdate() {
    this.measureWidth();
  }

  props: InputPromptProps;

  span: any;

  measureWidth() {
    const width = this.span ? this.span.offsetWidth : 0;
    if (width !== this.state.width) {
      this.setState({ width });
      if (this.props.onWidthChange) {
        this.props.onWidthChange(width);
      }
    }
  }

  render() {
    const { text, style } = this.props;

    return (
      <span
        className={classes.inputPrompt}
        style={style}
        ref={(n) => {
          this.span = n;
        }}
      >
        {text}
      </span>
    );
  }
}
