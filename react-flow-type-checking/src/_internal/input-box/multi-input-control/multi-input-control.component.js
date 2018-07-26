// @flow
import React from 'react';
import type { Element } from 'react';

import classes from './multi-input-control.component.scss';

export type MultiInputControlProps = {
  children?: Element<*> | Element<*>[],
};

/*
 * MultiInputControl - PRIVATE
 * Renders InputBox's children inside a Flex Row.
 */
export const MultiInputControl = ({ children }: MultiInputControlProps) => (
  <div className={classes.multiInputControl}>{children}</div>
);
