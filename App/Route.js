/**
 * Created by atide on 2016/11/4.
 */
import {
    Navigator
    } from 'react-native';
import Splash from './components/Splash'
import TabBarView from './containers/TabBarView'
import SecondPage from './components/SecondPage'

let navigator;

const routeMap = new Map();

routeMap.set("Splash",{
    component:Splash
});
routeMap.set("Tabs",{
    component:TabBarView
});

routeMap.set("SecondPage",{
    component:SecondPage
});

export function registerNavigator(temNavigator){
    if(navigator==null){
        navigator = temNavigator;
    }
}

export function getNavigator(){
    return navigator;
}

export function getRouteMap(){
    return routeMap;
}
