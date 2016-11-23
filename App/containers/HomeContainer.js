/**
 * Created by atide on 2016/10/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Text
    } from 'react-native';
import Home from '../components/Home';

class HomeContainer extends Component{
    render(){
        return (
            <Home {... this.props} />
        )
    }
}

export default connect((state)=> {
    const {HomeReducer} = state;
    return {
        HomeReducer
}
})(HomeContainer);
