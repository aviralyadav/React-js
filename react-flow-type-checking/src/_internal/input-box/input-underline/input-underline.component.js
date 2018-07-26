// @flow
import React from 'react';

import classes from './input-underline.component.scss';

export type InputUnderlineProps = {
  error: boolean,
};

/*
 * InputUnderline - PRIVATE
 * Renders InputBox's focus line.
 */
export const InputUnderline = ({ error }: InputUnderlineProps) => (
  <hr className={error ? classes.error : classes.focus} />
);
