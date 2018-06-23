import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onEventNavigator);
    }
    static navigatorStyle = {
        navBarButtonColor: "orange"
    }
    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1)
    }
    onEventNavigator = (event) => {
        console.log(event);
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    }
    itemSelectedHandler = (key) => {
        const selPlace = this.props.places.find(place =>{
            return place.key === key
        });
        this.props.navigator.push({
            screen: "awesome-ui.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    }
    buttonHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
        this.setState({
            placesLoaded: true
        });
    }
    render () {
        let content = (
            <Animated.View 
                style={{
                    opacity: this.state.removeAnim,
                    transform: [
                        {
                            scale: this.state.removeAnim.interpolate({
                                inputRange: [0,1],
                                outputRange: [12, 1]
                            })
                        }
                    ]
                }}
            >
                <TouchableOpacity onPress={this.buttonHandler}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )
        if(this.state.placesLoaded) {
            content = (<PlaceList 
                        places={this.props.places} 
                        onItemSelected={this.itemSelectedHandler}
                        //onItemDelete={this.deleteHandler}
                    />);
        }
        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return {
        places: state.places.places,
    }
}

const styles = StyleSheet.create({
    buttonContainer : {
        flex: 1,
        justifyContent : "center",
        alignItems: "center"
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 10,
        padding: 20
    },
    buttonTextStyle: {
        fontWeight: "bold",
        color: "orange",
        fontSize: 20
    }
})

export default connect(mapStateToProps)(FindPlace);