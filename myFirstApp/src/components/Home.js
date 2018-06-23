import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from './PlaceList/PlaceList';
import TextField from './ListItem/TextField';
import placeImage from '../assets/beautiful-place.jpg';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions';

class Home extends Component {
    
    placeSubmitHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    }
    onItemSelecteHandler = (key) => {
        this.props.onSelectPlace(key);
    }
    modalCloseHandler = () => {
        this.props.onDeselectPlace();
    }
    itemDeleteHandler = () => {
        this.props.onDeletePlace();
    }


    render() {
        //console.log(this.state.places);
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDelete={this.itemDeleteHandler}
                    onModalClose={this.modalCloseHandler}
                />
                <TextField
                    placeholder="Type Something here..."
                    placeSubmitHandler={this.placeSubmitHandler}
                />

                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.onItemSelecteHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);