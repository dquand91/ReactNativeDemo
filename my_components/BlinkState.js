import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText123: true
        }
        const timeToBlink = 1000
    
        var taskToDo = () => (
            this.setState(myPreviousState => {
                return {
                    showText123 : !myPreviousState.showText123
                }
            })
        );
        setInterval(taskToDo,timeToBlink)
    }

    render() {
        let textToDisplay = this.state.showText123 ? this.props.myInputText : 'EMPTY123'
        return (
            <Text>{textToDisplay}</Text>
        )
    }
}

export default class TextBlink extends Component {
    render() {
        return (
            <View>
                <Blink myInputText="11111111111111111"/>
                <Blink myInputText="HELLOOOOO"/>
                <Blink myInputText="22222222222222222222222222222222"/>
            </View>
        );
    }
}

