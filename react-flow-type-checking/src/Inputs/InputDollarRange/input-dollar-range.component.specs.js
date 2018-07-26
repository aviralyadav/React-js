// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputDollarRange } from './input-dollar-range.component';

describe('InputDollarRange', () => {
  it('returns a function', () => {
    const actual = typeof InputDollarRange;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange id="abc" value="abc" />
    );
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(<InputDollarRange value="abc" />);
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange label="abc" value="abc" />
    );
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange isDisabled value="abc" />
    );
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange fullWidth value="abc" />
    );
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass optional parameter placeholder', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange placeholder="Select Dollar" value="abc" />
    );
    expect(wrapper.props().placeholder.length !== 0).toEqual(true);
  });

  it('pass optional parameter currencySymbol', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange currencySymbol="$" value="abc" />
    );
    expect(wrapper.props().currencySymbol.length !== 0).toEqual(true);
  });

  it('pass optional parameter currencySymbolPosition', () => {
    const wrapper = mountWithProviders(
      <InputDollarRange
        currencySymbol="$"
        currencySymbolPosition="start"
        value="abc"
      />
    );
    expect(wrapper.props().currencySymbolPosition.length !== 0).toEqual(true);
  });
});
