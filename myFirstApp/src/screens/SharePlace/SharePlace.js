import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import TextField from '../../components/ListItem/TextField';
import { addPlace } from '../../store/actions';
import PickLocation from '../../components/PickLocation/PickLocation';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import PickImage from '../../components/PickImage/PickImage';

class SharePlace extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onEventNavigator);
    }
    static navigatorStyle = {
        navBarButtonColor: "orange"
    }
    state = {
        controls: {
            placeName: {
                value: ''
            },
            location: {
                value: null
            }
        }

    }
    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val
                    }
                }
            }
        });
    }
    onEventNavigator = (event) => {
        //console.log(event);
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    }
    getPickedLocationHandler = (location) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location
                    }
                }
            }
        });
    }
    addPlaceNameHandler = () => {
        if (this.state.controls.placeName.value.trim() !== "") {
            this.props.onAddPlace(this.state.controls.placeName.value, this.state.controls.location.value);
            // console.log(this.state.controls.placeName.value);
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText><HeadingText>Share a Place with us!</HeadingText></MainText>
                    <PickImage />
                    <PickLocation onLocationPick={this.getPickedLocationHandler} />
                    <TextField
                        onChangeText={this.placeNameChangedHandler}
                        placeData={this.state.controls.placeName.value}
                    />
                    <View>
                        <ButtonWithBackground color="skyblue" onPress={this.addPlaceNameHandler}>Share the Place!</ButtonWithBackground>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location))
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        height: 150,
        width: "80%",
        backgroundColor: "#eee"
    },

}

export default connect(null, mapDispatchToProps)(SharePlace);