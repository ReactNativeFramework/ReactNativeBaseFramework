/**
 * Created by jason on 16/7/14.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import Common from '../common/constants';
import ImageButton from '../widget/ImageButton';
import TextButton from '../widget/TextButton';
import BaseComponent from '../base/BaseComponent';

export default class PersonCenterContainer extends BaseComponent {
  getNavigationBarProps(){
    return{
      title:'个人中心',
      hideLeftButton:true
    }
  };
  renderBody() {
    return (
        <ScrollView style={{ backgroundColor: 'rgba(240,240,240,0.9)' }}>
            <View style={styles.row_infoContainer}  >
                <Image style={styles.row_photo} source={require('../img/default_useravatar.png')}></Image>
                <View style={styles.row_userInfo}>
                    <Text style={styles.row_userName}>glustful</Text>
                    <Text style={styles.row_userTime}>学习时长  24小时</Text>
                </View>
            </View>
            <View style={{ padding: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white' }}>
                <TextButton

                    onPress={() => { } }
                    text={'关注'}
                    upText={'1'}
                    />
                <TextButton

                    onPress={() => { } }
                    text={'收藏'}
                    upText={'20'}
                    />
                <TextButton

                    onPress={() => { } }
                    text={'记录'}
                    upText={'10'}
                    />

            </View>
            <View style={{ padding: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'gray' }}>
                <ImageButton
                    imageStyle={{
              width: 30,
              height: 30,
            }}
                    style={{color:'white'}}
                    onPress={() => { } }
                    imageUrl = {require('../img/moneys.png') }
                    text={'我的课程'}
                    />
                <ImageButton
                    imageStyle={{
              width: 30,
              height: 30,
            }}
                    style={{color:'white'}}
                    onPress={() => { } }
                    imageUrl = {require('../img/bus.png') }
                    text={'我的问题'}
                    />
                <ImageButton
                    imageStyle={{
              width: 30,
              height: 30,
            }}
                    style={{color:'white'}}
                    onPress={() => { } }
                    imageUrl = {require('../img/tosts.png') }
                    text={'我的回答'}
                    />

            </View>
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', height: 50,  backgroundColor: 'white' }}activeOpacity={0.75}>
                <Image
                    source={require('../img/sc.png') }
                    style={{ width: 30, height: 30, marginLeft: 20 }}
                    />
                <Text style={{ marginLeft: 10 ,flex:1}}>
                    我的收藏
                </Text>
                <Text style={{  padding: 12, fontSize: 18,marginRight:10 }}>
                    >
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', height: 50,  backgroundColor: 'white' }}activeOpacity={0.75}>
                <Image
                    source={require('../img/yj.png') }
                    style={{ width: 30, height: 30, marginLeft: 20 }}
                    />
                <Text style={{ marginLeft: 10,flex:1 }}>
                    我的动态
                </Text>
                <Text style={{  padding: 12, fontSize: 18,marginRight:10  }}>
                    >
                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', height: 50,  backgroundColor: 'white' }}activeOpacity={0.75}>
                <Image
                    source={require('../img/wh.png') }
                    style={{ width: 30, height: 30, marginLeft: 20 }}
                    />
                <Text style={{ marginLeft: 10,flex:1 }}>
                    设置
                </Text>
                <Text style={{  padding: 12, fontSize: 18,marginRight:10 }}>
                    >
                </Text>

            </TouchableOpacity>

        </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
    row_infoContainer:{
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        height:80,
        backgroundColor:'white'
    },
    row_userInfo:{
        marginLeft:10
    },
    row_userName:{
        color:'gray',
        fontSize:15
    },
    row_userTime:{
        color:'gray',
        fontSize:13,
        marginTop:5
    },
    row_photo:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'white'
    },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    marginTop: 40,
    marginLeft: 30,
    color: 'white',
    position: 'absolute'
    // position: 'relative',

  }
});
