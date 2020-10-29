
var initialState = { by: "name", value: -1 }
const myReducer = (state = initialState, action) => {

    if (action.type === "SORT") {
        const { by, value } = action.sort;
        return {
            by,
            value
        }
    }
    return state;
}
export default myReducer;