/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import FirstComponent from './my_components/FirstComponent';
// import MyRobot from './my_components/MyRobot';
// import MultipleGreetings from './my_components/MultipleGreetings';
// import TextBlink from './my_components/BlinkState';
// import MyStyleSheet from './my_components/MyStyleSheet';
// import MyFixDimension from './my_components/MyFixDimension';
// import MyFlexDimension from './my_components/MyFlexDimension';
// import MyTextInput from './my_components/MyTextInput';
// import MyTouchable from './my_components/MyTouchable';
// import MyVerticalScrollView from './my_components/MyVerticalScrollView';
// import MyHorizontalScrollView from './my_components/MyHorizontalScrollView';
import MyViewPagerAndroid from './my_components/MyViewPagerAndroid';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => FirstComponent);
// AppRegistry.registerComponent(appName, () => MultipleGreetings);
// AppRegistry.registerComponent(appName, () => TextBlink);
// AppRegistry.registerComponent(appName, () => MyTouchable);
AppRegistry.registerComponent(appName, () => MyViewPagerAndroid);
