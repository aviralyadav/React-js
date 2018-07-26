// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { mountWithProviders } from 'test-utils';

import { InputHintText } from './input-hint-text.component';
import classes from './input-hint-text.component.scss';

describe('InputHintText', () => {
  function setup(props) {
    const component = <InputHintText {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputHintText;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders inputHintText className', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('div').instance().className).toEqual(
      classes.inputHintText
    );
  });

  it('renders visible text', () => {
    const { component } = setup({ text: <span>My Hint</span>, show: true });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('div').text()).toContain('My Hint');
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.opacity
    ).toEqual('1');
  });

  it('renders hidden text', () => {
    const { component } = setup({ text: <span>My Hint</span>, show: false });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.opacity
    ).toEqual('0');
  });
});
