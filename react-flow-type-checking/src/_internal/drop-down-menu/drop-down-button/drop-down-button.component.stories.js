// @flow
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import { blue700, white } from '../../../../theme/js/v1-theme/v1.colors';

import { DropDownButton } from './drop-down-button.component';

import { InputBox } from '../../input-box/input-box.component';
import { RawTextInput } from '../../../text-input/raw-text-input/raw-text-input.component';

const notes = `
  DropDownButton - PRIVATE

  Custom button for the DropDownMenu with FocusRipple located under the DownArrow
`;

storiesOf('private/DropDownButton', module).add(
  'examples',
  withNotes(notes)(() => (
    <div>
      <div
        style={{
          backgroundColor: blue700,
          height: 34,
          overflow: 'hidden',
          display: 'inline-flex',
          width: '100%',
          color: white,
        }}
      >
        <DropDownButton inverted disableFocusRipple>
          first
        </DropDownButton>
        <DropDownButton inverted disableFocusRipple>
          {text('Name', 'drop-down-button')}
        </DropDownButton>
        <DropDownButton disabled inverted disableFocusRipple>
          disabled
        </DropDownButton>
      </div>

      <br />
      <br />
      <InputBox width={300}>
        <RawTextInput hintText={<span>Hint</span>} />
        <DropDownButton disableTouchRipple>
          {text('Name', 'drop-down-button')}
        </DropDownButton>
      </InputBox>

      <br />
      <br />
      <InputBox disabled height={36}>
        <DropDownButton disableFocusRipple disableTouchRipple>
          disabled
        </DropDownButton>
      </InputBox>

      <br />
      <br />
      <InputBox height={36}>
        <DropDownButton disableFocusRipple disableTouchRipple>
          {text('Name', 'drop-down-button')}
        </DropDownButton>
      </InputBox>

      <br />
      <br />
      <InputBox height={36} width={100}>
        <DropDownButton disableFocusRipple disableTouchRipple>
          {text('Name', 'drop-down-button')}
        </DropDownButton>
      </InputBox>
    </div>
  ))
);
