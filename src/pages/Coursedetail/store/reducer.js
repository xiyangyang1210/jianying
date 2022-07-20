import * as actionTypes from './contains'

const defaultState={
    allCourses:[]
}

const reducer=(state=defaultState,action)=>{
    console.log(1111)
    switch(action.type){
        case actionTypes.CHANGE_COURSE:
            // console.log(2222)
            // console.log(action.data)
            return{
                ...state,
                allCourses:action.data
            }
          default:
            return state
    }
    // return state;
}
export default reducer;