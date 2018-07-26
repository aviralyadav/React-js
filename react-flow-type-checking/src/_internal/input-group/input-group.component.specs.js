// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { mountWithProviders, findByClassName } from 'test-utils';
import { InputGroup } from './input-group.component';

import classes from './input-group.component.scss';
import errorClasses from './input-error/input-error.component.scss';
import noteClasses from './input-note/input-note.component.scss';

describe('InputGroup', () => {
  function setup(props) {
    const component = (
      <InputGroup name="test" {...props}>
        <input type="text" />
      </InputGroup>
    );

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputGroup;
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
    expect(findByClassName(wrapper, classes.inputGroup).length).toEqual(1);
  });

  it('renders children', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('renders disabled input', () => {
    const { component } = setup({ disabled: true });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().disabled).toEqual(true);
  });

  it('renders errorText', () => {
    const { component } = setup({
      errorText: <span>My Error</span>,
      noteText: <span>Hidden</span>,
    });
    const wrapper = mountWithProviders(component);
    expect(findByClassName(wrapper, errorClasses.inputError).length).toEqual(1);
    expect(findByClassName(wrapper, errorClasses.inputError).text()).toEqual(
      'My Error'
    );
    expect(wrapper.text()).not.toMatch('Hidden:');
  });

  it('renders id', () => {
    const { component } = setup({ id: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().id).toEqual('aa');
  });

  it('renders labelText', () => {
    const { component } = setup({ labelText: <span>My Label</span> });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').text()).toContain('My Label');
  });

  it('renders name', () => {
    const { component } = setup({ name: 'aa' });
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('input').instance().name).toEqual('aa');
  });

  it('renders noteText', () => {
    const { component } = setup({ noteText: <span>My Note</span> });
    const wrapper = mountWithProviders(component);
    expect(findByClassName(wrapper, noteClasses.inputNote).length).toEqual(1);
    expect(findByClassName(wrapper, noteClasses.inputNote).text()).toEqual(
      'My Note'
    );
  });

  it('default width is 256px', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.width
    ).toEqual('256px');
  });

  it('fullWidth is 100%', () => {
    const { component } = setup({ fullWidth: true });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('div')
        .first()
        .instance().style.width
    ).toEqual('100%');
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
