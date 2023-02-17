import { combineReducers } from "redux";


export const initState = {
    visibilityModalGroup: 'hidden',
    currentLink: {
        group: '',
        nameLink: '',
        url: '',
        comment: ''
    },
    currentMenu: 'Links',
    currentNote: {
        name: '',
        content: '',
    },
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

export const currentMenu = (state = 'Links', action) => {
    switch (action.type) {
        case 'MENU' : return action.menu;
    default: return state
   } 
}
export const currentNote = (state = initState.currentNote, action) => {
    switch (action.type) {
       
        case 'NOTE' : return action.note;
    default: return state
   } 
}

export const reducer = combineReducers({
    visibilityModalGroup,
    currentLink,
    currentMenu,
    currentNote,
})
