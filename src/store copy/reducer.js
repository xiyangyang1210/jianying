import { combineReducers } from "redux";
import courseReducer from './course'

export default combineReducers(
    {allCourse:courseReducer}
)