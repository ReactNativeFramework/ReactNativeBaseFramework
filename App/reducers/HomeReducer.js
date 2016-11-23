/**
 * Created by atide on 2016/10/28.
 */
import * as types from '../action/ActionType';
const initialState = {
    isLoading:true,
    dataList:[]
};
let HomeReducer = (state = initialState,action=null)=>{
    switch (action.type){
        case types.FETCH_HOME_LIST:
            return Object.assign({},state,{
                isLoading:true
            });
        case types.RECEIVE_HOME_LIST:
            return Object.assign({},state,{
                isLoading:false,
                dataList:action.dataList
            });
    }
    return state;
};
export default HomeReducer;
