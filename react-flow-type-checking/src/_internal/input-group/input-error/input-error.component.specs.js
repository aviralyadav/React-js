// @flow
import React from 'react';
import { shallow } from 'enzyme';
import rgb from 'rgb';

import { mountWithProviders, findByClassName } from 'test-utils';
import { InputError } from './input-error.component';
import classes from './input-error.component.scss';
import { grey400 } from '../../../../theme/js/v1-theme/v1.colors';

describe('InputError', () => {
  function setup(props) {
    const component = <InputError {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputError;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders inputError className', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.inputError).length).toEqual(1);
  });

  it('renders text', () => {
    const { component } = setup({ text: <span>My Error</span> });
    const wrapper = shallow(component);
    expect(wrapper.find('div').text()).toContain('My Error');
  });

  it('renders disabled', () => {
    const { component } = setup({
      text: <span>My Error</span>,
      disabled: true,
    });
    const wrapper = mountWithProviders(component);
    expect(rgb(wrapper.find('div').instance().style.color)).toEqual(
      rgb(grey400)
    );
  });
});
