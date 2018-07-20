// @flow
import React from 'react';

import { withStyles } from '@material-ui/core';
// eslint-disable-next-line import/no-named-default
import { default as MuiExpansionPanel } from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import type { JssClasses } from '@dealersocket/ds-ui-react';

export type ExpansionPanelProps = {
  classes: JssClasses,
  expandIcon?: any,
  title: any,
  body: any,
  disableShadow?: boolean,
  defaultExpanded?: boolean,
  hideIcon?: boolean,
  disableExpansion?: boolean,
  onChange: (title: string) => void,
};

type ExpansionPanelState = {
  expansionPanelOpen: boolean,
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export class ExpansionPanelComponent extends React.PureComponent<
  ExpansionPanelProps,
  ExpansionPanelState
> {
  static defaultProps = {
    expandIcon: <ChevronDownIcon />,
    disableShadow: false,
    defaultExpanded: false,
    hideIcon: false,
    disableExpansion: false,
  };
  constructor(props: ExpansionPanelProps) {
    super(props);
    this.state = { expansionPanelOpen: props.defaultExpanded || false };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <MuiExpansionPanel
          className={
            this.props.disableShadow ? this.props.classes.hideShadow : ''
          }
          defaultExpanded={this.props.defaultExpanded}
          onChange={() => {
            this.props.onChange(this.props.title);
          }}
          // expanded={this.state.expansionPanelOpen}
          expanded={this.props.defaultExpanded}
        >
          <ExpansionPanelSummary
            onClick={() => {
              // disable the whole panel from being clickable.
            }}
            expandIcon={
              <span
                onClick={() => {
                  if (!this.props.disableExpansion) {
                    this.setState({
                      expansionPanelOpen: !this.state.expansionPanelOpen,
                    });
                  }
                }}
              >
                {this.props.expandIcon}
              </span>
            }
            classes={{
              expandIcon: this.props.hideIcon
                ? this.props.classes.hideIcon
                : '',
            }}
          >
            {this.props.title}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{this.props.body}</ExpansionPanelDetails>
        </MuiExpansionPanel>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/click-events-have-key-events */
/* eslint-enable jsx-a11y/no-static-element-interactions */
const styles = {
  root: {
    width: '100%',
  },
  hideShadow: {
    boxShadow: 'none',
  },
  hideIcon: {
    display: 'none',
  },
};
export const ExpansionPanel = withStyles(styles)(ExpansionPanelComponent);

