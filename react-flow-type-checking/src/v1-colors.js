// @flow
// v1 (blackbird-ish) colors

/*

  Style Guide Names / Colors ------------------------------------------------------------------------- */

export const theme50 = '#F2FBFF';
export const theme100 = '#C3DAE8';
export const theme200 = '#8CD3FA';
export const theme300 = '#5CB2E0';
export const theme400 = '#3E97C7';
export const theme500 = '#1D86B8';
export const theme600 = '#137BAB';
export const theme700 = '#096F9E';
export const theme800 = '#136A99';
export const theme900 = '#26648B';

export const themeA100 = '#E0F5FE'; // HOVER LIGHT BLUE
export const themeA500 = '#199AD1'; // HOVER BLUE
export const themeA900 = '#1875A1'; // HOVER NAV BLUE

export const accent50 = '#A6EDAB';
export const accent100 = '#70E078';
export const accent200 = '#46E050';
export const accent300 = '#29CF34';
export const accent400 = '#00B40C';
export const accent500 = '#009F0B';
export const accent600 = '#00910A';
export const accent700 = '#008509';
export const accent800 = '#007808';
export const accent900 = '#006B07';

export const accentA100 = '#76E8A0';
export const accentA500 = '#4AB471'; // COMPLETE
export const accentA900 = '#409C61';

export const neutral50 = '#FFFFFF'; // WHITE
export const neutral100 = '#FAFAFA';
export const neutral200 = '#F5F5F5';
export const neutral300 = '#EAEAEA';
export const neutral400 = '#DDDDDD';
export const neutral500 = '#C7C7C7';
export const neutral600 = '#ADADAD';
export const neutral700 = '#898989';
export const neutral800 = '#333333';
export const neutral900 = '#2D2D2D';

export const neutralA100 = '#EBEBEB';
export const neutralA500 = '#4B4B4B'; // HOVER BLACK
export const neutralA900 = '#000000'; // BLACK

export const tertiary25 = '#FFF5D0';
export const tertiary50 = '#FFEFA8';
export const tertiary100 = '#FFC370';
export const tertiary200 = '#FAB85C';
export const tertiary300 = '#F3AE4E'; // OPEN OR WARNING
export const tertiary400 = '#F2A435';
export const tertiary500 = '#F2991D';
export const tertiary600 = '#ED8200';
export const tertiary700 = '#D47300'; // WARNING TEXT
export const tertiary800 = '#BA6600';
export const tertiary900 = '#A15800';

export const tertiaryA100 = '#FEF5CE';
export const tertiaryA500 = '#C88C18';
export const tertiaryA900 = '#A16720';

export const themeDanger = '#EB0C0C'; // ERROR OR DANGER
export const themeOverdue = '#CF5C60'; // OVERDUE ITEMS

/*

  Nice Names ------------------------------------------------------------------------- */

export const white = neutral50;
export const black = neutralA900;
export const transparent = 'rgba(0,0,0,0)';

export const themeWarning = tertiary300;
export const themeWarningText = tertiary700;
export const themeComplete = accentA500;

export const lightBlue = theme500;
export const borderBlue = theme500;
export const highlightBlue = theme500;
export const primaryBlue = theme500;
export const shadowBlue = theme500;
export const darkBlue = theme500;

export const hoverLightBlue = themeA100;
export const hoverBlue = themeA500;
export const hoverNavBlue = themeA900;

export const hoverGreen = accent400;
export const primaryGreen = accent500;

export const hoverYellow = tertiary50;
export const notificationYellow = tertiaryA100;

export const hoverGrey = neutral100;
export const primaryGrey = neutral200;
export const darkerGrey = neutral300;
export const borderGrey = neutral400;
export const inactive = neutral500;
export const textInactive = neutral600;
export const textLight = white;
export const textDark = neutral800;
export const highlightBlack = neutral900;
export const hoverBlack = neutralA500;

export const complete = accentA500;
export const warning = tertiary700;
export const overdue = themeOverdue;
export const error = themeDanger;

/*

  Color Specific Names ------------------------------------------------------------------------- */

export const grey50 = neutral50;
export const grey100 = neutral100;
export const grey200 = neutral200;
export const grey300 = neutral300;
export const grey400 = neutral400;
export const grey500 = neutral500;
export const grey600 = neutral600;
export const grey700 = neutral700;
export const grey800 = neutral800;
export const grey900 = neutral900;

export const blue50 = theme50;
export const blue100 = theme100;
export const blue200 = theme200;
export const blue300 = theme300;
export const blue400 = theme400;
export const blue500 = theme500;
export const blue600 = theme600;
export const blue700 = theme700;
export const blue800 = theme800;
export const blue900 = theme900;

export const yellow25 = tertiary25;
export const yellow50 = tertiary50;
export const yellow100 = tertiary100;
export const yellow200 = tertiary200;
export const yellow300 = tertiary300;
export const yellow400 = tertiary400;
export const yellow500 = tertiary500;
export const yellow600 = tertiary600;
export const yellow700 = tertiary700;
export const yellow800 = tertiary800;
export const yellow900 = tertiary900;

export const green50 = accent50;
export const green100 = accent100;
export const green200 = accent200;
export const green300 = accent300;
export const green400 = accent400;
export const green500 = accent500;
export const green600 = accent600;
export const green700 = accent700;
export const green800 = accent800;
export const green900 = accent900;

// These reds are not in the style guide. They should probably be deprecated?
export const red50 = '#F8DEE1';
export const red100 = '#F2BEC3';
export const red200 = '#E9939C';
export const red300 = '#E16876';
export const red400 = '#DA4253';
export const red500 = '#D5293C';
export const red600 = '#C52338';
export const red700 = '#AF1B32';
export const red800 = '#9A132C';
export const red900 = '#760523';
