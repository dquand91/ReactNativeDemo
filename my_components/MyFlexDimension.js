import React, { Component } from 'react';
import { View } from 'react-native';

export default class MyFlexDimension extends Component {

    render() {
        return (
            <View style={{
                height: 500, 
                backgroundColor:'lightseagreen',
                flexDirection: 'column',
                // flexDirection: 'row',
                // justifyContent:'flex-end'    
                // justifyContent:'flex-start'    
                // justifyContent:'space-between'    
                // justifyContent:'space-around'    
                justifyContent:'center',
                alignItems:'flex-end'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'lightskyblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'lightsalmon'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'palegoldenrod'}}></View>
            </View>
        );
    }
}