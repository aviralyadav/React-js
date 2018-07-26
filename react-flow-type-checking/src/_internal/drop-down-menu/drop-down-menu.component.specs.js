import React from 'react';
import keycode from 'keycode';
import { mountWithProviders, shallowWithProviders } from 'test-utils';

import { DropDownMenu } from './drop-down-menu.component';
import { MenuItem } from '../../menu/menu-item/menu-item.component';
import { DynamicText } from '../../dynamic-text/dynamic-text.component';

describe('DropDownMenu', () => {
  it('returns a function', () => {
    const actual = typeof DropDownMenu;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('should display the right selected value text', () => {
    const wrapper = mountWithProviders(
      <DropDownMenu value={1}>
        <MenuItem value={1} primaryText={<DynamicText>One</DynamicText>} />
        <MenuItem value={2} primaryText={<DynamicText>Two</DynamicText>} />
      </DropDownMenu>
    );
    const dropDownButton = wrapper.find('DropDownButton');
    expect(dropDownButton.childAt(0).text()).toEqual('One');
  });

  it('should forward disabled property', () => {
    const wrapper = shallowWithProviders(<DropDownMenu disabled />);
    expect(wrapper.find('DropDownButton').prop('disabled')).toEqual(true);
  });

  it('should work with null child', () => {
    const wrapper = mountWithProviders(
      <DropDownMenu value={1}>
        <MenuItem value={1} primaryText={<DynamicText>One</DynamicText>} />
        {null}
      </DropDownMenu>
    );
    const dropDownButton = wrapper.find('DropDownButton');
    expect(dropDownButton.childAt(0).text()).toEqual('One');
  });

  it('should call onClose when an item is selected', (done) => {
    const handleClose = jest.fn();
    const wrapper = shallowWithProviders(
      <DropDownMenu onClose={handleClose}>
        <MenuItem primaryText={<DynamicText>Never</DynamicText>} />
      </DropDownMenu>
    );
    wrapper.setState({
      open: true,
    });
    wrapper
      .find('Menu')
      .props()
      .onItemClick(
        {
          persist: () => {},
        },
        { props: { value: 'test' } }
      );

    setTimeout(() => {
      expect(wrapper.state().open).toEqual(false);
      expect(handleClose).toHaveBeenCalledTimes(1);
      done();
    }, 0);
  });

  it('should call onChange when an item is selected', (done) => {
    const handleChange = jest.fn();
    const wrapper = shallowWithProviders(
      <DropDownMenu onChange={handleChange}>
        <MenuItem primaryText={<DynamicText>Never</DynamicText>} />
      </DropDownMenu>
    );

    wrapper.setState({
      open: true,
    });
    const event = {
      persist: () => {},
    };
    wrapper
      .find('Menu')
      .props()
      .onItemClick(
        event,
        {
          props: {
            value: 'foo',
          },
        },
        3
      );

    setTimeout(() => {
      expect(wrapper.state().open).toEqual(false);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(event, 'foo', undefined, 3);
      done();
    }, 0);
  });

  it('should open the menu when users interact', () => {
    const wrapper = mountWithProviders(
      <DropDownMenu value={1}>
        <MenuItem value={1} primaryText={<DynamicText>Never</DynamicText>} />
        <MenuItem
          value={2}
          primaryText={<DynamicText>Every Night</DynamicText>}
        />
      </DropDownMenu>
    );

    wrapper.find('button').simulate('keydown', {
      keyCode: keycode('enter'),
    });
    expect(wrapper.state().open).toEqual(true);
  });
});
