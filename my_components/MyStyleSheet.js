import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class MyStyleSheet extends Component {
    render() {
        return (
            <View style = {myStyles.myHeader }>
                <Text style = {myStyles.myTextBlack}>
                    First line
                </Text>
            </View>
        );
    }
}
const myStyles = StyleSheet.create({
    myHeader:{
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463',
        borderWidth: 2,
        borderColor: '#1F618D'
    },
    myTextBlack:{
        margin: 5,
        color: "black",
        fontWeight: 'bold'
    }
})

export default MyStyleSheet;