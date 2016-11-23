/**
 * Created by atide on 2016/11/15.
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
import Loading from '../common/Loading';
import {DynamicAction} from '../action/DynamicAction';
import {getNavigator} from '../Route';
export default class Dynamic extends BaseComponent{

    getNavigationBarProps(){
        return{
            title:'动态',
            leftButtonImage: require('../img/search_min.png'),
            rightButtonImage: require('../img/individual_center.png')
        }
    };
    onPressLeft(){
        getNavigator().push({
            name:'SecondPage'
        });
    }
    onPressRight(){
        getNavigator().push({
            name:'SecondPage'
        });
    }
    _onPress(){
        getNavigator().push({
            name:'SecondPage'
        });
    }
    renderBody(){
       const {DynamicReducer} = this.props;
        return(
            <View
               style={{flex:1}} >
                {
                    DynamicReducer.isLoading ? <Loading /> :
                        <TouchableOpacity onPress={()=>this._onPress() }>
                   <Text>动态页布局</Text>
                   </TouchableOpacity>
                }
            </View>
        );
    }
}
const customStyles = StyleSheet.create( {
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
    row: {
        padding: 10,
        flex:1
    }
});

