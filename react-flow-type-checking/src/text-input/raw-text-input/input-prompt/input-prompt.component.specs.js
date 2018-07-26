// @flow
import React from 'react';

import { mountWithProviders } from 'test-utils';

import { InputPrompt } from './input-prompt.component';
import classes from './input-prompt.component.scss';

describe('InputPrompt', () => {
  function setup(props) {
    const component = <InputPrompt {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputPrompt;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a span', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('renders inputPrompt className', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('span').instance().className).toEqual(
      classes.inputPrompt
    );
  });

  it('renders visible text', () => {
    const { component } = setup({ text: <i>My Prompt</i> });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('span').text()).toContain('My Prompt');
  });
});
