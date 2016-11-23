/**
 * Created by atide on 2016/11/17.
 */
import React,{Component,PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
    TouchableHighlight
    } from 'react-native';
import Constants from '../common/constants'
const itemWidth = Constants.window.width/2 - 20;
const itemHeight = itemWidth*6/9;
const itemHeightHalf = itemHeight/2;
export default class FloatImageText extends Component{
    static propTypes = {
        onPress:PropTypes.func
    };
    static defaultProps = {
        onPress:null
    };
    render(){
        return(
            <TouchableHighlight
                style={styles.row}
                onPress={this.props.onPress}
                >
                <View >
                    <Image
                        resizeMode={'contain'}
                        style={styles.row_photo}
                        source={require('../img/welcome.png')} />
                    <View style={styles.row_floatContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}

                            style={styles.row_text1}>React Native</Text>
                        <Text style={styles.row_text2}>33209人学习</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    row:{
        width:itemWidth,
        height:itemHeight,
        margin:10,
        backgroundColor:'white'
    },
    row_photo:{
        width:itemWidth,
        height:itemHeight,
        borderWidth:1,
        borderColor:'gray',
    },
    row_floatContainer:{
        opacity:0.5,
        backgroundColor:'white',
        height:itemHeightHalf,
        marginTop:-itemHeightHalf,
        justifyContent:'center'
    },
    row_text1:{
        color:'black',
        fontSize:14,
        marginLeft:10
    },
    row_text2:{
        marginTop:5,
        color:'gray',
        fontSize:12,
        marginLeft:10
    }
});
