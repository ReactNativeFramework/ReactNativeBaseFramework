/**
 * Created by atide on 2016/10/28.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    InteractionManager,
    StyleSheet
    } from 'react-native';
import {getNavigator} from '../Route'
var {width, height} = Dimensions.get('window');
export default class extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    componentDidMount() {
        let navigator = getNavigator();
        this.timer = setTimeout(()=>{
            InteractionManager.runAfterInteractions(()=>{
                navigator.resetTo({
                    name:'Tabs'
                });
            });
        },2000);

    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render(){
        getNavigator().pop();
        return (
            <View style={styles.container}>
                <Text
                    style={{color:'white',fontSize:32}}>
                    专业
                </Text>

                </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#246dd5',
        justifyContent:'center',
        alignItems:'center'
    }
});
