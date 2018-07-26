// @flow
import React from 'react';
import { shallow } from 'enzyme';
import rgb from 'rgb';

import { mountWithProviders, findByClassName } from 'test-utils';
import { InputBox } from './input-box.component';
import classes from './input-box.component.scss';
import underlineClasses from './input-underline/input-underline.component.scss';
import { grey100 } from '../../../theme/js/v1-theme/v1.colors';

describe('InputBox', () => {
  function setup(props) {
    const actions = {
      onFocus: jest.fn(),
      onBlur: jest.fn(),
    };

    const component = (
      <InputBox {...props} {...actions}>
        <input type="text" style={{ width: '100%' }} />
      </InputBox>
    );

    return {
      component,
      actions,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputBox;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders inputBox className', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.inputBox).length).toEqual(1);
  });

  it('renders children', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('renders disabled background', () => {
    const { component } = setup({ disabled: true });
    const wrapper = mountWithProviders(component);
    expect(rgb(wrapper.find('div').instance().style.backgroundColor)).toEqual(
      rgb(grey100)
    );
  });

  it('calls onBlur', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(actions.onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const input = wrapper.find('input');
    input.simulate('focus');
    expect(actions.onFocus).toHaveBeenCalledTimes(1);
  });

  it('renders underline on focus', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(findByClassName(wrapper, underlineClasses.focus).length).toEqual(0);
    wrapper.find('input').simulate('focus');
    expect(findByClassName(wrapper, underlineClasses.focus).length).toEqual(1);
  });

  it('removes underline on blur', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    wrapper.setState({
      isFocused: true,
    });
    expect(findByClassName(wrapper, underlineClasses.focus).length).toEqual(1);
    wrapper.find('input').simulate('blur');
    expect(findByClassName(wrapper, underlineClasses.focus).length).toEqual(0);
  });

  it('renders error underline on focus', () => {
    const { component } = setup({ errorText: <span>Error</span> });
    const wrapper = mountWithProviders(component);
    expect(findByClassName(wrapper, underlineClasses.error).length).toEqual(0);
    wrapper.find('input').simulate('focus');
    expect(findByClassName(wrapper, underlineClasses.error).length).toEqual(1);
  });

  it('renders width (number)', () => {
    const { component } = setup({ width: 220 });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.width
    ).toEqual('220px');
  });

  it('custom width (string)', () => {
    const { component } = setup({ width: '200em' });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.width
    ).toEqual('200em');
  });
});
