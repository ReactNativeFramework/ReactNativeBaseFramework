/**
 * Created by atide on 2016/11/7.
 */
import BaseComponent from '../base/BaseComponent';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dynamic from '../components/Dynamic';
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';
class DynamicContainer extends Component{
    render(){
        return(
            <Dynamic {...this.props} />
        )
    }

}

export default connect((state)=>{
    const {DynamicReducer} = state;
    return {
        DynamicReducer
    }
})(DynamicContainer);
