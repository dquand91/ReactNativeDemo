import React, { Component } from 'react';
import { AppRegistry, 
    FlatList, 
    Image, 
    Text, Dimensions,
    TextInput,
    ViewPagerAndroid,
    StyleSheet,
    View } from 'react-native';
import flatListData123 from '../mydata/myFlatListData.js'
import { whileStatement } from '@babel/types';


// Đây là cái layout của từng item trong List
class MyFlatListItem extends Component {
    render(){
        return (
            <View style={{
                flex:1,
                flexDirection:'column'
            }}>
                <View 
                style={{
                    flex:1,
                    flexDirection:'row',
                    // Nếu vị trí của item trong list là chẵn thì màu gray
                    // Vị trí item là lẻ => màu green
                    // this.props.myFlatIndex này là mình sẽ truy cập vào cái thuộc tính myFlatIndex mà mình khai báo bên dưới. 
                    backgroundColor:this.props.myFlatIndex % 2 == 0 ? 'gray' : 'lightseagreen'
                }}>
                    <Image
                        source={{uri:this.props.myFlatItem.imageUrl}}
                        style={{width:100, height:100, margin:5}}
                    >

                    </Image>

                    <View style={{
                        flex:1,
                        flexDirection:'column'
                    }}>
                        <Text style={myStyles.myFlatListStyle}>
                        {/* Sẽ lấy cái "name" ra hiển thị */}
                            {this.props.myFlatItem.name}
                        </Text>
                        <Text style={myStyles.myFlatListStyle}>
                        {/* Sẽ lấy cái "jobTitle" ra hiển thị */}
                            {this.props.myFlatItem.jobTitle}
                        </Text>
                    </View>
                </View>

                {/* Cái View này là cái đường gạch ngăn cách các item */}
                <View style={{height:1,backgroundColor:'red'}}></View>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    myFlatListStyle:{
        color:'white',
        padding:16,
        fontSize:16
    }
})

export default class MyFlatlist extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop:20}}>
                <FlatList
                    data={flatListData123}
                    // 2 tham số item và index là do callback của cái renderItem mặc định trả về.
                    renderItem={({item, index})=>{
                        console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                        // return trả về 1 cái JSX layout tương ứng với từng item trong list
                        return(
                            <MyFlatListItem
                            // ở đây mình sẽ tự thêm vào 2 thuộc tính tên là myFlatItem và myFlatIndex
                            // Khi cần sử dụng thuộc tính này, thì gọi this.props.myFlatItem
                                myFlatItem = {item}
                                myFlatIndex = {index}
                            >
                            </MyFlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        );
    }
}