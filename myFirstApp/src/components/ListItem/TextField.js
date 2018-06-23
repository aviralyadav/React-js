import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';

const textField = props => (
    <DefaultInput 
        onChangeText={props.onChangeText} 
        value={props.placeData} placeholder="Place Name" 
        autoCorrect={false}
        autoCapitalize="none"
    />
);

export default textField;