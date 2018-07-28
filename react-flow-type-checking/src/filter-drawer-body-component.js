// @flow
import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';
import { withStyles, JssClasses, Button } from '@material-ui/core';
// import { Button } from '../old-components/button/button.component';
// import type { JssClasses } from '../types';
import MuiButton from '@material-ui/core/Button';
// import ClearIcon from 'mdi-react/ClearIcon';
import style from './filter-drawer.component.scss';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Remove from '@material-ui/icons/Remove';
import Check from '@material-ui/icons/Check';
import CheckIcon from './imageedit_5_8741375036.png';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Icon from "@material-ui/core/Icon";
import {InputYearRange} from './Inputs/InputYearRange/input-year-range.component';
import {TextInput} from './text-input/text-input.component';

// import mockData from '../mock/filter-options.json';
import mockData from './filter-options.json';
import {FilterDrawerHeader} from './filter-drawer-header-component';
import {FilterDrawerFooter} from './filter-drawer-footer-component';

//import {ExpansionPanel} from '../old-components/expansion-panel/expansion-panel.component';

export type ExternalProps = {
  leftIcon?: Element<MdiReactIconProps>,
  leftButton?: Element<Button>,
  rightButton?: Element<Button>,
  isOpen: boolean,
  onClick: () => void
};

export type InternalProps = {
  classes: JssClasses,
};

export type FilterDrawerBodyProps = ExternalProps & InternalProps;

// TODO when @material-ui/core implements a FilterDrawerHeader component, we should update this to wrap that component instead of building it ourselves.

class FilterDrawerBodyComponent extends React.Component<FilterDrawerBodyProps>{
  constructor(props){
    super(props);
      this.state = {
        show: false,
        iconValue: ''
      }
  }
  
  showIcon = (index) => {
    console.log(index);
    return this.setState({show: !this.state.show, iconValue: index});
  }
  render(){
    const {classes,
    leftIcon = <ExpandMoreIcon />, ///ClearIcon
    leftButton,
    rightButton,
    isOpen} = this.props;
    // console.log(mockData.aggregations['YEAR'].buckets);
    let arr = [];
    for (let key in mockData.aggregations){
      arr.push({key, data:mockData.aggregations[key]});
    }
    // console.log(arr);

    let renderOtherOptions = (item,innerItem)=> {
      switch (item.key) {
        case 'STOCK#':return <TextInput />
        default: return <Checkbox  className={classes.rootCheck} value={innerItem.key} />

      }
    }
    let renderLabel = ( item, innerItem) => {
      switch (item.key) {
        case 'YEAR': return '';
        case 'STOCK#': return '';
        default: return innerItem.key;
      }
    }
    let showExpansionIcon = (index, flag) => {
      // console.log(index)
      if(this.state.iconValue === index) {
        return flag ? <Remove /> : ''
      }
    }
    let renderInputYearRange = (item, mockData) => {
      const yearData = mockData.aggregations['YEAR'].buckets;
      switch(item.key) {
        case 'YEAR' : 
          return <InputYearRange
                  id="Year"
                  inRow
                  dataCollection={yearData}
                  isDataAvailable
                  isNative
                  maximumLengthOfYear={3}
                  placeHolderFirst={'Start'}
                  placeHolderSecond={'End'}
                />;
        default: {
         return  item.data.buckets.map((innerItem, ind)=>{
            for(var str in innerItem) {
              innerItem.key = innerItem.key.toString();
            }
            return (
                <FormControlLabel value={innerItem.key} key={ind} 
                control={renderOtherOptions(item ,innerItem)
                
              } 
                label={renderLabel(item, innerItem)} />
            );
          })
        }
      }
    }
    let renderItems = arr.map((item, i)=>{
      return (
        <ExpansionPanel key={i}>
          <ExpansionPanelSummary 
            expandIcon={showExpansionIcon(i, this.state.show)}
            onClick={()=>this.showIcon(i)}
          >
            <Typography className={classes.heading}>
              {item.key}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FormGroup>
            {renderInputYearRange(item, mockData)}
          
          </FormGroup>
          </ExpansionPanelDetails>
          </ExpansionPanel>
      );
    });

    
  return (
    <div>
        <FilterDrawerHeader />
        <div className={classNames(classes.root)}>

        {renderItems}
        </div>
        <FilterDrawerFooter />
    </div>
  );
};
};

const styles = (theme: Object) => {
  return {
    root: {
      width: '40%' //100%
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
    summery: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    },
    icon: {
      margin: theme.spacing.unit * 2
    },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  };
};

export const FilterDrawerBody = withStyles(styles)
(
  FilterDrawerBodyComponent
);
