// @flow
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { RangeDelimeter } from '../range-delimeter/range-delimeter.component';

type ExternalProps = {
  id?: string,
  value?: string,
  label?: string,
  isDisabled?: boolean,
  fullWidth?: boolean,
  onChangeSelection?: () => void,
  currencySymbol?: string, // $
  currencySymbolPosition?: string, // start or end
  placeholder?: string,
};
type Props = ExternalProps;

export class InputDollarRange extends React.Component<Props> {
  renderDollarRangeComponent() {
    return (
      <FormGroup row>
        <FormControl>
          <Input
            id={this.props.id}
            type="number"
            placeholder={this.props.placeholder}
            startAdornment={
              <InputAdornment position={this.props.currencySymbolPosition}>
                {this.props.currencySymbol}
              </InputAdornment>
            }
          />
        </FormControl>
        <RangeDelimeter />
        <FormControl>
          <Input
            id={this.props.id}
            type="number"
            placeholder={this.props.placeholder}
            startAdornment={
              <InputAdornment position={this.props.currencySymbolPosition}>
                {this.props.currencySymbol}
              </InputAdornment>
            }
          />
        </FormControl>
      </FormGroup>
    );
  }

  render() {
    return this.renderDollarRangeComponent();
  }
}
