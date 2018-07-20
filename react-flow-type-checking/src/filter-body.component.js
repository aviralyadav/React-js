// @flow
import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';

// import { Button } from '../old-components/button/button.component';
import type { JssClasses } from '../types';
import MuiButton from '@material-ui/core/Button';
import style from './filter-drawer.component.scss';
import { InputCheckbox } from '../Inputs/InputCheckbox/input-checkbox.component';
import mockData from '../mock/filter-options.json';

type ExternalProps = {
  leftButton?: Element<Button>,
  isOpen: boolean,
};

type InternalProps = {
  classes: JssClasses,
};

export type FilterDrawerBodyProps = ExternalProps & InternalProps;

// TODO when @material-ui/core implements a FilterDrawerHeader component, we should update this to wrap that component instead of building it ourselves.
// const FilterDrawerBodyComponent = ({
//   classes,
//   leftButton,
//   isOpen,
// }: FilterDrawerBodyProps) => {
export class FilterDrawerBodyComponent extends React.Component<FilterDrawerBodyProps> {
  state = {
   bottom: false,
   key:''
 };

 toggleDrawer = (side, open, key) => () => {
   this.setState({
     [side]: open,
     key
   });

 };
  render(){
    const {classes, leftButton, isOpen} = this.props;
    let arr = [];
    for (var key in mockData.aggregations) {
      var data = mockData.aggregations[key];
      arr.push({ key, data });
    }
console.log(this.state.key);
    if(this.state.key !== ''){
      console.log(arr[this.state.key].data.buckets);
    let arrItem = arr[this.state.key];
      const fullList = (
        <div className={classes.fullList}>

          {arrItem.data.buckets.map((item, i) =>{
            return (
              // <ListItem button key={i}>
              //
              //   <ListItemText primary={item.key} />
              // </ListItem>
              <InputCheckbox
                dataCollection={item.data.buckets}
                labelText={item.key}
                row={false}
                value={item.key}
                key={index}
              />
            );
          }) }

        

        </div>
      );
    }


  const renderSelect = arr.map((item, index) => {
    return (
      <Button onClick={this.toggleDrawer('bottom', true, index)}>{item.key}</Button>
      // <InputCheckbox
      //   dataCollection={item.data.buckets}
      //   labelText={item.key}
      //   row={false}
      //   value={item.key}
      //   key={index}
      // />
    );
  });
  return (
    <React.Fragment>
      {isOpen && (
        <div className={classNames(classes.root)}>
          <div className={classes.buttons}>{renderSelect}</div>
          <SwipeableDrawer
            anchor="bottom"
            open={this.state.bottom}
            onClose={this.toggleDrawer('bottom', false)}
            onOpen={this.toggleDrawer('bottom', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('bottom', false)}
              onKeyDown={this.toggleDrawer('bottom', false)}
            >
              {this.state.key !== '' ? fullList : null}
            </div>
          </SwipeableDrawer>
        </div>

      )}
    </React.Fragment>
  );
  }
};

const styles = (theme: Object) => {
  return {
    root: {
      display: 'flex',
    },
    buttons: {
      marginLeft: 'auto',
      //alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    fullList: {
    width: 'auto',
  },
  };
};

export const FilterDrawerBody = withStyles(styles)(FilterDrawerBodyComponent);