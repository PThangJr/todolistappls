import {createStore} from "redux";
import {toggleStatus, sort} from "./actions/index";
import myReducer from "./reducers/index";


const store = createStore(myReducer);
console.log("Default: ", store.getState());

store.dispatch(toggleStatus());
console.log("Toggle status: ", store.getState());

store.dispatch(sort({
    by: "name",
    value: 0
}));
console.log("Sort : ", store.getState());


