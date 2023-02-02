import { combineReducers } from "redux";


export const initState = {
    visibilityModalGroup: 'hidden',
}
export const visibilityModalGroup = (state = 'hidden', action) => {
    switch (action.type) {
        case 'VISMODGR': return action.visibilityModalGroup;
        default: return state; 
    } 
}

export const reducer = combineReducers({
    visibilityModalGroup 
})
