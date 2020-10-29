import { combineReducers } from "redux";
import dataTodos from "./dataTodos";
import displayTableAdd from "./displayTableAdd";
import displayUpdate from "./displayUpdate";
import addItem from "./addItem";
import quickFilterItem from "./quickFilterItem";
const myReducer = combineReducers({
    dataTodos,
    displayTableAdd,
    addItem,
    displayUpdate,
    quickFilterItem
});
export default myReducer;