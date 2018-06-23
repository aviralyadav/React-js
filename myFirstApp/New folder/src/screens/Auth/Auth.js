import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import mainTab from '../MainTabs/StartMainTabs';

class AuthScreen extends Component {
    buttonHandler = () =>{
        ///// handle tab scree page
        mainTab();
    }
    render () {
        return (
            <View style={styles.container}>
                <Text>Please Log in</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder ="Enter Your Email" style={styles.input} />
                    <TextInput placeholder ="Enter Your Password" style={styles.input} />
                    <TextInput placeholder ="Enter Your Confirm" style={styles.input} />
                </View>
                <Button title="Goto" onPress={this.buttonHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        width: "100%"
    }
});

export default AuthScreen;