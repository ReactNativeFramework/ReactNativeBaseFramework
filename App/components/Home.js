/**
 * Created by atide on 2016/10/28.
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
import Common from '../common/constants';
import HomeSwiper from '../page/HomeSwiper';
import Loading from '../common/Loading';
import {HomeAction} from '../action/HomeAction';
import BaseComponent from '../base/BaseComponent';
import {getNavigator} from '../Route';
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
    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch,HomeReducer} = this.props;
            //做点什么吧
            dispatch(HomeAction());
        })
    }
    getNavigationBarProps(){

        return{
            leftButtonImage: require('../img/search_min.png'),
            rightButtonImage: require('../img/individual_center.png'),
            title: '首页'
        }
    };


    renderBody(){
        const {HomeReducer} = this.props;
        let homeList = HomeReducer.dataList;

        return (

        <View style={styles.container}>
            {
                HomeReducer.isLoading ? <Loading /> :
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
            case 0:
                return <HomeSwiper {...this.props} />;
        }
        return <HomeSwiper {...this.props} />;
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

