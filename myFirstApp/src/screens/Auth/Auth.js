import React, { Component } from 'react';
// import firebase from 'firebase';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ImageBackground,
    Dimensions,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { onLogin } from '../../store/actions/index';
import mainTab from '../MainTabs/StartMainTabs';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import HeadingText from '../../UI/HeadingText/HeadingText';
import MainText from '../../UI/MainText/MainText';
import backgroundImage from '../../assets/images.jpg';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../utility/validation';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
        authMode: 'login',
        controls: {
            email: {
                value: '',
                valid: true,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: true,
                validationRules: {
                    minLength: 6
                }
            },
            confPassword: {
                value: '',
                valid: true,
                validationRules: {
                    equalTo: "password"
                }
            }
        }
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
                viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
            })

        });
    }
    componentWillMount () {
        // const config = {
        //     apiKey: "AIzaSyCoWeGj3eUA6udkYB-wNaoPhNOg1Nu_cms",
        //     authDomain: "awesome-places-rn-4c1f8.firebaseapp.com",
        //     databaseURL: "https://awesome-places-rn-4c1f8.firebaseio.com",
        //     projectId: "awesome-places-rn-4c1f8",
        //     storageBucket: "awesome-places-rn-4c1f8.appspot.com",
        //     messagingSenderId: "1011884717936"
        //   };
        //   firebase.initializeApp(config);
    }
    buttonHandler = () => {
        ///// handle tab scree page
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onLogin(authData);
        mainTab();
    }
    onSwitchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === 'login' ? 'signup' : 'login'
            }
        })
    }
    onChangehandler = (key, value) => {
        this.setState(prevState => {
            return {
                ...prevState.controls,
                [key]: {
                    ...prevState.controls[key],
                    value: value
                }
            }
        })
    }

    render() {
        let headingText = null;
        let confirmPass = null;
        if (this.state.viewMode === 'portrait') {
            headingText = (<HeadingText>Please {this.state.authMode === 'login' ? 'Login' : 'Sign-up'}</HeadingText>);
        }
        if (this.state.authMode === 'signup') {
            confirmPass = (<View style={
                this.state.viewMode === 'portrait' ?
                    styles.portraitpwWrapperWidth :
                    styles.landscapepwWrapperWidth
            }>
                <DefaultInput
                    placeholder="Enter Your Confirm"
                    style={styles.input}
                    onChangeText={(val) => this.onChangehandler('confPsassword', val)}
                    secureTextEntry
                />
            </View>)
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <MainText>
                        {headingText}
                    </MainText>
                    <ButtonWithBackground color="#49aaf4" onPress={this.onSwitchAuthModeHandler}>
                        Switch to {this.state.authMode === 'login' ? 'Sign-up' : 'Login'}
                    </ButtonWithBackground>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Enter Your Email"
                            style={styles.input}
                            onChangeText={(val) => this.onChangehandler('email', val)}
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <View
                            style={
                                this.state.viewMode === 'portrait' || this.state.authMode === 'login' 
                                ? styles.portraitpwContainerDirection 
                                : styles.landscapepwContainerDirection
                            }>
                            <View style={
                                this.state.viewMode === 'portrait' || this.state.authMode === 'login' ? styles.portraitpwWrapperWidth 
                                : styles.landscapepwWrapperWidth
                            }>
                                <DefaultInput
                                    placeholder="Enter Your Password"
                                    style={styles.input}
                                    onChangeText={(val) => this.onChangehandler('password', val)}
                                    secureTextEntry
                                />
                            </View>
                            {confirmPass}
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    <ButtonWithBackground color="#49aaf4" onPress={this.buttonHandler}>Submit</ButtonWithBackground>
                </KeyboardAvoidingView>
            </ImageBackground>
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
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    portraitpwContainerDirection: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    portraitpwWrapperWidth: {
        width: "100%"
    },
    landscapepwContainerDirection: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    landscapepwWrapperWidth: {
        width: "45%"
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(onLogin(authData))
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen);