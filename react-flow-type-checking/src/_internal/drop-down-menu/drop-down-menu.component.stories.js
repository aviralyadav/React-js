// @flow
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import React from 'react';
import { MenuItem } from '../../menu/menu-item/menu-item.component';
import { SelectValueContainer } from '../utils/select-value-container';
import { blue700 } from '../../../theme/js/v1-theme/v1.colors';

import { DropDownMenu } from './drop-down-menu.component';
import { DynamicText } from '../../dynamic-text/dynamic-text.component';

const notes = `
  DropDownMenu - INTERNAL

  Base DropDownMenu for the TitleBarDropDownMenu and for thr SelectField.

  @children
  The MenuItems to populate the Menu with. If the MenuItems have the prop label that value will be used to render the representation of that item within the field.

  @disabled
  boolean: Disables the DropDownMenu if set to true.
  default: false

  @hintText
  Element: The hint content to display when no value is selected.

  @id
  string: The id prop for the DropDownButton.

  @inverted
  boolean: If true, has TitleBarStyle, with TouchRipple and no FocusRipple.
  default: false

  @name
  string: Name applied to the DropDownButton.

  @maxHeight
  number: Override the default max-height of the underlying DropDownMenu element.
  default: 500

  @multiple
  boolean: If true, value must be an array and the DropDownMenu will support multiple selections
  default: false

  @onBlur
  (event: object) => void: Callback function that is fired when the DropDownButton.
  event: Blur event targeting the DropDownButton.

  @onChange
  (event:object, newValue:any, previousValue:any, index:number) => void: Callback function that is fired when a menu item is selected.
  event: Click event targeting the menu item that was selected.
  newValue: If multiple is true, the menu's value array with either the menu item's value added (if it wasn't already selected) or omitted (if it was already selected). Otherwise, the value of the menu item.
  index: The index of the selected menu item, or undefined if multiple is true.

  @onClose
  () => void: Callback function fired when the menu is closed.

  @onFocus
  (event: object) => void: Callback function that is fired when the DropDownButton.
  event: Focus event targeting the DropDownButton.

  @selectionRenderer
  (value: any) => Element|string: Customize the rendering of the selected item.
  value: If multiple is true, the menu's value array with either the menu item's value added (if it wasn't already selected) or omitted (if it was already selected). Otherwise, the value of the menu item.
  returns: the Element or text to render.

  @tabIndex
  number: Specifies the tab order. Use -1 to prevent tabbing to the DropDownMenu.

  @value
  any: If multiple is true, an array of the values of the selected menu items. Otherwise, the value of the selected menu item.

  @width
  number|string: The width of the DropDownMenu.
  default: 'auto'
`;

storiesOf('internal/DropDownMenu', module).add(
  'Basic',
  withNotes(notes)(() => (
    <div>
      <div
        style={{
          backgroundColor: blue700,
          height: 34,
        }}
      >
        <SelectValueContainer initialValue={1}>
          <DropDownMenu
            onChange={action('Changed')}
            inverted
            hintText={<DynamicText>Select One</DynamicText>}
          >
            <MenuItem value={null} />
            <MenuItem
              value={1}
              primaryText={<DynamicText>Hello</DynamicText>}
            />
            <MenuItem
              value={2}
              primaryText={<DynamicText>Goodbye</DynamicText>}
            />
            <MenuItem
              value={3}
              primaryText={<DynamicText>HelloGoodbye</DynamicText>}
            />
          </DropDownMenu>
        </SelectValueContainer>
        <SelectValueContainer initialValue={4}>
          <DropDownMenu
            onChange={action('Changed')}
            inverted
            hintText={<span>Select One</span>}
          >
            <MenuItem value={null} />
            <MenuItem
              value={1}
              primaryText={<DynamicText>Never</DynamicText>}
            />
            <MenuItem
              value={2}
              primaryText={<DynamicText>Every Night</DynamicText>}
            />
            <MenuItem
              value={3}
              primaryText={<DynamicText>Weeknights</DynamicText>}
            />
            <MenuItem
              value={4}
              primaryText={<DynamicText>Weekends</DynamicText>}
            />
            <MenuItem
              value={5}
              primaryText={<DynamicText>Weekly</DynamicText>}
            />
          </DropDownMenu>
        </SelectValueContainer>
        <SelectValueContainer initialValue={1}>
          <DropDownMenu onChange={action('Changed')} inverted width={200}>
            <MenuItem
              value={1}
              primaryText={<DynamicText>Custom width</DynamicText>}
            />
            <MenuItem
              value={2}
              primaryText={<DynamicText>Every Night</DynamicText>}
            />
            <MenuItem
              value={3}
              primaryText={<DynamicText>Weeknights</DynamicText>}
            />
            <MenuItem
              value={4}
              primaryText={<DynamicText>Weekends</DynamicText>}
            />
            <MenuItem
              value={5}
              primaryText={<DynamicText>Weekly</DynamicText>}
            />
          </DropDownMenu>
        </SelectValueContainer>
        <SelectValueContainer initialValue={1}>
          <DropDownMenu onChange={action('Changed')} inverted disabled>
            <MenuItem
              value={1}
              primaryText={<DynamicText>Disabled</DynamicText>}
            />
          </DropDownMenu>
        </SelectValueContainer>
      </div>

      <SelectValueContainer initialValue={2}>
        <DropDownMenu
          onChange={action('Changed')}
          hintText={<DynamicText>Select One</DynamicText>}
        >
          <MenuItem value={null} />
          <MenuItem value={1} primaryText={<DynamicText>Hello</DynamicText>} />
          <MenuItem
            value={2}
            primaryText={<DynamicText>Goodbye</DynamicText>}
          />
          <MenuItem
            value={3}
            primaryText={<DynamicText>HelloGoodbye</DynamicText>}
          />
        </DropDownMenu>
      </SelectValueContainer>
      <br />
      <SelectValueContainer initialValue={1}>
        <DropDownMenu
          onChange={action('Changed')}
          disabled
          hintText={<DynamicText>Select One</DynamicText>}
        >
          <MenuItem value={1} primaryText={<DynamicText>Hello</DynamicText>} />
        </DropDownMenu>
      </SelectValueContainer>
    </div>
  ))
);
