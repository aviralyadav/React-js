// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputYearRange } from './input-year-range.component';

// More thorough testing for this component coming soon.

const data = [
  { key: '2018', doc_count: 15 },
  { key: '2017', doc_count: 7 },
  { key: '2016', doc_count: 23 },
];

describe('InputYearRange', () => {
  it('returns a function', () => {
    const actual = typeof InputYearRange;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        id="abc"
        value="abc"
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        value="abc"
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        label="abc"
        value="abc"
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        isDisabled
        value="abc"
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter isNative', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        value="abc"
        isNative
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().isNative).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        fullWidth
        value="abc"
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass optional parameter inRow', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        fullWidth
        value="abc"
        inRow
        dataCollection={data}
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().inRow).toEqual(true);
  });

  it('pass optional parameter maximumLengthOfYear', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        maximumLengthOfYear={4}
        value="abc"
        dataCollection={[]}
        isDataAvailable={false}
      />
    );
    expect(wrapper.props().maximumLengthOfYear > 0).toEqual(true);
  });

  it('pass optional parameter isDataAvailable', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        maximumLengthOfYear={0}
        value="abc"
        dataCollection={data}
        isDataAvailable
      />
    );
    expect(wrapper.props().isDataAvailable).toEqual(true);
  });

  it('pass dataCollection and check', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        dataCollection={data}
        value="abc"
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().dataCollection.length > 0).toEqual(true);
  });

  it('pass no data to dataCollection and check', () => {
    const wrapper = mountWithProviders(
      <InputYearRange
        dataCollection={[]}
        value="abc"
        isDataAvailable
        maximumLengthOfYear={0}
      />
    );
    expect(wrapper.props().dataCollection.length === 0).toEqual(true);
  });
});
