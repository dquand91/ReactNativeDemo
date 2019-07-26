import React, { Component } from 'react';
import { AppRegistry, 
    FlatList, 
    Image, 
    Text, Dimensions,
    TextInput,
    ViewPagerAndroid,
    StyleSheet,
    Alert,
    View } from 'react-native';
// Swipeout này cần phải tải bằng yarn hoặc npm
import Swipeout from 'react-native-swipeout';
import flatListData123 from '../mydata/myFlatListData';


// Đây là cái layout của từng item trong List
class MyFlatListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            stateActiveRowKey123: null
        }
    }

    render(){
        // Biến này sẽ chứa nhiều thuộc tính của component
        const mySwipeSetting = {
                // Khi mình swipe từ phải sang => nó sẽ nhảy vô onOpen.
                // Sau khi onOpen rồi, mình swipe từ trái sang hoặc khi kết thúc việc swipe => nỏ nhảy vô onClose
                onClose:(secId, rowId, direction)=>{
                    if(this.state.stateActiveRowKey123 != null){
                        this.setState({stateActiveRowKey123: null})
                    }
                },
                // Khi mở cái việc Swipe (kéo từ phải sang trái)
                onOpen:(secId, rowId, direction)=>{
                    // this.props.myFlatItem là do mình tạo ở bên dưới
                    this.setState({stateActiveRowKey123: this.props.myFlatItem.key})
                },
                // Cái nút sẽ hiển thị sau khi vuốt từ phải sang trái
                right:[
                    {
                        // Sự kiện khi bấm nút "Xoa"
                        onPress:()=>{
                            const deletingRowKey = this.state.stateActiveRowKey123
                            Alert.alert(
                                'Cảnh báo',
                                'Bạn có muốn xoá?',
                                [
                                    {text:'Khong', onPress:()=>console.log('Cancel Pressed!!!'), style:'cancel'},
                                    {text:'OK', onPress:()=>{
                                        // hàm splice dùng để xoá 1 item có index là myFlatIndex
                                        flatListData123.splice(this.props.myFlatIndex, 1)
                                        // Vì mỗi khi mình gọi cái hàm "myRefreshFlatlist" => Nó sẽ setState lại 
                                        // => Nó sẽ render lại => sẽ update lại cái list => xoá item đã chọn
                                        this.props.parentOfFlatList.myRefreshFlatlist(deletingRowKey)
                                    }},
                                ],
                                // Bấm bên ngoài alert sẽ hide alert
                                {cancelable: true} 
                            )

                        },
                        text:"Xoa", 
                        type:'delete'
                    }
                ],
                // Tự động đóng alert khi bấm ra ngoài
                autoClose: true,
                rowId: this.props.myFlatIndex,
                sectionId:1

        };
        return (
            // ...mySwipeSetting cú pháp để có thể thêm 1 biến có tên "mySwipeSetting" chứa nhiều thuộc tính cho 1 component
            <Swipeout {...mySwipeSetting}>
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

            </Swipeout>
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
    constructor(props){
        super(props)
        this.state = {
            deletedRowKey: null
        }
    }
    // Vì mỗi khi mình gọi cái hàm "myRefreshFlatlist" => Nó sẽ setState lại 
    // => Nó sẽ render lại => sẽ update lại cái list => xoá item đã chọn
    myRefreshFlatlist = (deletedKey)=>{
        this.setState((previousState) =>{
            return {
                deletedRowKey: deletedKey
            }
        })
    }
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
                                parentOfFlatList = {this} // Thuộc tính để có thể khi thực thi bên Swipeout sẽ tác động lên FlatList
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