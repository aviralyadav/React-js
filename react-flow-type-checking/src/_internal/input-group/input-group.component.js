// @flow
import React from 'react';
import type { Element } from 'react';
import warning from 'warning';

import { InputError } from './input-error/input-error.component';
import { InputLabel } from './input-label/input-label.component';
import { InputNote } from './input-note/input-note.component';

import classes from './input-group.component.scss';
import { DynamicText } from '../../dynamic-text/dynamic-text.component';

const getStyle = (fullWidth, width, readonly: boolean) => {
  return {
    width: fullWidth ? '100%' : width,
    marginBottom: readonly ? 13 : undefined,
  };
};

const isDsuiInput = (child) => {
  const childMuiName =
    child && child.type && child.type.dsuiName ? child.type.dsuiName : '';
  return childMuiName.indexOf('Input') !== -1;
};

export type InputGroupProps = {
  disabled?: boolean,
  errorText?: Element<*>,
  fullWidth?: boolean,
  id?: string,
  labelText?: Element<*>,
  name?: string,
  noteText?: Element<*>,
  width?: number | string,
  noErrors?: boolean,
  readonly?: boolean,
};

type InternalProps = {
  children: Element<*> | Element<*>[],
};

type Props = InputGroupProps & InternalProps;

export class InputGroup extends React.Component<Props> {
  componentWillMount() {
    const { id, name } = this.props;

    warning(
      name || id,
      `DS-UI: We don't have enough information
      to build a robust unique id for the FormField component. Please provide an id or a name.`
    );

    const uniqueId = `${String(name)}-${Math.floor(Math.random() * 0xffff)}`;
    this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
  }

  props: Props;
  uniqueId: string;

  render() {
    const {
      children,
      disabled = false,
      errorText,
      labelText,
      fullWidth = false,
      id,
      noErrors,
      noteText,
      width = 256,
      readonly = false,
      ...other
    } = this.props;

    const hasError = Boolean(errorText);
    const inputId = id || this.uniqueId;

    const child = React.Children.only(children);

    const childProps = {
      ...child.props,
      disabled,
      errorText: isDsuiInput(child) ? errorText : undefined,
      id: inputId,
      ...other,
    };

    if (!isDsuiInput(child)) {
      delete childProps.errorText;
    }

    const childWithProps = React.cloneElement(child, childProps);
    let noteTextValue = noteText;
    if (!noErrors && !noteText && !readonly) {
      // The default note text is required otherwise the form jumps when errors show.
      noteTextValue = <DynamicText>{'\xA0'}</DynamicText>;
    }

    return (
      <div
        className={classes.inputGroup}
        style={getStyle(fullWidth, width, readonly)}
      >
        {labelText && (
          <InputLabel disabled={disabled} htmlFor={inputId} text={labelText} />
        )}
        {childWithProps}
        {!hasError &&
          noteTextValue && (
            <InputNote disabled={disabled} text={noteTextValue} />
          )}
        {hasError && <InputError disabled={disabled} text={errorText} />}
      </div>
    );
  }
}
