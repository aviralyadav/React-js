import React from 'react';

import { shallowWithProviders } from 'test-utils';
import { TextInput } from './text-input.component';

describe('TextInput', () => {
  it('returns a function', () => {
    const actual = typeof TextInput;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('composes an InputBox and a RawTextInput', () => {
    const wrapper = shallowWithProviders(<TextInput />);
    expect(wrapper.find('InputBox').length).toEqual(1);
    expect(wrapper.find('RawTextInput').length).toEqual(1);
  });

  it("passes all props to it's children", () => {
    const expectedProps = {
      a: 1,
      b: 2,
      'complex-name': { c: 3, d: 'value' },
      e: false,
    };
    const wrapper = shallowWithProviders(<TextInput {...expectedProps} />);
    expect(wrapper.find('InputBox').props()).toMatchObject(expectedProps);
  });
});
