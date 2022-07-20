import { combineReducers } from "redux";
import {reducer as courseReducer} from '../pages/Jingpin/store/index'
import {reducer as commonReducer} from '../components/Appraisals/store/index'
import {reducer as hotkeyReducer} from '../pages/Search/store/index'
// import {reducer as coursesReducer} from '../pages/Wode/store/index'

export default combineReducers(
    {   
        Jingpin:courseReducer,
        Appraisals:commonReducer,
        Search:hotkeyReducer,
    },
)