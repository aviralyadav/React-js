// @flow
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { boolean } from '@storybook/addon-knobs';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import React from 'react';

import { TextInput } from './text-input.component';

const textInputNotes = `
Composes an InputBox and a RawTextInput to provide a simple text input without the additional form components such as errors, or notes. Suitable for applications such as a search box.

@defaultValue
any: The text string to use for the default value.

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
number|string: The width of the TextInput.

@fullWidth
boolean: If true, the field receives the property width 100%.
default: false

@hasClearButton
boolean: If true, renders a clear button to the right.

@hintText
Element: The hint content to display.

@icon
Element: The Icon to display on the left side.

@id
string: The id prop for the input or textarea.

@name
string: Name applied to the input or textarea.

@onChange
(event: object, newValue: string) => void: Callback function that is fired when the input's value changes.
event: Change event targeting the input or textarea.
newValue: The new value.

@onClearClick
(event: object) => void: Callback function that is fired when the ClearButton is clicked.
event: Click event targeting the ClearButton.

@onFocus
(event: object) => void: Callback function that is fired when the input is focused.
event: Click event targeting the input or textarea.

@onBlur
(event: object) => void: Callback function that is fired when the input loses focus.
event: Click event targeting the input or textarea.

@promptLeftText
Element: Prompt displayed on the left.

@promptRightText
Element: Prompt displayed on the right.

@rows 
number: Number of rows to display when multiLine option is set to true.
default: 1
 
@rowsMax
number: Maximum number of rows to display when multiLine option is set to true.

@tabIndex
number: Specifies the tab order. Use -1 to prevent tabbing to the Button.

@textAlign
string: Specifies the horizontal alignment of text

@type
string: Specifies the type of input to display such as "password" or "text".
default: 'text'

@value
any: The value of the TextInput.
`;
storiesOf('TextInput', module).add(
  'Basic',
  withNotes(textInputNotes)(() => (
    <div>
      <TextInput
        id="d"
        hintText={<span>Width Controlled</span>}
        disabled={boolean('disabled', false)}
        width={150}
      />
      <br />
      <br />
      <TextInput
        id="h"
        disabled={boolean('disabled', false)}
        hintText={<span>hint text long long long long long</span>}
        width={150}
      />
      <br />
      <br />
      <TextInput
        id="a"
        hintText={<span>Placeholder</span>}
        disabled={boolean('disabled', false)}
      />
      <br />
      <br />
      <TextInput
        id="e"
        disabled={boolean('disabled', false)}
        defaultValue="Some default value"
      />
      <br />
      <br />
      <TextInput
        id="j"
        defaultValue="Value"
        disabled={boolean('disabled', false)}
        type="password"
        hintText={<span>Enter password</span>}
      />
      <br />
      <br />
      <TextInput
        id="k"
        defaultValue="Value"
        disabled={boolean('disabled', false)}
        promptLeftText={<span>Prompt</span>}
        hintText={<span>Hint</span>}
      />
      <br />
      <br />
      <TextInput
        id="l"
        defaultValue="Value"
        disabled={boolean('disabled', false)}
        icon={<MagnifyIcon />}
        promptLeftText={<span>Prompt</span>}
        hintText={<span>Hint</span>}
      />
      <br />
      <br />
      <TextInput
        id="m"
        defaultValue="Value"
        disabled={boolean('disabled', false)}
        promptRightText={<span>miles</span>}
        hintText={<span>Hint</span>}
      />
      <br />
      <br />
      <TextInput
        id="n"
        defaultValue="Value"
        disabled={boolean('disabled', false)}
        hasClearButton
        hintText={<span>Hint</span>}
        onClearClick={action('onClearClick')}
        promptRightText={<span>miles</span>}
      />
      <br />
      <br />
      <TextInput
        id="o"
        disabled={boolean('disabled', false)}
        hintText={<span>Hint</span>}
        promptLeftText={<span>$</span>}
        textAlign="right"
        defaultValue="0.00"
      />
    </div>
  ))
);
