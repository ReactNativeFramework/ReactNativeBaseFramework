/**
 * Created by atide on 2016/10/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio
    } from 'react-native';
import Common from '../common/constants';
import Swiper from 'react-native-swiper';
const bannerItems = [
    {image:require('../img/ad1.jpg')},
    {image:require('../img/ad2.jpg')},
    {image:require('../img/ad3.jpg')}

];
export default class HomeSwiper extends Component{

      constructor(props) {
        super(props);

        this.state = {};
      }
    render(){
        const {HomeReducer} = this.props;
        return(
            <Swiper
                height={150}
                loop={true}
                autoplay={true}
                paginationStyle={{
                    bottom: 10
                }}
                >

                {bannerItems.map((banner,i) => {
                    return (
                        <TouchableOpacity  key={i} activeOpacity={1}
                                           onPress={() => { }}
                            >
                            <Image
                                style={styles.bannerImage}
                                source={banner.image}
                                />
                        </TouchableOpacity>
                    )
                }) }
            </Swiper>

        );
    }
}

const styles = StyleSheet.create({
    customDot: {
        backgroundColor: '#ccc',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: 'white',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    bannerImage: {
        height: 150,
        width: Common.window.width,
    }
});
