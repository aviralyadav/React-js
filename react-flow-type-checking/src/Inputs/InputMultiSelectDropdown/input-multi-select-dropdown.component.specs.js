// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputMultiSelectDropdown } from './input-multi-select-dropdown.component';

// More thorough testing for this component coming soon.

const data = [
  { key: 'Used', doc_count: 17 },
  { key: 'New', doc_count: 3 },
  { key: 'CPO', doc_count: 9 },
];
describe('InputMultiSelectDropdown', () => {
  it('returns a function', () => {
    const actual = typeof InputMultiSelectDropdown;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('pass optional parameter id', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown id="abc" value="abc" dataCollection={data} />
    );
    expect(wrapper.props().id !== '').toEqual(true);
  });

  it('pass optional parameter value', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown value="abc" dataCollection={data} />
    );
    expect(wrapper.props().value !== '').toEqual(true);
  });

  it('pass optional parameter label', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown label="abc" value="abc" dataCollection={data} />
    );
    expect(wrapper.props().label !== '').toEqual(true);
  });

  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown isDisabled value="abc" dataCollection={data} />
    );
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it('pass optional parameter isNative', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown value="abc" isNative dataCollection={data} />
    );
    expect(wrapper.props().isNative).toEqual(true);
  });

  it('pass optional parameter fullWidth', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown fullWidth value="abc" dataCollection={data} />
    );
    expect(wrapper.props().fullWidth).toEqual(true);
  });

  it('pass dataCollection and check', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown dataCollection={data} value="abc" />
    );
    expect(wrapper.props().dataCollection.length > 0).toEqual(true);
  });

  it('pass no data to dataCollection and check', () => {
    const wrapper = mountWithProviders(
      <InputMultiSelectDropdown dataCollection={[]} value="abc" />
    );
    expect(wrapper.props().dataCollection.length === 0).toEqual(true);
  });
});
