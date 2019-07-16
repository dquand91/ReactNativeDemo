import React, { Component } from 'react';
import { View } from 'react-native';

export default class MyFixDimension extends Component {

    render() {
        return (
            <View>
                <View style={{width: 50,height: 50, backgroundColor: 'blue'}}></View>
                <View style={{width: 100,height: 100, backgroundColor: 'red'}}></View>
            </View>
        );
    }
}