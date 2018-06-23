import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {
    constructor (props) {
        super (props);
    }
    state = { 
        focusedLocation: {
            latitude: 12.971599,
            longitude: 77.594563,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                Dimensions.get('window').width / 
                Dimensions.get('window').height * 
                0.0122
        },
        locationChosen: false
     }
    setCenterLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        });
    }
    locateMeHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            }
            this.setCenterLocationHandler(coordsEvent);
        }, err => { 
            console.log(err); 
            alert('Error to get location, please do manually.');
        });
    }
    render() {
        let marker = null;
        if(this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }
        console.log('map');
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    //region={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.setCenterLocationHandler}
                    ref={ref => this.map = ref}
                >
                 {marker}
                </MapView>
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={this.locateMeHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    map: {
        // borderWidth: 1,
        // borderColor: "black",
        // backgroundColor: "#eee",
        //flex: 1,
        width: "100%",
        height: 250
    },
    
    button: {
        margin: 8
    }
});

export default PickLocation;