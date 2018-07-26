// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputDateTimeRange } from './input-date-time-range.component';

// More thorough testing for this component coming soon.

describe('InputDateTimeRange', () => {
  it('returns a function', () => {
    const actual = typeof InputDateTimeRange;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(<InputDateTimeRange id="abc" />);
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(<InputDateTimeRange value="abc" />);
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(<InputDateTimeRange label="abc" />);
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(<InputDateTimeRange isDisabled />);
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(<InputDateTimeRange fullWidth />);
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass optional parameter placeholder', () => {
    const wrapper = mountWithProviders(
      <InputDateTimeRange placeholder="Select Date" />
    );
    expect(wrapper.props().placeholder.length !== 0).toEqual(true);
  });
});
