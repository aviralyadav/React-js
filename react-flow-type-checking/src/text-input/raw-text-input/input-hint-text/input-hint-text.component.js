// @flow
import React from 'react';
import type { Element } from 'react';
import transitions from 'material-ui/styles/transitions';

import classes from './input-hint-text.component.scss';

const getStyle = (show, style) => {
  return {
    opacity: show ? 1 : 0,
    transition: transitions.easeOut(),
    ...style,
  };
};

export type InputHintTextProps = {
  text?: Element<*>,
  show?: boolean,
  style?: any,
};

/*
 * PRIVATE
 * Renders the hint text that gets hidden when show is false.
 */
export const InputHintText = ({
  text,
  show = true,
  style,
}: InputHintTextProps) => (
  <div className={classes.inputHintText} style={getStyle(show, style)}>
    {text}
  </div>
);
