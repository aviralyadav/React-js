// @flow
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { boolean, text, number } from '@storybook/addon-knobs';
import React from 'react';
import { RaisedButton } from 'material-ui';

import { RawTextInput } from '../../text-input/raw-text-input/raw-text-input.component';

import { InputBox } from './input-box.component';

const notes = `
  InputBox - INTERNAL
  Adds the border and the focus underline to any input control.

  @children (required)
  Element: One or more 'raw' input control(s) to render.

  @disabled
  boolean: If true, the background and border are greyed.
  default: false

  @errorText
  Element: If present the focus underline will be red.

  @onFocus
  (event: object) => void: Callback function that is fired when the input control is focused.
  event: Click event targeting the input control.

  @onBlur
  (event: object) => void: Callback function that is fired when the input control loses focus.
  event: Click event targeting the input control.

  @width
  number|string: The width of the InputBox.
`;

storiesOf('internal/InputBox', module).add(
  'Basic',
  withNotes(notes)(() => {
    let hasError = text('error-text', '').length > 0;
    if (!hasError) hasError = undefined;
    return (
      <div>
        <h4>With Knobs</h4>
        <InputBox
          disabled={boolean('disabled', false)}
          errorText={hasError && <span>{text('error-text', '')}</span>}
          onBlur={action('onBlur')}
          onFocus={action('onFocus')}
          width={number('width', 200, {
            range: true,
            min: 100,
            max: 400,
            step: 10,
          })}
        >
          <RawTextInput />
        </InputBox>

        <h4>Examples</h4>
        <InputBox>
          <RawTextInput />
        </InputBox>

        <InputBox disabled>
          <RaisedButton
            label="disabled"
            style={{
              width: '100%',
            }}
          />
        </InputBox>

        <InputBox>
          <RaisedButton
            label="First"
            style={{
              width: '100%',
            }}
          />
          <RaisedButton label="Second" />
        </InputBox>
      </div>
    );
  })
);
