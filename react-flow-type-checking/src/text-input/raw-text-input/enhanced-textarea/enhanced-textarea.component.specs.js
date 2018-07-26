// @flow
import React from 'react';

import { mountWithProviders } from 'test-utils';

import { EnhancedTextarea } from './enhanced-textarea.component';

describe('EnhancedTextarea', () => {
  function setup(props) {
    const component = <EnhancedTextarea {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof EnhancedTextarea;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders 2 textarea', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('textarea').length).toEqual(2);
  });

  it('default height is 1 line height', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.state().height).toEqual(31);
  });

  it.skip('default height is 2 line height', () => {
    // TODO: must test inside the dom?
    // shadow.scrollHeight always returns 0!
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    wrapper.setProps({ rows: 2, value: 'Line1\nLine2' });
    expect(wrapper.state().height).toEqual(51);
  });
});
