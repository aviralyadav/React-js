import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TextField from '../../components/ListItem/TextField'; 
import { addPlace } from '../../store/actions';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlace extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onEventNavigator);
    }
    onEventNavigator = (event) => {
        //console.log(event);
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    }
    addHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    }
    render () {
        return (
            <View style={styles.container}>
                <TextField placeholder="Type something to add" placeSubmitHandler={this.addHandler} />
                <PickLocation />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
}

export default connect(null, mapDispatchToProps)(SharePlace);