/**
 * Created by atide on 2016/10/28.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image
    } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeContainer from './HomeContainer';
import DynamicContainer from './DynamicContainer';
import CollectionContainer from './CollectionContainer';
import PersonCenterContainer from './PersonCenterContainer';
const tabItems = [
    {id:0,name:'首页',icon:require('../img/home.png'),component:HomeContainer},
    {id:1,name:'动态',icon:require('../img/home.png'),component:DynamicContainer},
    {id:2,name:'收藏',icon:require('../img/home.png'),component:CollectionContainer},
    {id:3,name:'我',icon:require('../img/home.png'),component:PersonCenterContainer}
];
/**/
export default class TabBarView extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:tabItems[0].id
        }
      }
    render(){
        return(
            <TabNavigator>
                {
                    tabItems.map((controller, i)=> {
                            let Component = controller.component;

                            return (
                                <TabNavigator.Item
                                    key={controller.id}
                                    selected={this.state.selectedTab === controller.id}
                                    title={controller.name}
                                    renderIcon={() => <Image style={{height:25,width:25}} source={controller.icon} />}
                                    renderSelectedIcon={() => <Image style={{height:25,width:25}} source={controller.icon} />}
                                    onPress={() => this.setState({ selectedTab: controller.id })}>

                                    <Component  {...this.props}/>
                                </TabNavigator.Item>
                            )
                        }
                    )
                }
            </TabNavigator>
        );
    }
}
