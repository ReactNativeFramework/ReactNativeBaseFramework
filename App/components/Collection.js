/**
 * Created by atide on 2016/11/16.
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio,
    InteractionManager
    } from 'react-native';
import Loading from '../common/Loading';
import {CollectionAction} from '../action/CollectionAction';
import BaseComponent from '../base/BaseComponent';
import {getNavigator} from '../Route';
import HomeItemPage from '../page/HomeItemPage';
export default class Home extends BaseComponent{
    // 构造
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        // 初始状态
        this.state = {
            dataSource : new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1 !== row2
            })
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch,CollectionReducer} = this.props;
            //做点什么吧
            dispatch(CollectionAction());
        })
    }
    getNavigationBarProps(){

        return{
            leftButtonImage: require('../img/search_min.png'),
            rightButtonImage: require('../img/individual_center.png'),
            title: '收藏'
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
    renderBody(){
        const {CollectionReducer} = this.props;
        let homeList = [{type:2},{type:3},{type:4}];

        return (

            <View style={styles.container}>
                {
                    CollectionReducer.isLoading ? <Loading /> :
                        <ListView
                            dataSource={this.state.dataSource.cloneWithRows(homeList.length>0 ? homeList : [])}
                            renderRow={this._renderRow}
                            enableEmptySections={true}
                            initialListSize= {10}
                            style={styles.listView}
                            removeClippedSubviews={false}
                            >

                        </ListView>
                }
            </View>
        );
    }

    _renderRow(rowData,sectionId,rowId){
        switch (rowData.type){
            case 2:
                return <HomeItemPage title='资源库'/>;
            case 3:
                return <HomeItemPage title='知识点'/>;
            case 4:
                return <HomeItemPage title='实战题'/>;
        }
        return <HomeItemPage title='资源库'/>;
    }
}
/*

 * */
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgb(240, 240, 240)',

    },
    contentContainer: {
        backgroundColor: 'rgb(240, 240, 240)'
    },


    listView: {

        backgroundColor: 'white',
    },
    cellStyle:{
        backgroundColor: 'rgb(240, 240, 240)'

    }

});