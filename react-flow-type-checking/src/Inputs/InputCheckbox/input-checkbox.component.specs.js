// @flow
import React from 'react';
import { mountWithProviders } from 'test-utils';
import { InputCheckbox } from './input-checkbox.component';

// More thorough testing for this component coming soon.

const checkboxData = [
  { key: 'Used', doc_count: 17 },
  { key: 'New', doc_count: 3 },
  { key: 'CPO', doc_count: 90 },
];

describe('InputCheckbox', () => {
  it('returns a function', () => {
    const actual = typeof InputCheckbox;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('passes name as a paramter', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox name="CONDITION" dataCollection={checkboxData} row />
    );
    expect(wrapper.props().name).toEqual('CONDITION');
  });

  it('pass data to render checkbox', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox name="CONDITION" dataCollection={checkboxData} row />
    );
    expect(wrapper.props().dataCollection.length > 0).toEqual(true);
  });

  it('pass no data to render checkbox', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox dataCollection={[]} row />
    );
    expect(wrapper.props().dataCollection.length === 0).toEqual(true);
  });

  it('pass optional parameter isChecked', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox dataCollection={[]} isChecked row />
    );
    expect(wrapper.props().isChecked).toEqual(true);
  });

  it('pass optional parameter row', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox dataCollection={[]} row />
    );
    expect(wrapper.props().row).toEqual(true);
  });
  it('pass optional parameter isDisabled', () => {
    const wrapper = mountWithProviders(
      <InputCheckbox dataCollection={[]} isDisabled row />
    );
    expect(wrapper.props().isDisabled).toEqual(true);
  });
});
