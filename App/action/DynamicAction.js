/**
 * Created by atide on 2016/11/15.
 */
import * as types from './ActionType';
export let DynamicAction = ()=>{
    return dispatch=>{
        dispatch(fetchAction());
        setTimeout(()=>{
            dispatch(recevAction());
        },2000);
    }
};
let fetchAction = ()=>{
    return {
        type:types.FETCH_DYNAMIC_LIST,
        isLoading:true
    };
};

let recevAction = ()=>{
    return {
        type:types.RECEIVE_DYNAMIC_LIST,
        isLoading:false,
        hasMore:true,
        dataList:[{type:1},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2},{type:2}]
    }
};