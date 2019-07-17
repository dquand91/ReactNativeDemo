import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, Keyboard } from 'react-native';

class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            mTypedText:'Please input your text.',
            mTypedPassword:'Please input your password',
            mTypedDetail:'Please input detail'
        }
        // Xử lý khi show bàn phím
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState((previousState) => {
                return {
                    mTypedText: 'Keyboard showed!!!'
                }
            })
        })

        // Xử lý khi hide bàn phím
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState((previousState)=>{
                return {
                    mTypedText:'Keyboard hide!!!!!!!!!!'
                }
            })
        })
    }

    

    componentWillUnmount(){
        this.keyboardDidHideListener.remove
        this.keyboardDidShowListener.remove
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


                <TextInput style={{
                        height: 100,
                        margin: 20,
                        padding:10,
                        borderWidth:2,
                        borderColor:'gray'
                    }}
                    multiline={true}
                    editable={true}
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(inputText)=>{
                        this.setState((previousState) => {
                            return {
                                mTypedDetail: inputText
                            }
                        })
                    }}
                />


            </View>
        );
    }
}

export default MyTextInput;