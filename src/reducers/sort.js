import { bindActionCreators } from "redux";
import * as types from "../constants/ActionTypes";
var initialState = {
    by: "",
    sortName: -1,
    sortStatus: -1,
};


var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            // console.log(action)
            if (action.sort.by === "name") {
                return {
                    ...state,
                    by: action.sort.by,
                    sortName: state.sortName < 1 ? state.sortName + 1 : -1,
                    sortStatus: -1
                }
            }
            else if (action.sort.by === "status") {
                return {
                    ...state,
                    by: action.sort.by,
                    sortName: -1,
                    sortStatus: state.sortStatus < 1 ? state.sortStatus + 1 : -1
                }
            }
            console.log(state);
        // return state;



        default: return state;
    }
}
export default myReducer;