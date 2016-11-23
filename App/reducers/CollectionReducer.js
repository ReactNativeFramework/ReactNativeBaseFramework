/**
 * Created by atide on 2016/10/28.
 */
import * as types from '../action/ActionType';
const initialState = {
    isLoading:true
};
let CollectionReducer = (state = initialState,action)=>{
    switch (action.type){
        case types.FETCH_COLLECTION_LIST:
            return Object.assign({},state,{
                isLoading:true
            });
        case types.RECEIVE_COLLECTION_LIST:
            return Object.assign({},state,{
                isLoading:false
            });
    }
    return state;
};
export default CollectionReducer;
