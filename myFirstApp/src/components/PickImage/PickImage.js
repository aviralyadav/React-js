import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import imagePlaceHolder from '../../assets/beautiful-place.jpg';

class PickImage extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceHolder} style={styles.image} />
                </View>
                <View>
                    <ButtonWithBackground color="skyblue">Pick Image</ButtonWithBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        height: 150,
        width: "80%",
        backgroundColor: "#eee"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default PickImage;