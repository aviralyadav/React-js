import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

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

  handleEntering = () => {
   // this.radioGroup.focus();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;
    console.log(this.props);
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
                <FormControlLabel value={option.key} key={i} control={<Checkbox value={option.key} />} label={option.key} />
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
});

export default withStyles(styles)(ConfirmationDialogRaw);
