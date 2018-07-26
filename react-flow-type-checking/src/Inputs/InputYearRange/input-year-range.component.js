// @flow
import React from 'react';
import type { Node } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import { RangeDelimeter } from '../range-delimeter/range-delimeter.component';

type ExternalProps = {
  id?: string,
  value?: string,
  label?: string,
  isNative?: boolean,
  isDisabled?: boolean,
  fullWidth?: boolean,
  dataCollection: any[],
  onChangeSelection?: () => void,
  maximumLengthOfYear: number,
  inRow?: boolean,
  isDataAvailable: boolean,
};
type Props = ExternalProps;

export class InputYearRange extends React.Component<Props> {
  generateYearsOptionsForYearComponent(): Node[] {
    if (!this.props.isDataAvailable && this.props.maximumLengthOfYear !== 0) {
      const year: number = new Date().getFullYear();
      const years: number[] = Array.from(
        new Array(this.props.maximumLengthOfYear),
        (val, index) => year - index
      );
      return years.map((item: number) => {
        if (this.props.isNative) {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        }
        return (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        );
      });
    }

    return this.props.dataCollection.map((item: any, index: number) => {
      const count = index;
      if (this.props.isNative) {
        return (
          <option key={count} value={item.key}>
            {item.key} ({item.doc_count})
          </option>
        );
      }
      return (
        <MenuItem key={count} value={item.key}>
          {item.key} ({item.doc_count})
        </MenuItem>
      );
    });
  }

  handleSelection = (props: any) => {
    if (Object.prototype.hasOwnProperty.call(props, 'onChangeSelection')) {
      props.onChangeSelection();
    }
  };

  render() {
    return (
      <FormGroup row>
        <FormControl>
          <Select
            native={this.props.isNative}
            disabled={this.props.isDisabled}
            value={this.props.value}
            onChange={this.handleSelection(this.props)}
            inputProps={{
              id: this.props.id,
            }}
          >
            {this.generateYearsOptionsForYearComponent()}
          </Select>
        </FormControl>
        <RangeDelimeter />
        <FormControl>
          <Select
            native={this.props.isNative}
            disabled={this.props.isDisabled}
            value={this.props.value}
            onChange={this.handleSelection(this.props)}
            inputProps={{
              id: this.props.id,
            }}
          >
            {this.generateYearsOptionsForYearComponent()}
          </Select>
        </FormControl>
      </FormGroup>
    );
  }
}
