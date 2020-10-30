import * as types from "../constants/ActionTypes";
var initialState = {
    byID: null,
    status: false 
}


var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_UPDATE:
            // console.log(action)
            // console.log(state.displayUpdate)
            const newState = {
                ...state,
                byID: action.id,
                status: true

            }
            // console.log(state)
            // console.log(newState)
            return newState;
        case types.CLOSE_UPDATE:
            
            const newState1 = {
                ...state,
                status: false
            }
            // console.log(state)
            // console.log(newState1)
            // return state;
            return newState1;
        default: return state;
    }
}
export default myReducer;