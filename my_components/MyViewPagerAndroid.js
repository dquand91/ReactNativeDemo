import React, { Component } from 'react';
import { AppRegistry, 
    ScrollView, 
    Image, 
    Text, Dimensions,
    TextInput,
    ViewPagerAndroid,
    StyleSheet,
    View } from 'react-native';

export default class MyViewPagerAndroid extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style={{
                    flex:1
                }}
                initialPage={0} // bắt đầu từ page đầu tiên

                // call back khi scroll
                onPageScroll={(event)=>{

                }}

                // call back khi viewPager thay đổi trạng thái
                // Có các trạng thái Idle, Dragging, Settling
                onPageScrollStateChanged={(state)=>{

                }}
                
                // sau khi scroll xong và page đang được hiển thị.
                onPageSelected={(event)=>{

                }}

            >
                <View style={{backgroundColor:'#5f9ea0',}}>
                    <Text style={myStyles.myTextStyle}>
                        Screen 1
                    </Text>
                </View>
                <View style={{backgroundColor:'palevioletred',}}>
                    <Text style={myStyles.myTextStyle}>
                        Screen 2
                    </Text>
                </View>
                <View style={{backgroundColor:'gray',}}>
                    <Text style={myStyles.myTextStyle}>
                        Screen 3
                    </Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const myStyles = StyleSheet.create({
    myTextStyle:{
        fontSize:20,
        fontWeight:'bold',
        padding: 15,
        color:'white',
        textAlign:'center'
    }
});