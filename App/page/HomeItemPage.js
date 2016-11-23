/**
 * Created by atide on 2016/11/16.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
    TouchableHighlight
    } from 'react-native';
import FloatImageText from '../widget/FloatImageText';
import {getNavigator} from '../Route';
export default class HomeItemPage extends Component{
    // 构造
      constructor(props) {
        super(props);
          this._renderRow = this._renderRow.bind(this);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1 !== r2
            })
        };
      }
    _renderRow(rowData,sectionId:number,rowId:number){
        return(
           <FloatImageText
               onPress={this._onPress}/>

        );
    }
    _onPress(){
        getNavigator().push({
            name:'SecondPage'
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPress}>
               <View style={styles.header}
                   >
                   <Text style={{flex:1}}>{this.props.title}</Text>
                   <Text>更多</Text>

                   <Image style={{marginLeft:10}} source={require('../img/next-icon.png')} />

               </View>
                </TouchableHighlight>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows([{type:1},{type:2},{type:3}])}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                    initialListSize= {4}
                    contentContainerStyle={{justifyContent:'space-between', flexDirection:'row',flexWrap:'wrap'}}
                    />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',

    },
    header:{
        height:40,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        padding:10
    }

});
