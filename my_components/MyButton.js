import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, Alert } from 'react-native';
import Button  from 'react-native-button'; // Thư viện lấy từ js.coach

export default class MyButton extends Component {

    // Tạo cái biến để chứa cái callback khi press button
    _bienOnPressButton = () =>{
        // Show alert
        Alert.alert("Button pressed!!!!!")
    }

    render() {
        return (
            <View style={
                {
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                {/* Button này lấy từ thư viện tải từ "js.coach" 
                    Sử dụng được cả Android và IOS*/}
                <Button 
                    style={
                        {
                            fontSize: 20,
                            color: 'darkviolet',
                            backgroundColor: 'lightseagreen',
                            padding:10
                        }
                    }
                    onPress = {
                            // Khi bấm button, sẽ gọi đến cái hàm show alert
                            this._bienOnPressButton
                        }
                >
                    This is button from library!!!
                </Button>
                
                
                {/* Cách tạo button cũ, 
                các thuộc tính color thường chỉ áp dụng cho Android hoặc IOS  */}
                {/* Tạo cái View bao bên ngoài để tạo cái viền cho button
                <View style={
                    {
                        backgroundColor:'lightcoral',
                        padding:5,
                        borderRadius:15,
                        shadowRadius:20,
                        shadowOpacity:0.5
                    }
                }>
                    <Button onPress = {
                        // Khi bấm button, sẽ gọi đến cái hàm show alert
                        this._bienOnPressButton
                    }
                    title="Click me hihi." // text hiển thị trong button
                    color='lightseagreen'

                    >

                    </Button>
                </View> */}
                
            </View>
            
        );
    }
}