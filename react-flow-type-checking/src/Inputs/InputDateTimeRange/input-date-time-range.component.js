// @flow
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import { RangeDelimeter } from '../range-delimeter/range-delimeter.component';

type ExternalProps = {
  id?: string,
  value?: string,
  label?: string,
  isDisabled?: boolean,
  fullWidth?: boolean,
  onChangeSelection?: () => void,
  placeholder?: string,
};
type Props = ExternalProps;

export class InputDateTimeRange extends React.Component<Props> {
  handleChange = (props: any) => {
    if (Object.prototype.hasOwnProperty.call(props, 'onChangeSelection')) {
      props.onChangeSelection();
    }
  };

  render() {
    return (
      <FormGroup row>
        <TextField
          id={this.props.id}
          label={this.props.label}
          value={this.props.value}
          onChange={this.handleChange(this.props)}
          type="datetime-local"
          placeholder={this.props.placeholder}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <RangeDelimeter />
        <TextField
          id={this.props.id}
          label={this.props.label}
          value={this.props.value}
          onChange={this.handleChange(this.props)}
          type="datetime-local"
          placeholder={this.props.placeholder}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormGroup>
    );
  }
}
