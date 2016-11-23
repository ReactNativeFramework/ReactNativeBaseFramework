/**
 * Created by atide on 2016/11/15.
 */
import * as types from '../action/ActionType';
const initState = {
    isLoading:false,
    hasMore:true,
    isRefresh:true,
    dataList:[]
};
export default DynamicReducer = (state = initState,action)=>{
    switch (action.type){
        case types.FETCH_DYNAMIC_LIST:
            return Object.assign({},state,{
                isLoading:true
            });
        case types.RECEIVE_DYNAMIC_LIST:
            return Object.assign({},state,{
                isLoading:false,
                dataList:action.dataList,
                hasMore:action.hasMore,
                isRefresh:false
            });
        default :
            return state;
    }
}
