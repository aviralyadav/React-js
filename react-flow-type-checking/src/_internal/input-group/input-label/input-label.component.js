// @flow
import React from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import { grey400, grey500 } from '../../../../theme/js/v1-theme/v1.colors';

import classes from './input-label.component.scss';
import { TypographyTypes } from '../../../dynamic-text/dynamic-text.component';
import type { LegacyContext } from '../../../legacy-provider/legacy-provider.component';

const LegacyContextClassSuffix = 'Legacy';

const getClassName = (isLegacy: boolean) => {
  const styleName = `inputLabel${isLegacy ? LegacyContextClassSuffix : ''}`;
  return classes[styleName];
};

const getStyle = (disabled, isLegacy) => {
  if (!disabled) return undefined;
  return {
    color: isLegacy ? grey400 : grey500,
  };
};

export type InputLabelProps = {
  disabled?: boolean,
  htmlFor?: string,
  text?: Element<*>,
};

/*
 * InputLabel - PRIVATE
 * Renders InputGroup's label.
 */
export const InputLabel = (
  { disabled = false, htmlFor, text }: InputLabelProps,
  { isLegacy = false }: LegacyContext
) => {
  if (typeof text === 'string') {
    console.error('DS-UI: labelText must be an element.'); // eslint-disable-line no-console
  }

  const textElement = text
    ? React.cloneElement(text, {
        type: isLegacy ? TypographyTypes.Body1 : TypographyTypes.Caption,
        disabled,
      })
    : undefined;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label
      className={getClassName(isLegacy)}
      style={getStyle(disabled, isLegacy)}
      htmlFor={htmlFor}
    >
      {textElement}
    </label>
  );
};

InputLabel.contextTypes = { isLegacy: PropTypes.bool };
