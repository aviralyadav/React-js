/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component<Props> {
  state = { 
        focusedLocation: {
            latitude: 12.971599,
            longitude: 77.594563,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                Dimensions.get('window').width / 
                Dimensions.get('window').height * 
                0.0122
        }
     }
  render() {
    return (
      <View style={styles.container}>
          <MapView
             initialRegion={this.state.focusedLocation}
             style={styles.map}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
        width: "100%",
        height: 250
    },
});
