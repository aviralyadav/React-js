import React from 'react';
import PropTypes from 'prop-types';

/**
 * INTERNAL
 * For testing a controlled TextField and internal/TextInput in Storybook.
 */
export class TextValueContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    initialValue: PropTypes.string,
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      value: props.initialValue,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const child = React.Children.only(this.props.children);

    const newProps = {
      value: this.state.value,
      onChange: this.handleChange,
    };

    return React.cloneElement(child, {
      ...newProps,
      ...child.props,
    });
  }
}
