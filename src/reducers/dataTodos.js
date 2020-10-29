import * as types from "../constants/ActionTypes";

const generateID = () => {
    return Date.now();
};
var data = JSON.parse(localStorage.getItem("data"));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DATA_TODOS:
            return state;
        case types.ADD_ITEM:
            // console.log(state)
            const newItem = {
                id: generateID(),
                name : action.addItem.name,
                status: action.addItem.status
            }
            state.push(newItem);
            localStorage.setItem("data", JSON.stringify(state));
            console.log(state);
            return [...state];
        case types.UPDATE_STATUS:
            // console.log(action)
            const stateMap = state.map((item, index) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        status: (item.status === "complete") ? "notComplete" : "complete"
                    }
                   
                }
                else {
                    return item;
                }
            })
            
            localStorage.setItem("data", JSON.stringify(stateMap));
            return stateMap;

        case types.DELETE_ITEM: 
            console.log(action)
            const stateFilter = state.filter(item => {
                return item.id !== action.id
            })
            
            // console.log(stateFilter);
            localStorage.setItem("data", JSON.stringify(stateFilter));
            return stateFilter;
            case types.UPDATE_ITEM:
                // console.log(action)
                // console.log(state)
                const stateMapUpdate = state.map(item => {
                    if (item.id === action.id) {
                       return {
                           ...item,
                           name: action.name
                       }
                    }
                    else {
                        return item
                    }
                    
                })
            //     console.log(state)
            //    console.log(stateMapUpdate)
            localStorage.setItem("data", JSON.stringify(stateMapUpdate));
            return stateMapUpdate;
        default: return state
    }
    return state;
}
export default myReducer;