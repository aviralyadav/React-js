// @flow
import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';
import { withStyles } from '@material-ui/core';
import { Button } from '../old-components/button/button.component';
import type { JssClasses } from '../types';
import MuiButton from '@material-ui/core/Button';
import ClearIcon from 'mdi-react/ClearIcon';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import mockData from '../mock/filter-options.json';
import  Remove from '@material-ui/icons/Remove';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { Checkbox } from '../Checkbox/checkbox.component';
// import { Checkbox } from '../old-components/checkbox/checkbox.component';
// import Check from '@material-ui/core/Check';
import FormGroup from '@material-ui/core/FormGroup';
import { FilterDrawerHeader } from './filter-drawer-header.component';
import { FilterDrawerFooter } from './filter-drawer-footer.component';
import { InputYearRange } from '../Inputs/InputYearRange/input-year-range.component';
import { TextInput } from '../old-components/text-input/text-input.component';
//import {ExpansionPanel} from '../old-components/expansion-panel/expansion-panel.component';

type ExternalProps = {
  leftIcon?: Element<MdiReactIconProps>,
  leftButton?: Element<Button>,
  rightButton?: Element<Button>,
  isOpen: boolean,
};

type InternalProps = {
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
        this.setState({show: !this.state.show, iconValue: index});
      }
  render(){
    const {
      classes,
      leftIcon = <ExpandMoreIcon />,
      leftButton,
      rightButton,
      isOpen,
    } = this.props;
    // console.log(mockData);
    let arr = [];
    for (let key in mockData.aggregations){
      arr.push({key, data:mockData.aggregations[key]});
    }
    // console.log(arr);

    let renderOtherOptions = (item,innerItem)=> {
      switch (item.key) {
        case 'STOCK#':return  <TextInput />
        default: return <Checkbox  className={classes.rootCheck} value={innerItem.key} />

      }
    }
      let renderLabel = ( item, innerItem) => {
        switch (item.key) {
          case 'YEAR': return '';
          case 'STOCK#': return '';
          default: return `${innerItem.key} (${innerItem.doc_count})`;
        }
      }
      let showExpansionIcon = (index, flag) => {
        console.log(index)
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
        <ExpansionPanel className={classes.panel} key={i}>
          <ExpansionPanelSummary 
            className={classes.panelExpansion} 
            onClick={()=>this.showIcon(i)}
            expandIcon={showExpansionIcon(i, this.state.show)}>
            <Typography className={classes.heading}>
              {item.key}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup>
            {renderInputYearRange(item, mockData)}
            {item.data.buckets.map((innerItem, index)=>{
              for(var str in innerItem) {
                innerItem.key = innerItem.key.toString();
              }
              return (
                  <FormControlLabel value={innerItem.key} key={index} count={innerItem.doc_count}
                  control={renderOptions(item, innerItem, mockData)

                     }
                    label={renderLabel(item, innerItem)} count={innerItem.doc_count}/>
              );
            })}
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
    rootCheck: {
      color: theme.palette.grey['400'],
      height: '20px',
      width: '20px',
    },
    leftIcon: {
      size: theme.spacing.iconSize,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.palette.grey['700'],

    },
    panel: {
      margin: '0',
    },
    panelExpansion: {
      margin: '0',
      minHeight: '44px'
    },
    icon: {
      color: theme.palette.grey['700'],
    },
    heading: {
      color: theme.palette.grey['700'],
    },
  };
};

export const FilterDrawerBody = withStyles(styles)(FilterDrawerBodyComponent);
