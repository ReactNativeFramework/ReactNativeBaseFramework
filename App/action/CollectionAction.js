/**
 * Created by atide on 2016/10/28.
 */
import * as types from './ActionType'
export let CollectionAction = ()=>{
    return dispatch=>{
        dispatch(fetchAction());

        setTimeout(()=>{
            dispatch(recevAction());
        },2000);
    }
};

let fetchAction = ()=>{
    return {
        type:types.FETCH_COLLECTION_LIST,
        isLoading:true
    };
};

let recevAction = ()=>{
    return {
        type:types.RECEIVE_COLLECTION_LIST,
        isLoading:false
    }
}
