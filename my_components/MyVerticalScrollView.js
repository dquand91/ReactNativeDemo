import React, { Component } from 'react';
import { AppRegistry, 
    ScrollView, 
    Image, 
    Text, Dimensions,
    TextInput,
    View } from 'react-native';

export default class MyVerticalScrollView extends Component {

    render() {
        // Để lấy được kích thước chiều ngang màn hình.
        // Dùng thư viện Demensions
        // 'window' để báo hiệu lấy kich thuoc cả màn hình hiển thị.
        let screenWidth = Dimensions.get('window').width;
        return(
            // Để scrollView bên ngoài bao lấy layout của mình
            <ScrollView
            // Thuộc tính để xét điều kiện hide scrollView
                keyboardDismissMode='on-drag'
            >
                <Image
                    source={require('../images/HinhTest.jpg')}
                    // width, height cho cái Image này để đảm bảo tấm hình hiển thị fit size với màn hình
                    style={{width:screenWidth, 
                        height:screenWidth*1050/1680,
                        marginTop: 20}}    
                >
                </Image>

                <Text style={{
                    fontSize:20,
                    padding:15,
                    textAlign:'center',
                    color:'white',
                    backgroundColor:'green'
                }}>
                    This is a text
                </Text>

                <TextInput
                    style={{padding:10, margin:10, borderWidth:1}}
                    placeholder='Please enter text'>
                </TextInput>

                <View style={{backgroundColor:'#a03b51', height:50}}>
                    <Text style={{
                        fontSize:20,
                        padding:15,
                        color:'white',
                        textAlign:'center'
                        }}>
                        Text inside View
                    </Text>
                </View>

                <Image
                    source={require('../images/HinhTest.jpg')}
                    style={{width:screenWidth, 
                        height:screenWidth*1050/1680,
                        marginTop: 20}}    
                >
                </Image>

                <Image
                    source={require('../images/HinhTest.jpg')}
                    style={{width:screenWidth, 
                        height:screenWidth*1050/1680,
                        marginTop: 20}}    
                >
                </Image>

                <Image
                    source={require('../images/HinhTest.jpg')}
                    style={{width:screenWidth, 
                        height:screenWidth*1050/1680,
                        marginTop: 20}}    
                >
                </Image>

                <Image
                    source={require('../images/HinhTest.jpg')}
                    style={{width:screenWidth, 
                        height:screenWidth*1050/1680,
                        marginTop: 20}}    
                >
                </Image>
            </ScrollView>
        );
    }
}