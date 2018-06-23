import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

class textField extends React.Component {
    state = {
        placeName:''
    }
    handleInputText = value => {
        this.setState({ placeName: value });
    }
    submitHandler = () => {
        this.props.placeSubmitHandler(this.state.placeName);
    }
    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={this.handleInputText}
                    value={this.state.placeName}
                    placeholder={this.props.placeholder}
                    style={styles.placeInput}
                />
                <Button title="Add" style={styles.placeButton} onPress={this.submitHandler} />
            </View>
        )
    }
} 
    
const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      placeInput: {
        width: "70%"
      },
      placeButton: {
        width: "30%"
      },
});

export default textField;