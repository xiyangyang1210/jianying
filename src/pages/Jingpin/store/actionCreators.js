import {getCourse} from '../../../api/request'
import * as actionTypes from './contains'

export const changeCourse=(data)=>({
    type:actionTypes.CHANGE_COURSE,
    data
})

export const getCourseList=()=>{
    return(dispatch)=>{
        getCourse().then(data=>{
            const action=changeCourse(data.data);
            dispatch(action)
        })
        
    }
}