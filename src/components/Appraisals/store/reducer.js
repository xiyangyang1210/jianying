import * as actionTypes from './constants'

const defaultState={
    commonList:[]
}
const changeCart=(list,id)=>{
    // console.log(id,'1234')
    let idx=list.findIndex(data=>id==data.id);
    list[idx].state=!list[idx].state;
    return list;
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_COMMON:
            return{
                ...state,
                commonList:action.data
            }
        case actionTypes.CHANGE_ZAN:
            return{
                ...state,
                commonList:changeCart(Object.assign([],state.commonList),action.data)
                // commonList:state.commonList.map(item=>{
                //     if(!item.state){
                //         if(item.id==action.id){
                //             item.zan=item.zan+1
                //             item.state=true;
                //         }
                //     }
                //     else{
                //         if(item.id==action.id){
                //             item.zan=item
                //         }
                //     }
                // })
            }
        default:
            return state
    }
}