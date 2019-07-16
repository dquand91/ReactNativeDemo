import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            mTypedText:'Please input your text.',
            mTypedPassword:'Please input your password'
        }
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding:10,
                    borderWidth:2,
                    borderColor:'gray'
                }}
                keyboardType='email-address'
                placeholder='Enter your email'
                placeholderTextColor="gray"
                onChangeText={(inputText)=>{
                        this.setState(
                            (previousState)=>{
                                return{
                                    mTypedText: inputText
                                }
                            }
                        )
                    }
                }
        />

            <Text>{this.state.mTypedText}</Text>

            <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding:10,
                    borderWidth:2,
                    borderColor:'gray'
                }}
                keyboardType='default'
                secureTextEntry={true}
                placeholder='Enter your password'
                placeholderTextColor="gray"
                onChangeText={(inputText)=>{
                        this.setState(
                            (previousState)=>{
                                return{
                                    mTypedPassword: inputText
                                }
                            }
                        )
                    }
                }
            />

            <Text>{this.state.mTypedPassword}</Text>


            </View>
        );
    }
}

export default MyTextInput;