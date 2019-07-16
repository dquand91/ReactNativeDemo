import React, { Component } from 'react';
import { Text, View } from 'react-native';
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.mName}. Good morning.</Text>
        );
    }
}

export default class MultipleGreetings extends Component {
    render() {
        return (
            <View style = {{
                    alignItems: 'center'
                }}>
                <Greeting mName="AAAA"></Greeting>
                <Greeting mName="BBBB111111"></Greeting>
                <Greeting mName="CCCC222222222"></Greeting>
            </View>
        );
    }
}