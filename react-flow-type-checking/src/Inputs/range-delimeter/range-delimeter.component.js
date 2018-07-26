// @flow
import React from 'react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import type { JssClasses } from '../../types';

type InternalProps = {
  classes: JssClasses,
};

type Props = InternalProps;

class RangeDelimeterComponent extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;
    return <Typography className={classes.rangeDelimeter}>to</Typography>;
  }
}

const styles = () => {
  return {
    rangeDelimeter: {
      margin: '0 10px',
    },
  };
};

export const RangeDelimeter = withStyles(styles)(RangeDelimeterComponent);
