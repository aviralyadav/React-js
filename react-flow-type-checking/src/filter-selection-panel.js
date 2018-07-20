// @flow

import FilterVariantIcon from 'mdi-react/FilterVariantIcon';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Drawer, Divider, withStyles, Button } from '@material-ui/core';
import PlusIcon from 'mdi-react/PlusIcon';
import type { JssClasses } from '@dealersocket/ds-ui-react';
import type { FilterOptionsSlice } from 'area/inventory/inventory-list/filter-options/state/filter-options.reducer';
import {
  CheckboxFilter,
  YearRangeFilter,
  MultiSelectDropDownFilter,
  ExpansionPanel,
} from '@dealersocket/ds-ui-react';
import { FilterHeader } from '../filter-header/filter-header.component';

const drawerWidth = 350;

type InternalProps = {
  classes: JssClasses,
  theme: any,
  filterOptions?: Object,
  loadFilterOptionsAction: () => void,
};
type Props = InternalProps & FilterOptionsSlice;

type State = {
  open: boolean,
  anchor: string,
  expanded: any,
};

class FilterSelectionDrawerComponent extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      open: false,
      anchor: 'left',
      expanded: '',
    };
  }

  handleDrawerOpen = () => {
    this.props.loadFilterOptionsAction();
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = (event) => {
    this.setState({
      anchor: event.target.value,
    });
  };
  renderCheckBoxFilter = (filters: any) => {
    if (filters) {
      if (filters.condition !== undefined && filters.condition !== null) {
        const { condition } = filters;
        const collapseInnerComponent = (
          <CheckboxFilter
            row={false}
            Name="CheckBoxfilter"
            filterDataCollection={condition.buckets}
            OnChangeSelection={() => {}}
          />
        );
        return this.renderMainComponent('CONDITION', collapseInnerComponent);
      }
    }
    return '';
  };
  renderYear = (filters: any) => {
    if (filters !== null) {
      if (filters.year !== undefined && filters.year !== null) {
        const { year } = filters;
        const collapseInnerComponent = (
          <YearRangeFilter
            id="Year"
            inRow
            filterDataCollection={year.buckets}
            isFilterDataAvailable
            isNative
            maximumLengthOfYear={0}
          />
        );
        return this.renderMainComponent('YEAR', collapseInnerComponent);
      }
    }
    return '';
  };
  renderMultiSelectDropdowns(name: string, filterData: any[]) {
    if (filterData !== null) {
      const collapseInnerComponent = (
        <MultiSelectDropDownFilter
          id={name}
          label={name}
          isNative
          filterDataCollection={filterData}
        />
      );
      return this.renderMainComponent(name, collapseInnerComponent);
    }
    return '';
  }

  renderMainComponent = (name: string, collapseInnerComp: any) => {
    return (
      <ExpansionPanel
        title={name}
        body={collapseInnerComp}
        disableShadow={false}
        hideIcon={false}
        disableExpansion={false}
        defaultExpanded={this.state.expanded === name}
        onChange={(filterName: string) => {
          if (this.state.expanded === '') {
            this.setState({ expanded: filterName });
          } else if (
            this.state.expanded !== filterName &&
            this.state.expanded !== ''
          ) {
            this.setState({ expanded: filterName });
          } else {
            this.setState({ expanded: '' });
          }
        }}
      />
    );
  };

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;
    const filters: any = this.props.filterOptions
      ? this.props.filterOptions.aggregations
      : {};
    const loadData = this.props.filterOptions ? (
      <div>
        {this.renderCheckBoxFilter(filters)}
        {this.renderYear(filters)}
        {this.renderMultiSelectDropdowns('MAKE', filters.make.buckets)}
        {/* {this.renderMultiSelectDropdowns('MODEL', filters.model.buckets)} */}
        {this.renderMultiSelectDropdowns('TRIM', filters.trim.buckets)}
        {this.renderMultiSelectDropdowns(
          'DRIVE TRAIN',
          filters.driveTrain.buckets
        )}
        {this.renderMultiSelectDropdowns(
          'MSRP',
          filters.price_advertised.buckets
        )}
        {this.renderMultiSelectDropdowns(
          'SALES PRICE',
          filters.price_retail.buckets
        )}
        {this.renderMultiSelectDropdowns(
          'INTERIOR COLOR',
          filters.color_interiorGeneric.buckets
        )}
        {this.renderMultiSelectDropdowns(
          'EXTERIOR COLOR',
          filters.color_exteriorGeneric.buckets
        )}
      </div>
    ) : (
      undefined
    );
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <FilterHeader
          onCloseIconClick={() => {
            this.handleDrawerClose();
          }}
          onApplyButtonClick={() => {
            action('onClick');
          }}
        />
        <Divider />
        {loadData}
        <div>
          <Button
            variant="outlined"
            href="#"
            className={classes.buttonAddFilters}
          >
            <PlusIcon />
            ADD FILTERS
          </Button>
        </div>
      </Drawer>
    );
    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          {!this.state.open ? (
            <FilterVariantIcon onClick={this.handleDrawerOpen} />
          ) : (
            ''
          )}
          {before}
          {after}
        </div>
      </div>
    );
  }
}

const styles = (theme: Object) => {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      maxWidth: 380,
    },

    appFrame: {
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
      position: 'right',
      display: 'flex',
      width: '100%',
      backgroundColor: 'transparent',
    },

    'appBarShift-left': {
      marginLeft: drawerWidth,
    },
    'appBarShift-right': {
      marginRight: drawerWidth,
    },

    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
    },

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    'content-left': {
      marginLeft: -drawerWidth,
    },
    'content-right': {
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'contentShift-left': {
      marginLeft: 0,
    },
    'contentShift-right': {
      marginRight: 0,
    },
    buttonAddFilters: {
      color: '#199AD1',
    },
  };
};

export const FilterSelectionDrawer = withStyles(styles, { withTheme: true })(
  FilterSelectionDrawerComponent
);