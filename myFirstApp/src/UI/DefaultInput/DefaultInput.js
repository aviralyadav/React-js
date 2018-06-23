import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style]}
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderColor: "#eee",
        borderWidth: 1,
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    }
});

export default defaultInput;