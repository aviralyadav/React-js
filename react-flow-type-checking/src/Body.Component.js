import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import mockData from './filter-options.json';

class Body extends Component {
    state = {}
    render() {
        return (
            <ExpansionPanel key={i}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{item.key}</Typography>
                </ExpansionPanelSummary>
                {item.data.buckets.map((innerItem, ind) => {
                    return (
                        <ExpansionPanelDetails key={ind}>
                            <Typography>
                                {innerItem.key}
                            </Typography>
                        </ExpansionPanelDetails>
                    );
                })}
            </ExpansionPanel>
        );
    }
}

export default Body;