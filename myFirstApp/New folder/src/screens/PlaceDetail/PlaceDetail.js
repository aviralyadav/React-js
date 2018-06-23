import React, {Component} from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class placeDetail extends Component{
    deleteHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    render(){ 
        return (
            
                <View style={styles.container}>
                    <View>
                        <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                        <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                    </View>
                    <View>
                        <Button title="Delete" color="red" onPress={this.deleteHandler} />
                    </View>
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(placeDetail);