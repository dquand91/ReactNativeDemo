import React, { Component } from 'react';
import { Image } from 'react-native';

export default class MyRobot extends Component {
    render() {
        const imageResource = {
            uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/320px-HONDA_ASIMO.jpg'
        }
        return (
            <Image source={imageResource}
                    style={
                        {
                            width: 200,
                            height:400
                        }
                    }
            >
            </Image>
        );
    }
}