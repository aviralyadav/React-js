// @flow
import React from 'react';
import type { Element } from 'react';
import { grey400 } from '../../../../theme/js/v1-theme/v1.colors';

import classes from './input-note.component.scss';

const getStyle = (disabled) => {
  return {
    color: disabled ? grey400 : undefined,
  };
};

export type InputNoteProps = {
  disabled?: boolean,
  text?: Element<*>,
};

/*
 * InputNote - PRIVATE
 * Renders InputGroup's note.
 */
export const InputNote = ({ disabled = false, text }: InputNoteProps) => (
  <div className={classes.inputNote} style={getStyle(disabled)}>
    {text}
  </div>
);
