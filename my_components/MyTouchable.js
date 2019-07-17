import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback} from 'react-native'; 

export default class MyTouchable extends Component {

    // Tạo cái biến để chứa cái callback khi press
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
                }
            }>
                <TouchableHighlight
                // Màu đè lên cái View khi mình bấm vào 
                // Kiểu như hiệu ứng chuyển màu khi chạm vào 1 View trên Android
                    underlayColor='red'
                    onPress={this._bienOnPressButton}

                    // Hàm này chỉ chạy khi mình có định nghĩa cái onPress
                    // onShowUnderlay={()=>{
                    //     Alert.alert("hihi TouchableHighlight")
                    // }}
                >
                    <View style={{backgroundColor:'deepskyblue'}}>
                        <Image 
                            style={{
                                width:100,
                                height:30
                            }}
                            // đường dẫn là ../images (có 2 dấu chấm) vì mình đang ở trong thư mục "my_components"
                            // Nên phải đi ra thư mục cha, rồi mới vào được thư mục images
                            source={require('../images/bgButton1.png')}
                        >

                        </Image>
                        {/* <Text style={{padding:10, fontSize:10}}>
                            This is TouchableHighlight
                        </Text> */}
                    </View>

                </TouchableHighlight>

                <TouchableNativeFeedback
                // Chỉ tác dụng trong Androids
                // Hiệu ứng foreground khi bấm vào trên Android
                    onPress={this._bienOnPressButton}
                    useForeground={false}
                >
                    <View style={{
                        width:300,
                        height:50,
                        margin: 20,
                        backgroundColor:'lightgreen'
                        }}
                    >
                        <Text style={{padding:10, 
                                        fontSize:10, 
                                        margin:10, 
                                        fontSize:10,
                                        color:'white',
                                        textAlign:'center'}}>
                            this is TouchableNativeFeedback
                        </Text>

                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity
                // Hiệu ứng khi bấm vào sẽ bị mờ đi
                    onPress={this._bienOnPressButton}
                    activeOpacity={0.3}
                >
                    <View style={{
                        width:300,
                        height:50,
                        margin: 20,
                        backgroundColor:'darkslateblue'
                        }}
                    >
                        <Text style={{padding:10, 
                                        fontSize:10, 
                                        margin:10, 
                                        fontSize:10,
                                        color:'white',
                                        textAlign:'center'}}>
                            this is TouchableOpacity
                        </Text>

                    </View>

                </TouchableOpacity>

                <TouchableWithoutFeedback
                // Khi bấm vào sẽ không có hiệu ứng gì hết
                    onPress={this._bienOnPressButton}
                    onLongPress={()=>{
                        Alert.alert("onLongPress")
                    }}
                    onPressIn={()=>{
                        Alert.alert("onPressIn")
                    }}
                    onPressOut={()=>{
                        Alert.alert("onPressOut")
                    }}
                    activeOpacity={0.3}
                >
                    <View style={{
                        width:300,
                        height:50,
                        margin: 20,
                        backgroundColor:'darkturquoise'
                        }}
                    >
                        <Text style={{padding:10, 
                                        fontSize:10, 
                                        margin:10, 
                                        fontSize:10,
                                        color:'white',
                                        textAlign:'center'}}>
                            this is TouchableWithoutFeedback
                        </Text>

                    </View>

                </TouchableWithoutFeedback>
            </View>
        );
    }
}