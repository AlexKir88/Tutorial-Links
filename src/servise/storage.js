import { combineReducers } from "redux";
import { defoultLang } from "./languages";

export const initState = {
    visibilityModalGroup: 'hidden',
    currentLink: {
        group: '',
        nameLink: '',
        url: '',
        comment: ''
    },
    currentNote: {
        name: '',
        content: '',
    },
    language: defoultLang(),
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

export const currentNote = (state = initState.currentNote, action) => {
    switch (action.type) {
        case 'NOTE' : return action.note;
    default: return state
   } 
}
export const language = (state = defoultLang, action) => {
    switch (action.type) {
        case 'LANG' : return action.language;
    default: return state
   } 
}

export const reducer = combineReducers({
    visibilityModalGroup,
    currentLink,
    currentNote,
    language,
})
