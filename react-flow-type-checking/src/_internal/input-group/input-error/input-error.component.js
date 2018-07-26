// @flow
import React from 'react';
import type { Element } from 'react';
import { grey400 } from '../../../../theme/js/v1-theme/v1.colors';

import classes from './input-error.component.scss';

const getStyle = (disabled) => {
  return {
    color: disabled ? grey400 : undefined,
  };
};

export type InputErrorProps = {
  disabled?: boolean,
  text?: Element<*>,
};

/*
 * InputError - PRIVATE
 * Renders InputGroup's error message.
 */
export const InputError = ({ disabled = false, text }: InputErrorProps) => (
  <div className={classes.inputError} style={getStyle(disabled)}>
    {text}
  </div>
);
