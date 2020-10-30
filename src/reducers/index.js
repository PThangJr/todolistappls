import { combineReducers } from "redux";
import dataTodos from "./dataTodos";
import displayTableAdd from "./displayTableAdd";
import displayUpdate from "./displayUpdate";
import addItem from "./addItem";
import quickFilterItem from "./quickFilterItem";
import search from "./search";
import sort from "./sort";
const myReducer = combineReducers({
    dataTodos,
    displayTableAdd,
    addItem,
    displayUpdate,
    quickFilterItem,
    search,
    sort
});
export default myReducer;