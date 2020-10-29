import * as types from "../constants/ActionTypes";

export const listItem = () => {
    return {
        type: types.DATA_TODOS
    }
}
export const toggleTableAdd = () => {
    return {
        type: types.TOGGLE_TABLE_ADD
    }
}
export const closeTableAdd = () => {
    return {
        type: types.CLOSE_TABLE_ADD
    }
}
export const toggleUpdate = (id) => {
    return {
        type: types.TOGGLE_UPDATE,
        id
    }
}
export const closeUpdate = (id) => {
    return {
        type: types.CLOSE_UPDATE,
        id
    }
}
export const addItem = (addItem) => {
    return {
        type: types.ADD_ITEM,
        addItem,
    }
}
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id,
    }
}
export const deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
}
export const updateItem = (id, name ) => {
    return {
        type: types.UPDATE_ITEM,
        id,
        name    
    }
}
export const quickFilterItem = (filter ) => {
    return {
        type: types.QUICK_FILTER_ITEM,
        filter   
    }
}