/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import mockData from './filter-options.json';
import ConfirmationDialogRaw from './ConfirmationDialogRaw';

class ConfirmationDialog extends React.Component {
  button = null;

  state = {
    open: false,
    value: '',
    key: ''
  };

  handleClickListItem = (key) => {
    this.setState({ open: true, key });
  };

  handleClose = value => {
    this.setState({ value, open: false });
  };

  render() {
    const { classes } = this.props;
    let arrItem = [];
    for(let key in mockData.aggregations) {
      const item = mockData.aggregations[key];
      arrItem.push({key, item});
    }
    
    console.log(arrItem);
    let renderListItems = arrItem.map((item, i)=>{
    return <div key={i}>
            <ListItem
              button
              divider
              aria-haspopup="true"
              aria-controls="ringtone-menu"
              aria-label={item.key}
              onClick={() => this.handleClickListItem(item.key)}
              >
              <ListItemText primary={item.key}  />
            </ListItem>
          </div>
    });

    return (
      <div className={classes.root}>
        <List>
          
          {renderListItems}
          
          <ConfirmationDialogRaw
            classes={{
              paper: classes.paper,
            }}
            open={this.state.open}
            onClose={this.handleClose}
            value={this.state.value}
            data={arrItem}
            key_item={this.state.key}
          />
        </List>
      </div>
    );
  }
}

ConfirmationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
});

export default withStyles(styles)(ConfirmationDialog);
