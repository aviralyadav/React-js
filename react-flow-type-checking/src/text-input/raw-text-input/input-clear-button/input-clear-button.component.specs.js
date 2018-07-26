// @flow
import React from 'react';

import { mountWithProviders } from 'test-utils';

import { InputClearButton } from './input-clear-button.component';

describe('InputClearButton', () => {
  function setup(props) {
    const component = <InputClearButton {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputClearButton;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a button', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('renders the Close Icon', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('CloseIcon').length).toEqual(1);
  });
});
