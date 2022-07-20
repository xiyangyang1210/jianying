import * as actionTypes from './constants'

const defaultState={
    hotList: [],
    searchresult:[]
}

export default(state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SET_HOT_KEYWOEDS:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.GET_SEARCHRESULT:
            // console.log(state,action.data)
            let result = state.hotList.filter(
                todo=>todo.key.includes(action.data)
                // todo => todo.desc.includes(action.data) || todo.classify.includes(action.data)
                ) 
                // console.log(result)
            return {
                ...state,
                searchresult: result
            }
        default:
            return state;
    }
}