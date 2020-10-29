import * as types from "../constants/ActionTypes";
var initialState = false;

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_TABLE_ADD:
            return !state;
        case types.CLOSE_TABLE_ADD: 
            state = false;
            return state;
        default: return state;
    }
}
export default myReducer;