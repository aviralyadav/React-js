// @flow
import React from 'react';
import { shallow } from 'enzyme';
import rgb from 'rgb';

import { mountWithProviders, findByClassName } from 'test-utils';
import { InputNote } from './input-note.component';
import classes from './input-note.component.scss';
import { grey400 } from '../../../../theme/js/v1-theme/v1.colors';

describe('InputNote', () => {
  function setup(props) {
    const component = <InputNote {...props} />;

    return {
      component,
    };
  }

  it('returns a function', () => {
    const actual = typeof InputNote;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders a div', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders inputNote className', () => {
    const { component } = setup();
    const wrapper = shallow(component);
    expect(findByClassName(wrapper, classes.inputNote).length).toEqual(1);
  });

  it('renders text', () => {
    const { component } = setup({ text: <span>My Note</span> });
    const wrapper = shallow(component);
    expect(wrapper.find('div').text()).toContain('My Note');
  });

  it('renders disabled text', () => {
    const { component } = setup({ text: <span>My Note</span>, disabled: true });
    const wrapper = mountWithProviders(component);
    expect(
      rgb(
        wrapper
          .find('div')
          .first()
          .instance().style.color
      )
    ).toEqual(rgb(grey400));
  });
});
