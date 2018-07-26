// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputDateRange } from './input-date-range.component';

// More thorough testing for this component coming soon.

describe('InputDateRange', () => {
  it('returns a function', () => {
    const actual = typeof InputDateRange;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(<InputDateRange id="abc" />);
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(<InputDateRange value="abc" />);
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(<InputDateRange label="abc" />);
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(<InputDateRange isDisabled />);
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(<InputDateRange fullWidth />);
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass optional parameter placeholder', () => {
    const wrapper = mountWithProviders(
      <InputDateRange placeholder="Select Date" />
    );
    expect(wrapper.props().placeholder.length !== 0).toEqual(true);
  });
});
