// @flow
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import React from 'react';
import { RaisedButton } from 'material-ui';

import { InputGroup } from './input-group.component';
import { InputBox } from '../input-box/input-box.component';
import { RawTextInput } from '../../text-input/raw-text-input/raw-text-input.component';
import { RadioButton } from '../../radio-button/radio-button.component';
import { RadioButtonGroup } from '../../radio-button-group/radio-button-group.component';
import { DynamicText } from '../../dynamic-text/dynamic-text.component';

const notes = `
  FormField - INTERNAL

  Adds label, note and error to any input control.

  @children (required)
  Element: One input control to render.

  @disabled
  boolean: If true, the label, note or error text are greyed.
  default: false

  @errorText
  Element: The error message to render below the input control.

  @fullWidth
  boolean: If true, the field receives the property width 100%.
  default: false

  @id
  string: The id prop for the input control.

  @labelText
  Element: The node to render inside the HTML label above the input control.

  @name
  string: Name applied to the input control.

  @noteText
  Element: The note message to render below the input control when no errorText is present.

  @width
  number|string: The width of the FormField.
`;

storiesOf('internal/InputGroup', module).add(
  'Basic',
  withNotes(notes)(() => (
    <div
      style={{
        margin: 10,
      }}
    >
      <InputGroup
        id="a"
        labelText={<DynamicText>Hello</DynamicText>}
        noteText={<DynamicText>Note</DynamicText>}
        width={200}
      >
        <RaisedButton
          label="Any Input"
          style={{
            width: '100%',
          }}
        />
      </InputGroup>

      <InputGroup
        id="b"
        labelText={<DynamicText>Disabled</DynamicText>}
        disabled
        noteText={<DynamicText>Note</DynamicText>}
        width={200}
      >
        <RaisedButton
          label="Any Input"
          style={{
            width: '100%',
          }}
        />
      </InputGroup>

      <br />
      <InputGroup
        id="c"
        labelText={<DynamicText>InputBox with 2 children</DynamicText>}
        errorText={<DynamicText>Error</DynamicText>}
        fullWidth
      >
        <InputBox>
          <RaisedButton
            label="First"
            style={{
              width: '100%',
            }}
          />
          <RaisedButton label="Second" />
        </InputBox>
      </InputGroup>

      <br />
      <InputGroup id="c" labelText={<DynamicText>TextInput</DynamicText>}>
        <InputBox>
          <RawTextInput />
        </InputBox>
      </InputGroup>

      <br />
      <InputGroup
        id="d"
        labelText={<DynamicText>Radio Buttons</DynamicText>}
        noteText={<DynamicText>Select a color</DynamicText>}
      >
        <RadioButtonGroup onChange={() => {}} name="color" value={undefined}>
          <RadioButton label={<DynamicText>Red</DynamicText>} value="r" />
          <RadioButton label={<DynamicText>Green</DynamicText>} value="g" />
          <RadioButton label={<DynamicText>Blue</DynamicText>} value="b" />
        </RadioButtonGroup>
      </InputGroup>

      <InputGroup
        id="e"
        disabled
        labelText={<DynamicText>Radio Buttons</DynamicText>}
        noteText={<DynamicText>Select a color</DynamicText>}
      >
        <RadioButtonGroup onChange={() => {}} name="colorD" value={undefined}>
          <RadioButton label={<DynamicText>Red</DynamicText>} value="r" />
          <RadioButton label={<DynamicText>Green</DynamicText>} value="g" />
          <RadioButton label={<DynamicText>Blue</DynamicText>} value="b" />
        </RadioButtonGroup>
      </InputGroup>
    </div>
  ))
);
