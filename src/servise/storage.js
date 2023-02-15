import { combineReducers } from "redux";


export const initState = {
    visibilityModalGroup: 'hidden',
    currentLink: {
        group: 'HTML & CSS',
        nameLink: 'html5css.ru',
        url: 'https://html5css.ru/',
        comment: 'all tags HTML & CSS'
    }
}
export const visibilityModalGroup = (state = 'hidden', action) => {
    switch (action.type) {
        case 'VISMODGR': return action.visibilityModalGroup;
        default: return state; 
    } 
}
export const currentLink = (state = initState.currentLink, action) => {
   switch (action.type) {
    case 'LINK' : return action.link;
    default: return state
   } 
}

export const reducer = combineReducers({
    visibilityModalGroup,
    currentLink 
})
