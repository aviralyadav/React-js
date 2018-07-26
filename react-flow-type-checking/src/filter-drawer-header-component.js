// @flow
import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';
import { withStyles,JssClasses } from '@material-ui/core';
// import { Button } from '../old-components/button/button.component';
// import type { JssClasses } from '../types';
import MuiButton from '@material-ui/core/Button';
// import ClearIcon from 'mdi-react/ClearIcon';
import style from './filter-drawer.component.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type ExternalProps = {
  leftIcon?: Element<MdiReactIconProps>,
  leftButton?: Element<Button>,
  rightButton?: Element<Button>,
  isOpen: boolean,
};

type InternalProps = {
  classes: JssClasses,
};

export type FilterDrawerHeaderProps = ExternalProps & InternalProps;

// TODO when @material-ui/core implements a FilterDrawerHeader component, we should update this to wrap that component instead of building it ourselves.
const FilterDrawerHeaderComponent = ({
  classes,
  leftIcon = <ExpandMoreIcon />,//<ClearIcon />,
  leftButton,
  rightButton,
  isOpen,
}: FilterDrawerHeaderProps) => {
  const newLeftIcon = leftIcon
    ? React.cloneElement(leftIcon, { className: classes.leftIcon })
    : leftIcon;
  return (
    <div>
      {/* {isOpen && ( */}
        <div className={classNames(classes.root)}>
          <div className={classes.buttons}>
            {newLeftIcon}
            <MuiButton type="button">Filters</MuiButton>
            <MuiButton type="button" className={style.secondary}>
              CLEAR
            </MuiButton>
            <MuiButton type="button" className={style.action}>
              APPLY
            </MuiButton>
            {leftButton}
            {rightButton}
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

const styles = (theme: Object) => {
  return {
    root: {
      width: '20%',
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.common['white'],
      // borderBottom: `1px solid ${theme.colors.borderGrey}`,
    },
    leftIcon: {
      size: theme.spacing.iconSize,
      color: theme.palette.grey['700'],
    },
    buttons: {
      marginLeft: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
};

export const FilterDrawerHeader = withStyles(styles)(
  FilterDrawerHeaderComponent
);
