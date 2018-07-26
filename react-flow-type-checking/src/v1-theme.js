// @flow
import { createMuiTheme } from '@material-ui/core';
import { v1AlphaTheme } from './v1-alpha.theme';
import * as colors from './v1.colors';
import { dsv1 } from './ds-v1.theme';

const spacing = {
  iconSize: 24,
  desktopGutter: 24,
  desktopGutterMore: 32,
  desktopGutterLess: 16,
  desktopGutterMini: 8,
  desktopKeylineIncrement: 64,
  desktopDropDownMenuItemHeight: 32,
  desktopDropDownMenuFontSize: 15,
  desktopLeftNavMenuItemHeight: 48,
  desktopSubheaderHeight: 48,
  desktopToolbarHeight: 44,
  leftNavWidthFull: 230,
  leftNavSpacing: 12,
  iconButtonSize: 30,
  topNavHeight: 44,
};

const typography = {
  body1: {
    fontSize: 13,
  },
  subheading: {
    fontSize: 15,
  },
  button: {
    textTransform: 'none',
  },
  caption: {
    fontSize: 11,
    color: colors.neutral700,
  },
};

const palette = {
  primary: {
    light: colors.theme100,
    main: colors.theme500,
    dark: colors.theme900,
  },
  secondary: {
    light: colors.accent100,
    main: colors.accent500,
    dark: colors.accent900,
  },
  error: {
    light: colors.themeOverdue,
    main: colors.themeDanger,
    dark: colors.themeDanger,
  },
  common: {
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
  },
  grey: {
    '50': colors.neutral50,
    '100': colors.neutral100,
    '200': colors.neutral200,
    '300': colors.neutral300,
    '400': colors.neutral400,
    '500': colors.neutral500,
    '600': colors.neutral600,
    '700': colors.neutral700,
    '800': colors.neutral800,
    '900': colors.neutral900,
    A100: colors.neutralA100,
    A200: colors.neutralA100,
    A400: colors.neutralA500,
    A700: colors.neutralA900,
  },
  background: {
    default: colors.neutral200,
  },
};

export const v1Theme = createMuiTheme({
  name: 'v1',
  // TODO: remove alphaTheme when all components use '@material-ui/core'
  alphaTheme: v1AlphaTheme,
  ds: dsv1,
  colors,
  spacing,
  typography,
  palette,
  mixins: {
    toolbar: {
      minHeight: spacing.topNavHeight,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: spacing.topNavHeight,
      },
      '@media (min-width:600px)': {
        minHeight: spacing.topNavHeight,
      },
    },
  },
  overrides: {
    MuiTable: {
      root: {
        fontSize: typography.body1.fontSize,
        color: colors.neutral800,
      },
    },
    MuiTableSortLabel: {
      root: {
        color: colors.neutral600,
        '&:hover': {
          color: colors.themeA500,
        },
      },
      active: {
        color: colors.neutral600,
        '&:hover': {
          color: colors.themeA500,
        },
      },
      icon: {
        width: '18px',
        height: '18px',
        marginLeft: '2px',
        marginRight: '2px',
      },
    },
    MuiTableRow: {
      root: {
        height: 'auto',
      },
      head: {
        height: 'auto',
      },
    },
    MuiPaper: {
      elevation1: {
        border: `1px solid ${colors.borderGrey}`,
        boxShadow: 'none',
      },
    },
    MuiTableCell: {
      root: {
        padding: '7px 15px',
        fontSize: 'inherit',
      },
      head: {
        fontSize: 'inherit',
        whiteSpace: 'nowrap',
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: colors.neutralA900,
        color: colors.neutral50,
      },
      colorPrimary: {
        backgroundColor: colors.theme900,
        color: colors.neutral50,
      },
      colorSecondary: {
        backgroundColor: colors.theme500,
        color: colors.neutral50,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      raised: {
        boxShadow: 'none',
      },
      raisedPrimary: {
        color: colors.neutral50,
        backgroundColor: colors.theme500,
        '&:hover': {
          backgroundColor: colors.themeA500,
        },
      },
      raisedSecondary: {
        color: colors.neutral50,
        backgroundColor: colors.accent500,
        '&:hover': {
          backgroundColor: colors.accent400,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: 20,
      },
    },
    MuiDialogContent: {
      root: {
        fontSize: 16,
        color: colors.neutral700,
        fontFamily: 'Roboto, sans-serif',
      },
    },
    MuiFormGroup: {
      root: {
        fontSize: typography.body1.fontSize,
      },
      row: {
        alignItems: 'center',
      },
    },
    MuiInput: {
      root: {
        fontSize: typography.body1.fontSize,
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 15,
      },
      label: {
        fontSize: typography.body1.fontSize,
      },
    },
    MuiRadio: {
      root: {
        color: colors.neutral800,
        height: 'auto',
        width: 'auto',
        marginRight: 5,
      },
      colorSecondary: {
        '&$checked': {
          color: colors.neutral800,
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: colors.neutral800,
        height: 'auto',
        width: 'auto',
        marginRight: 5,
      },
      colorSecondary: {
        '&$checked': {
          color: colors.neutral800,
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: 'inherit',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: typography.body1.fontSize,
      },
    },
    MuiListItemText: {
      root: {
        padding: 0,
      },
      primary: {
        fontSize: 'inherit',
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 0,
        backgroundColor: palette.grey[800],
      },
      open: {
        opacity: 0.8,
      },
    },
    MuiIconButton: {
      root: {
        width: spacing.iconButtonSize,
        height: spacing.iconButtonSize,
      },
    },
  },
});
