import {getCommon } from '../../../api/request'
import * as actionTypes from './constants'

export const changeCommonList=(data)=>({
    type:actionTypes.CHANGE_COMMON,
    data
})

export const getCommonList=()=>{
    return(dispatch)=>{
        getCommon()
            .then(data=>{
                const action=changeCommonList(data.data)
                dispatch(action)
            })
    }
}

export const changeZanList=(data)=>({
    type:actionTypes.CHANGE_ZAN,
    data
})