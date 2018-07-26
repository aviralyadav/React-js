// @flow
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { text, selectV2, boolean } from '@storybook/addon-knobs';
import React from 'react';

import { FilterDrawerHeader } from './filter-drawer-header.component';
import { FilterDrawerBody } from './filter-drawer-body.component';
import { FilterDrawerFooter } from './filter-drawer-footer.component';

import {
  DynamicText,
  TypographyTypes,
} from '../old-components/dynamic-text/dynamic-text.component';
import { Button, ButtonTypes } from '../old-components/button/button.component';

const notes = `
The FilterDrawerHeader is used for displaying messages that require actions by the user



@message: Element<*>
The message to display. It is of type * so you can mix colors of text if needed.
Required.

@leftButton: Element<{Button}>
The button that will appear on the left.
Required.

@rightButton: Element<*>
The button that will appear on the right.
Required.

@isOpen: boolean
A flag for if the FilterDrawerHeader is displayed or not.
Required.
`;

storiesOf('FilterDrawer', module).add(
  'Basic',
  withNotes(notes)(() => (
    <div>
      <FilterDrawerHeader isOpen={boolean('IsOpen', true)} />
      <FilterDrawerBody isOpen={boolean('IsOpen', true)} />
      <FilterDrawerFooter isOpen={boolean('IsOpen', true)} />
    </div>
  ))
);
