// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { MenuItem } from '@material-ui/core';
import { titleLogos, actionIcons } from './app-bar.logos';
import { AppBar } from './app-bar.component';

const notes = `
AppBar can be initialized with properties to specify the small and large breakpoints:
Header = AppBar({small: { min: 0, max: 600 }, large: { min: 769, max: 9999 }});

@accountIconWhenSmall
boolean: optional value to replace name container with accountCircleIcon.

@actionIcons
actionIcons[]: an array of action Logos to be rendered on the AppBar.

@e2e
string: End to End identifier.

@onMenuButtonClick
() => void: the function to invoke when the hamburger menu icon is clicked.

@titleLogos
titleLogos[]: an array of large title Logos to be rendered on the AppBar.

@userMenuItems
MenuItem[]: an array of type MenuItem = { text:string; onClick?:() => void; } taking the text for a menu item and the function invoked when it is clicked.

@userFullName
string: Full name of the user.

@userInitials
string: Initials of the user.
`;

const userMenuItems = [
  <MenuItem key="ebay">eBay Login</MenuItem>,
  <MenuItem key="whatsNew">What&#39;s New</MenuItem>,
  <MenuItem key="support">Support</MenuItem>,
  <MenuItem key="logout" onClick={action('onClickLogout')}>
    Logout
  </MenuItem>,
];

storiesOf('AppBar', module)
  .add(
    'Basic',
    withNotes(notes)(() => (
      <div>
        <AppBar e2e="app-bar" />
      </div>
    ))
  )
  .add(
    'Advanced',
    withNotes(notes)(() => (
      <div>
        <AppBar
          e2e="app-bar"
          userFullName={text('userFullName', 'Shirish Veerabattini')}
          userInitials={text('userInitials', 'sv')}
          menuWidth={number('menuWidth', 150)}
          onMenuButtonClick={action('onMenuButtonClick')}
          userMenuItems={userMenuItems}
          titleLogos={titleLogos}
          actionIcons={actionIcons}
          accountIconWhenSmall
        />
      </div>
    ))
  );
