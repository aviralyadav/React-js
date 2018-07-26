// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { findByClassName } from 'test-utils';

import { MultiInputControl } from './multi-input-control.component';
import classes from './multi-input-control.component.scss';

describe('MultiInputControl', () => {
  function setup(props) {
    const component = (
      <MultiInputControl {...props}>
        <input type="text" />
      </MultiInputControl>
    );

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof MultiInputControl;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders inputGroup className', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.multiInputControl).length).toEqual(
      1
    );
  });

  it('renders children', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
