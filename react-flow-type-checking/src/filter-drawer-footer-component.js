// @flow
import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';
import { withStyles, JssClasses } from '@material-ui/core';
// import { Button } from '../old-components/button/button.component';
// import type { JssClasses } from '../types';
import MuiButton from '@material-ui/core/Button';
import style from './filter-drawer.component.scss';

type ExternalProps = {
  leftButton: Element<Button>,
  isOpen: boolean,
};

type InternalProps = {
  classes: JssClasses,
};

export type FilterDrawerFooterProps = ExternalProps & InternalProps;

// TODO when @material-ui/core implements a FilterDrawerHeader component, we should update this to wrap that component instead of building it ourselves.
const FilterDrawerFooterComponent = ({
  classes,
  leftButton,
  isOpen,
}: FilterDrawerFooterProps) => {
  return (
    <div>
      {/* {isOpen && ( */}
        <div className={classNames(classes.root)}>
          <div className={classes.buttons}>
            <MuiButton type="button" className={style.secondary}>
              + ADD FILTERS
            </MuiButton>
            {leftButton}
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

const styles = (theme: Object) => {
  return {
    root: {
      backgroundColor: theme.palette.common['white'],
      display: 'flex',
      width: '20%',
    },
    buttons: {
      marginLeft: 'auto',
      alignItems: 'center',
    },
  };
};

export const FilterDrawerFooter = withStyles(styles)(
  FilterDrawerFooterComponent
);
