import {getCourse} from '../api/request'
export const changeCourse=(data)=>({
    type:'CHANGE_COURSE',
    data
})

export const getCourse=()=>{
    return(dispatch)=>{
        getCourse().then(data=>{
            const action=changeCourse(data.data);
            dispatch(action)
        })
        
    }
}