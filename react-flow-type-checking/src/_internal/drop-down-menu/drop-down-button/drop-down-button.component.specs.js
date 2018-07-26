import React from 'react';
import { mountWithProviders } from 'test-utils';

import { DropDownButton } from './drop-down-button.component';
import styles from './drop-down-button.component.scss';

describe('DropDownButton', () => {
  function setup(props) {
    const actions = {
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      onKeyDown: jest.fn(),
      onClick: jest.fn(),
    };
    const component = (
      <DropDownButton name="test" {...props} {...actions}>
        <span>Hello</span>
      </DropDownButton>
    );

    return {
      component,
      actions,
    };
  }

  it('returns a function', () => {
    const actual = typeof DropDownButton;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders button', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
    expect(button.text()).toContain('Hello');
    expect(button.props().tabIndex).toEqual(0);
  });

  it('renders disabled button', () => {
    const { component } = setup({ disabled: true });
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    expect(button.instance().disabled).toEqual(true);
  });

  it('renders hint color', () => {
    const { component } = setup({ isHint: true });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find(`.${styles.isHint}`).length).toEqual(1);
  });

  it('inverted is: white, touchRipple', () => {
    const { component } = setup({ inverted: true });
    const wrapper = mountWithProviders(component);
    const touchRipple = wrapper.find('TouchRipple');
    expect(touchRipple.length).toEqual(1);
  });

  it('defaults is: black, no touchRipple', () => {
    const { component } = setup({
      inverted: false,
      disableFocusRipple: true,
      disableTouchRipple: true,
    });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('TouchRipple').length).toEqual(0);
  });

  it('renders id', () => {
    const { component } = setup({ id: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('button').instance().id).toEqual('aa');
  });

  it('renders name', () => {
    const { component } = setup({ name: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('button').instance().name).toEqual('aa');
  });

  it('calls onBlur', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    button.simulate('blur');
    expect(actions.onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    button.simulate('focus');
    expect(actions.onFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    button.simulate('keyDown');
    expect(actions.onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('calls onClick', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(actions.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders tabIndex', () => {
    const { component } = setup({ tabIndex: 8 });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('button').instance().tabIndex).toEqual(8);
  });
});
