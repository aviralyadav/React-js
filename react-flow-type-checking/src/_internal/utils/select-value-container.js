import React from 'react';
import PropTypes from 'prop-types';

/*
 * INTERNAL
 * For testing a controlled DropDownMenu, SelectField and internal/SelectInput in Storybook.
 */
export class SelectValueContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    initialValue: PropTypes.any,
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      value: props.initialValue,
    };
  }

  createHandleChangePassthrough(childHandleChange) {
    return (event, value) => {
      this.setState({ value });
      if (typeof childHandleChange === 'function') {
        childHandleChange(event, value);
      }
    };
  }

  render() {
    const child = React.Children.only(this.props.children);

    const newProps = {
      value: this.state.value,
      onChange: this.createHandleChangePassthrough(child.props.onChange),
    };

    return React.cloneElement(child, {
      ...child.props,
      ...newProps,
    });
  }
}
