import React, { Component } from 'react';
import { 
    View,Text, 
    Dimensions, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    Platform 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    
    render() {
        return (
            <View style={[styles.SideDrawer, {width: Dimensions.get('window').width*.8}]}>
                <TouchableOpacity>
                    <View style={styles.drawerContainer}>
                        <Icon color="black" size={30} name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}/>
                        <Text style={styles.drawerItem}>Sign-out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SideDrawer: {   
        paddingTop: 50,
        backgroundColor: "white",
        flex: 1
    },
    drawerContainer: {
        backgroundColor: "#eee",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 10
    },
    drawerItem: {
        padding: 15,
        color: "black",
        fontSize: 15
    }
})

export default SideDrawer;