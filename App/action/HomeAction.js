/**
 * Created by atide on 2016/10/28.
 */
import * as types from './ActionType'
export let HomeAction = ()=>{
    return dispatch=>{
        dispatch(fetchAction());

        setTimeout(()=>{
            dispatch(recevAction());
        },2000);
    }
};

let fetchAction = ()=>{
    return {
        type:types.FETCH_HOME_LIST,
        isLoading:true
    };
};

let recevAction = ()=>{
    return {
        type:types.RECEIVE_HOME_LIST,
        isLoading:false,
        dataList:[{type:0}]
    }
}
