// @flow
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

type ExternalProps = {
  dataCollection: any[],
  id?: string,
  value?: string,
  label?: string,
  isNative?: boolean,
  isDisabled?: boolean,
  fullWidth?: boolean,
  onChangeSelection?: () => void,
};
type Props = ExternalProps;

export class InputDropdown extends React.Component<Props> {
  handleSelection = (props: any) => {
    if (Object.prototype.hasOwnProperty.call(props, 'onChangeSelection')) {
      props.onChangeSelection();
    }
  };
  renderOptions() {
    if (this.props.dataCollection.length > 0) {
      return this.props.dataCollection.map((item, index) => {
        const count = index;
        if (this.props.isNative) {
          return (
            <option key={count} value={item}>
              {item.key}({item.doc_count})
            </option>
          );
        }
        return (
          <MenuItem key={count} value={item}>
            {item.key}({item.doc_count})
          </MenuItem>
        );
      });
    }
    return '';
  }
  render() {
    return (
      <FormControl>
        {this.props.label && (
          <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
        )}
        <Select
          fullWidth={this.props.fullWidth}
          disabled={this.props.isDisabled}
          native={this.props.isNative}
          value={this.props.value}
          onChange={this.handleSelection(this.props)}
          inputProps={{
            id: this.props.id,
          }}
        >
          {this.renderOptions()}
        </Select>
      </FormControl>
    );
  }
}
