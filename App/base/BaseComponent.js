/**
 * Created by atide on 2016/11/4.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';
import {getNavigator} from '../Route';
import NavigatorBar from '../components/NavigationBar'

export default class BaseComponent extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    getNavigationBarProps(){

        return( {

        });
    }
    readerNavigationBar(){
        let navigationBarProps = this.getNavigationBarProps();
        Object.assign(navigationBarProps,this.props);

        return(
            <NavigatorBar
                navigationBarProps={navigationBarProps}
                onLeftPressed={this.onPressLeft}
                onRightPressed={this.onPressRight}
                />

        )
    }
    renderBody(){

    }
    onPressLeft(){
        getNavigator().pop();
    }
    onPressRight(){

    }

    render(){
        return(
            <View style={[styles.container,this.props.style]}>
                {this.readerNavigationBar()}
                {this.renderBody()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
});
