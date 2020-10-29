import status from "./status";
import sort from "./sort";
import { combineReducers } from "redux";

var myReducer = combineReducers({
    status,
    sort
})
export default myReducer;