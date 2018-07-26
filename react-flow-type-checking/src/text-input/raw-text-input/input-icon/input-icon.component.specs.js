// @flow
import React from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import { mountWithProviders } from 'test-utils';

import { InputIcon } from './input-icon.component';

describe('InputIcon', () => {
  function setup(props) {
    const component = <InputIcon {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputIcon;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders icon', () => {
    const { component } = setup({ icon: <MagnifyIcon /> });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('MagnifyIcon').length).toEqual(1);
  });
});
