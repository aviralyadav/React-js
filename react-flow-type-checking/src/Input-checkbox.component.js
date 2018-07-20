// @flow
import React from 'react';
import type { Element } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from '../../Checkbox/';

type ExternalProps = {
  row: boolean,
  name?: string,
  isDisabled?: boolean,
  dataCollection: Object[],
  onChangeSelection?: () => void,
  isChecked?: boolean,
};
type Props = ExternalProps;

export class InputCheckbox extends React.Component<Props> {
  handleSelection = (props: any) => {
    if (Object.prototype.hasOwnProperty.call(props, 'onChangeSelection')) {
      props.onChangeSelection();
    }
  };

  renderCheckboxes(name: string = '', data: Object[] = []): ?(Element<*>[]) {
    if (data.length > 0) {
      return data.map((item: Object) => {
        return (
          <Checkbox
            name={name}
            key={item.key}
            value={item.key}
            checked={this.props.isChecked}
            disabled={this.props.isDisabled}
            labelText={item.key}
            onCheck={this.handleSelection(this.props)}
          />
        );
      });
    }
    return undefined;
  }
  render() {
    return (
      <FormControl component="fieldset">
        <FormGroup row={this.props.row}>
          {this.renderCheckboxes(this.props.name, this.props.dataCollection)}
        </FormGroup>
      </FormControl>
    );
  }
}