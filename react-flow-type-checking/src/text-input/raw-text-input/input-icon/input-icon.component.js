// @flow
import React from 'react';

import classes from './input-icon.component.scss';

export type InputIconProps = {
  color?: string,
  icon: any,
};

/*
 * PRIVATE
 * Renders a left aligned icon of the given color.
 */
export const InputIcon = ({ color, icon }: InputIconProps) => {
  const newProps = {
    className: classes.inputIcon,
    color,
  };

  return React.cloneElement(icon, {
    ...newProps,
    ...icon.props,
  });
};
