import * as actionTypes from './constants'
import {
    getHotKeywordsRequest,
} from '@/api/request'

const changeHotKeywords = (data) => ({
    type: actionTypes.SET_HOT_KEYWOEDS,
    data
})
const searchResult = (data) => ({
    type: actionTypes.GET_SEARCHRESULT,
    data
})
export const getHotKeywords = () => {
    console.log('---')
    return (dispatch) => {
        getHotKeywordsRequest()
            .then(data => {
                let list = data.data;
                // const action = changeHotKeywords(list)
                dispatch(changeHotKeywords(list))
            })
    }
}
export const getSearchResult = (query) => {
    return (dispatch) => {
        // console.log(query,'1111')
        dispatch(searchResult(query))
    }
}

