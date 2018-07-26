import React from 'react';
import PropTypes from 'prop-types';

/**
 * INTERNAL
 * For testing a controlled NumberField and NumberInput in Storybook.
 */
export class NumberValueContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    initialValue: PropTypes.number,
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      value: props.initialValue,
    };
  }

  handleValueChange = (values) => {
    const { floatValue } = values;
    this.setState({ value: floatValue });
  };

  render() {
    const child = React.Children.only(this.props.children);

    const newProps = {
      value: this.state.value,
      onValueChange: this.handleValueChange,
    };

    return React.cloneElement(child, {
      ...child.props,
      ...newProps,
    });
  }
}
