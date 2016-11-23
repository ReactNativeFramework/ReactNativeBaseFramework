/**
 * Created by atide on 2016/11/7.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Collection from '../components/Collection';

class CollectionContainer extends Component{
    render(){
        return (
            <Collection {... this.props} />
        )
    }
}

export default connect((state)=> {
    const {CollectionReducer} = state;
    return {
        CollectionReducer
    }
})(CollectionContainer);
