/**
 * Created by atide on 2016/10/28.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    BackAndroid,
    Platform
    } from 'react-native';
import StatusBarIOS from '../components/StatusBarIOS'
import {registerNavigator,getRouteMap,getNavigator} from '../Route'
import Orientation from '../utils/Orientation';
import Toast from '../utils/toast';
let lastClickTime = 0;
export default class App extends Component{
    // 构造
      constructor(props) {
        super(props);
          this.readerScene = this._readerScene.bind(this);
        // 初始状态
        this.state = {};
      }

    componentWillMount() {
        Orientation.lockToPortrait();
        if (Platform.OS === 'android') {
            Orientation.registerOnOrientationChanged();
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnMount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    configureScene=(route)=>{
        let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
        if(sceneAnimation){
            return sceneAnimation;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }
    _readerScene(route,navigator){
        this.navigator = navigator;
        registerNavigator(navigator);
        let Component = getRouteMap().get(route.name).component;
        if(!Component){
            return(
                <Text>你的组件没有注册到路由中</Text>
            )
        }
        return <Component {...route} />

    }
    render(){
        return (
            <View style={{ flex: 1 }}>
                <StatusBarIOS barStyle="default"/>

                <Navigator
                    style={styles.navigator}
                    initialRoute={{ name: 'Splash'}}
                    configureScene={this.configureScene}
                    renderScene={this.readerScene}

                    />
            </View>
        )
    }
    onBackAndroid=()=> {

        const routers = this.navigator.getCurrentRoutes();
        if (routers.length > 1) {
            this.navigator.pop();
            return true;
        }
        let now = new Date().getTime();
        if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
            return false;//控制权交给原生
        }
        lastClickTime = now;
        Toast.show('再按一次退出应用');
        return true;

    }

}

const styles = StyleSheet.create({
    navigator:{
        flex:1,
        backgroundColor:'white'
    }
});
