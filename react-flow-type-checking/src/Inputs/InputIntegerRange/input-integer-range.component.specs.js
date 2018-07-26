// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputIntegerRange } from './input-integer-range.component';

// More thorough testing for this component coming soon.

describe('InputIntegerRange', () => {
  it('returns a function', () => {
    const actual = typeof InputIntegerRange;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });
  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(
      <InputIntegerRange id="abc" value="abc" />
    );
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(<InputIntegerRange value="abc" />);
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(
      <InputIntegerRange label="abc" value="abc" />
    );
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(
      <InputIntegerRange isDisabled value="abc" />
    );
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(
      <InputIntegerRange fullWidth value="abc" />
    );
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass optional parameter placeholder', () => {
    const wrapper = mountWithProviders(
      <InputIntegerRange placeholder="Select Dollar" value="abc" />
    );
    expect(wrapper.props().placeholder.length !== 0).toEqual(true);
  });
});
