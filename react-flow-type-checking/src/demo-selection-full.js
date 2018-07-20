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
import Icon from "@material-ui/core/Icon";

class ConfirmationDialogRaw extends React.Component {
  // radioGroup = null;

  constructor(props) {
    super(props);

    this.state.value = this.props.value;
  }

  state = {};

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
      console.log(event);
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;
    const selectionItem = this.props.data.find((item, i) => item.key === this.props.key_item);
    console.log(selectionItem);
    let renderSelectionItems = null; 
    if(selectionItem) {
      console.log(selectionItem.item.buckets);
       renderSelectionItems = (
        <div>
          <DialogTitle id="confirmation-dialog-title">{selectionItem.key}</DialogTitle>
          <DialogContent>
            <FormGroup>
              
              {selectionItem.item.buckets.map((option, i) => (
                <FormControlLabel value={option.key} key={i} control={<Checkbox onChange={()=>this.handleChange(option.doc_count)} value={option.key} />} label={option.key} />
              ))}
            
            </FormGroup>
        </DialogContent>
      </div>);
      
    }
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        {renderSelectionItems}
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
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
  icon: {
    margin: theme.spacing.unit * 2
  },
});

class ConfirmationDialog extends React.Component {
  button = null;

  state = {
    open: false,
    value: '',
    key: '',
    showIcon: '',
  };

  handleClickListItem = (key, index) => {
    this.setState({ open: true, key, showIcon: index });
  };

  handleClose = value => {
      
    this.setState({ value, open: false, showIcon: false });
  };

  render() {
    const { classes } = this.props;
    let arrItem = [];
    for(let key in mockData.aggregations) {
      const showIcon = false;
      const item = mockData.aggregations[key];
      arrItem.push({key, item, showIcon});
    }
    
    console.log(arrItem);
    let renderListItems = arrItem.map((item, i)=>{
    return <div key={i}>
            <ListItem
            // index={i}
              button
              divider
              aria-haspopup="true"
              aria-controls="ringtone-menu"
              aria-label={item.key}
              onClick={() => this.handleClickListItem(item.key, i)}
              >
              <ListItemText primary={item.key} />
              {this.state.showIcon === i ? <Icon className={classes.icon}>remove</Icon> : '' }
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

export default withStyles(styles)(ConfirmationDialog);
