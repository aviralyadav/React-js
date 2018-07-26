// @flow
import React from 'react';
import { shallow } from 'enzyme';
import rgb from 'rgb';

import { mountWithProviders } from 'test-utils';

import { InputLabel } from './input-label.component';
import classes from './input-label.component.scss';
import { grey500 } from '../../../../theme/js/v1-theme/v1.colors';

describe('InputLabel', () => {
  function setup(props) {
    const component = <InputLabel {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputLabel;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a label', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('label').length).toEqual(1);
  });

  it('renders inputLabel className', () => {
    const { component } = setup();
    const wrapper = mountWithProviders(component);
    expect(wrapper.find('label').instance().className).toEqual(
      classes.inputLabel
    );
  });

  it('renders text', () => {
    const { component } = setup({ text: <span>My Label</span> });
    const wrapper = shallow(component);
    expect(wrapper.find('label').text()).toContain('My Label');
  });

  it('renders disabled text', () => {
    const { component } = setup({
      text: <span>My Label</span>,
      disabled: true,
    });
    const wrapper = mountWithProviders(component);
    expect(
      rgb(
        wrapper
          .find('label')
          .first()
          .instance().style.color
      )
    ).toEqual(rgb(grey500));
  });

  it('renders htmlFor attribute', () => {
    const { component } = setup({
      text: <span>My Label</span>,
      htmlFor: 'abc',
    });
    const wrapper = mountWithProviders(component);
    expect(
      wrapper
        .find('label')
        .first()
        .instance().htmlFor
    ).toEqual('abc');
  });
});
