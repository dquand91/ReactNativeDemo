import React, { Component } from 'react';
import { Text } from 'react-native';

export default class FirstComponet extends Component{
    render(){
        let myText = `
        
        
        Hello This is FirstComponent!!!!`;
        return (
            <Text>{myText}</Text>
        );
    }
}