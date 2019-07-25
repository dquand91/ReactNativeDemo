import React, { Component } from 'react';
import { AppRegistry, 
    ScrollView, 
    Image, 
    Text, Dimensions,
    TextInput,
    View } from 'react-native';


export default class MyHorizontalScrollView extends Component {

    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true}
            // Để bật tính năng scroll theo dạng page, 
            // nếu ko thì sẽ scroll kiểu bình thường
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            scrollIndicatorInsets={{
                // chỉ tác dụng cho IOS
                top:10,
                left:10,
                bottom:10,
                right:10
            }}
            // bắt sự kiện mỗi khi bắt đầu scroll
            // Vì mình đang dùng "pagingEnabled = true" =>
            // => Mỗi khi mình scroll qua page mới, nó sẽ hiển thị alert lên.
            onMomentumScrollBegin={()=>{
                // alert('Begin scroll!!!!!!')
            }}

            // bắt sự kiện mỗi khi kết thúc scroll
            // Vì mình đang dùng "pagingEnabled = true" =>
            // => Mỗi khi mình scroll qua page mới, nó sẽ hiển thị alert begin rồi sau đó là alert end
            onMomentumScrollEnd={()=>{
                // alert('End scroll......')
            }}

            onScroll={(event) => {
                let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y=${event.nativeEvent.contentOffset.y}`
                console.log(logData)
            }}
            // Sau 10mili seconds sẽ update cái scroll 1 lần
            scrollEventThrottle={10}
            >

                <View style={{
                    width: screenWidth,
                    backgroundColor:'#5f9ea0',
                    // flex 1 để hiển thị chiều cao toàn màn hình
                    flex:1, 
                    marginTop:20,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text style={{
                        textAlign:'center',
                        fontSize:20,
                        color:'white'
                    }}
                    >
                        Screen 1
                    </Text>

                </View>


                <View style={{
                    width: screenWidth,
                    backgroundColor:'tomato',
                    // flex 1 để hiển thị chiều cao toàn màn hình
                    flex:1, 
                    marginTop:20,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text style={{
                        textAlign:'center',
                        fontSize:20,
                        color:'white'
                    }}
                    >
                        Screen 2
                    </Text>

                </View>



                <View style={{
                    width: screenWidth,
                    backgroundColor:'blue',
                    // flex 1 để hiển thị chiều cao toàn màn hình
                    flex:1, 
                    marginTop:20,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text style={{
                        textAlign:'center',
                        fontSize:20,
                        color:'white'
                    }}
                    >
                        Screen 3
                    </Text>

                </View>

            </ScrollView>
        );
    }
}