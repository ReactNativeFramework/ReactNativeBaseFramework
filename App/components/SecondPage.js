/**
 * Created by atide on 2016/11/23.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    InteractionManager,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';
import BaseComponent from '../base/BaseComponent';

export default class SecondPage extends BaseComponent{

    getNavigationBarProps(){
        return{
            title:'第二页'
        }
    };

    renderBody(){
        return(
            <View
                style={{flex:1}} >
                {
                    DynamicReducer.isLoading ? <Loading /> :
                        <TouchableOpacity  >
                            <Text>第二页布局</Text>
                        </TouchableOpacity>
                }
            </View>
        );
    }
}
