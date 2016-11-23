/**
 * Created by atide on 2016/10/28.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    } from 'react-native';

export default class StatusBarIOS extends React.Component {
    render() {
        return (
            <View >
                <StatusBar {...this.props}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 1,
        height: 20,

    }
});

