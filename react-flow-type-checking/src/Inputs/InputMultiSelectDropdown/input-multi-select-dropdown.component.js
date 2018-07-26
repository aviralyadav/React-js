// @flow
import React from 'react';
import type { Element } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

type ExternalProps = {
  id?: string,
  value?: string,
  label?: string,
  isNative?: boolean,
  isDisabled?: boolean,
  fullWidth?: boolean,
  dataCollection: Object[],
  onChangeSelection?: () => void,
};

type Props = ExternalProps;

type State = {
  name: any[],
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export class InputMultiSelectDropdown extends React.Component<Props, State> {
  static defaultProps = {
    id: 'multiCheckbox',
    value: '',
    label: '',
    isNative: false,
    isDisabled: false,
    fullWidth: false,
    dataCollection: [],
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      name: [],
    };
  }

  handleChange = (event: any) => {
    this.setState({ name: event.target.value });
  };
  renderMultiSelectDropDown() {
    return (
      <FormControl>
        {this.props.label !== '' ? (
          <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
        ) : (
          ''
        )}
        <Select
          multiple
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input id={this.props.id} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {this.renderOptionsForDropDown()}
        </Select>
      </FormControl>
    );
  }
  renderOptionsForDropDown(): Element<*>[] {
    const data =
      this.props.dataCollection !== undefined ? this.props.dataCollection : [];
    return data.map((item: Object) => {
      return (
        <MenuItem key={item.key} value={item.key}>
          <Checkbox
            disableRipple
            checked={this.state.name.indexOf(item.key) > -1}
          />
          <ListItemText primary={`${item.key} (${item.doc_count})`} />
        </MenuItem>
      );
    });
  }
  render() {
    return <div>{this.renderMultiSelectDropDown()}</div>;
  }
}
