// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { findByClassName } from 'test-utils';

import { InputUnderline } from './input-underline.component';
import classes from './input-underline.component.scss';

describe('InputUnderline', () => {
  function setup(props) {
    const component = <InputUnderline {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputUnderline;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders an hr', () => {
    const { component } = setup({ error: false });
    const wrapper = shallow(component);
    expect(wrapper.find('hr').length).toEqual(1);
  });

  it('renders focus className', () => {
    const { component } = setup({ error: false });
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.focus).length).toEqual(1);
  });

  it('renders error className', () => {
    const { component } = setup({ error: true });
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.error).length).toEqual(1);
  });
});
