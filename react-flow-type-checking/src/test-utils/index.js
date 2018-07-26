// @flow
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import type { Element } from 'react';
import PropTypes from 'prop-types';

import { IntlProvider, intlShape } from 'react-intl';
import { MuiThemeProvider } from '@material-ui/core';
import {
  createShallow,
  createMount,
  createRender,
  getClasses as getClassesMuiNext,
} from '@material-ui/core/test-utils';
import { theme } from '../theme';

configure({ adapter: new Adapter() });

const shallow = createShallow();
const mount = createMount();
const render = createRender();

const intlProvider = new IntlProvider({ locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();

// alpha theme
const muiTheme = theme.alphaTheme;

// next theme
const CHANNEL = '__THEMING__';
const muiThemeProvider = new MuiThemeProvider({ theme, children: <div /> }, {});
const muiThemeProviderContext = muiThemeProvider.getChildContext();

const addContextItems = (context) => {
  return {
    ...context,
    intl,
    // alpha theme
    muiTheme,
    // next theme
    ...muiThemeProviderContext,
  };
};

const addChildContextTypes = (childContextTypes) => {
  return {
    ...childContextTypes,
    intl: intlShape,
    // alpha theme
    muiTheme: PropTypes.object,
    // next theme
    muiThemeProviderOptions: PropTypes.object,
    [CHANNEL]: PropTypes.object,
  };
};

// returns a classes object where the keys are the element's JSS style names
// and the values are the generated className(s) strings.
export function getClasses(element: Object, options: Object = {}) {
  return getClassesMuiNext(element, {
    ...options,
    context: muiThemeProviderContext,
  });
}

export function shallowWithProviders(
  node: Element<any>,
  { context, childContextTypes }: Object = {}
) {
  return shallow(node, {
    context: addContextItems(context),
    childContextTypes: addChildContextTypes(childContextTypes),
  });
}

export function mountWithProviders(
  node: Element<any>,
  { context, childContextTypes, attachTo }: Object = {}
) {
  return mount(node, {
    context: addContextItems(context),
    childContextTypes: addChildContextTypes(childContextTypes),
    attachTo,
  });
}

export function renderWithProviders(
  node: Element<any>,
  { context, childContextTypes, attachTo }: Object = {}
) {
  return render(node, {
    context: addContextItems(context),
    childContextTypes: addChildContextTypes(childContextTypes),
    attachTo,
  });
}

export function findByClassName(wrapper: any, className: string) {
  return wrapper.find(`.${className.replace(' ', ' .')}`);
}
