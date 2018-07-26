// @flow
import React from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import { mountWithProviders, findByClassName } from 'test-utils';
import { RawTextInput } from './raw-text-input.component';
import hintTextClasses from './input-hint-text/input-hint-text.component.scss';

describe('RawTextInput', () => {
  function setup(props) {
    const actions = {
      onChange: jest.fn(),
      onClearClick: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
    };
    const component = <RawTextInput {...props} {...actions} />;

    return {
      component,
      actions,
    };
  }

  it('returns a function', () => {
    const actual = typeof RawTextInput;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders input and default type="text"', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').instance().type).toEqual('text');
  });

  it('renders defaultValue', () => {
    const { component } = setup({ defaultValue: 'Default Value' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().defaultValue).toEqual(
      'Default Value'
    );
    expect(wrapper.find('input').instance().value).toEqual('Default Value');
  });

  it('renders disabled input', () => {
    const { component } = setup({ disabled: true });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().disabled).toEqual(true);
  });

  it('renders disabled textarea', () => {
    const { component } = setup({ disabled: true, multiLine: true });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('textarea')
        .at(1)
        .instance().disabled
    ).toEqual(true);
  });

  it('renders clear button and no promptRightText', () => {
    const { component } = setup({
      hasClearButton: true,
      promptRightText: <span>Prompt Right</span>,
    });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.text()).not.toMatch('Prompt Right');
  });

  it('renders visible hint when no value', () => {
    const { component } = setup({ hintText: <span>Hint</span>, value: '' });
    const wrapper = mountWithProviders(component);
    const hint = findByClassName(wrapper, hintTextClasses.inputHintText);
    expect(hint.text()).toEqual('Hint');
    expect(hint.instance().style.opacity).toEqual('1');
  });

  it('renders hidden hint when value', () => {
    const { component } = setup({
      hintText: <span>Hint</span>,
      value: 'Value',
    });
    const wrapper = mountWithProviders(component);
    const hint = findByClassName(wrapper, hintTextClasses.inputHintText);
    expect(hint.text()).toEqual('Hint');
    expect(hint.instance().style.opacity).toEqual('0');
    expect(wrapper.find('input').instance().value).toEqual('Value');
  });

  it('renders icon and no promptLeftText', () => {
    const { component } = setup({
      icon: <MagnifyIcon />,
      promptLeftText: <span>Prompt Left</span>,
    });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('MagnifyIcon').length).toEqual(1);
    expect(wrapper.text()).not.toMatch('Prompt Left');
  });

  it('renders id', () => {
    const { component } = setup({ id: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().id).toEqual('aa');
  });

  it('renders multiLine', () => {
    const { component } = setup({ multiLine: true });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('textarea').length).toEqual(2);
  });

  it('renders name', () => {
    const { component } = setup({ name: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().name).toEqual('aa');
  });

  it('calls onBlur', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(actions.onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onChange', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const input = wrapper.find('input');
    input.simulate('change');
    expect(actions.onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onClearClick', () => {
    const { actions, component } = setup({ hasClearButton: true });
    const wrapper = mountWithProviders(component);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(actions.onClearClick).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus', () => {
    const { actions, component } = setup();
    const wrapper = mountWithProviders(component);
    const input = wrapper.find('input');
    input.simulate('focus');
    expect(actions.onFocus).toHaveBeenCalledTimes(1);
  });

  it('renders promptLeftText', () => {
    const { component } = setup({ promptLeftText: <span>Prompt Left</span> });
    const wrapper = mountWithProviders(component);
    expect(wrapper.text()).toContain('Prompt Left');
  });

  it('renders promptRightText', () => {
    const { component } = setup({ promptRightText: <span>Prompt Right</span> });
    const wrapper = mountWithProviders(component);
    expect(wrapper.text()).toContain('Prompt Right');
  });

  it('renders rows', () => {
    const { component } = setup({ multiLine: true, rows: 3 });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('textarea')
        .at(1)
        .instance().rows
    ).toEqual(3);
  });

  it('renders tabIndex', () => {
    const { component } = setup({ tabIndex: 8 });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().tabIndex).toEqual(8);
  });

  it('renders textAlign right', () => {
    const { component } = setup({ textAlign: 'right' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().style.textAlign).toEqual('right');
  });

  it('renders type', () => {
    const { component } = setup({ type: 'password' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().type).toEqual('password');
  });

  it('renders value', () => {
    const { component } = setup({ value: 'Value' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().value).toEqual('Value');
  });

  it('renders value (multiLine)', () => {
    const { component } = setup({ value: 'Value\nLine2', multiLine: true });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('textarea')
        .at(1)
        .instance().value
    ).toEqual('Value\nLine2');
  });
});
