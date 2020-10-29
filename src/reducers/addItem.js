import * as types from "../constants/ActionTypes";

var initialState = {
    name: "",
    status: "notComplete"
}
var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_ITEM:
            // console.log(action.addItem);
            
        default: return state;
    }
}
export default myReducer;