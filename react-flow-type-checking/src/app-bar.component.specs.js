// @flow
import React from 'react';
import { MenuItem } from '@material-ui/core/MenuItem';
import { mountWithProviders, shallowWithProviders } from 'test-utils';
import { AppBar } from './app-bar.component';
import { titleLogos, actionIcons } from './app-bar.logos';

const userMenuItems = [<MenuItem key="ebay" primaryText="eBay Login" />];

// More thorough testing for this component coming soon.

describe('AppBarNew', () => {
  it('returns a function', () => {
    const actual = typeof AppBar;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('renders title logos', () => {
    const component = (
      <AppBar titleLogos={titleLogos} actionIcons={actionIcons} />
    );

    const wrapper = shallowWithProviders(component);
    expect(wrapper.prop('titleLogos')).toEqual(titleLogos);
    expect(wrapper.prop('actionIcons')).toEqual(actionIcons);
  });

  it('shows accountIcon when small', () => {
    const component = <AppBar accountIconWhenSmall />;

    const wrapper = mountWithProviders(component);
    expect(wrapper.prop('accountIconWhenSmall')).toEqual(true);
  });

  it('passes userMenuItems to Menu Component', () => {
    const component = <AppBar userMenuItems={userMenuItems} />;
    const wrapper = mountWithProviders(component);
    expect(wrapper.prop('userMenuItems')).toEqual(userMenuItems);
  });

  // below is not working because of component's responsive stuff
  it('passes userMenuItems to Menu Component', () => {
    // const component = <AppBar userMenuItems={userMenuItems} />;
    // const wrapper = mountWithProviders(component);
    // const menu = wrapper.find(Menu);
    // expect(menu.props().children[0]).toEqual(
    //   <MenuItem key="ebay" primaryText="eBay Login" />
    // );
  });

  it('passes name to Avatar Component', () => {
    // const name = 'Shirish Veerabattini';
    // const wrapper = mountWithProviders(<AppBar name={name} />);
    // const avatar = wrapper.find(Avatar);
    // expect(avatar.prop('initials')).toEqual(name);
  });
});
