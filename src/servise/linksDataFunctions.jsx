import { defaultGroup, defaultNotes, nameDB } from "./defaultData";
import { addNote } from "./notesDataServise";

export const addDefoultData = (setGroups) => {
    let firstTime = false;
    const indDB = indexedDB.open(nameDB, 1);
    indDB.onupgradeneeded = () => {
        const result = indDB.result;
        result.createObjectStore('groups');
        result.createObjectStore('notes');
        firstTime = true;
    }
    indDB.onsuccess = () => {
        if (firstTime) {
            setTimeout(() => {
                addGroup(defaultGroup.name, defaultGroup.color);
                defaultGroup.content.forEach( (item) => {
                    addLink(defaultGroup.name, item);
                })
                defaultNotes.forEach((item) =>{
                    addNote(item);
                })
            }, 500)
        }
        setTimeout(() => getGroups(setGroups), 1000)
    }
}


export const addGroup = (name, color) => {

    const indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groups = transaction.objectStore('groups');
        const requestAdd = groups.put({
            name,
            color,
            content: []
       }, name)
        requestAdd.onsuccess = () => {
            console.log(`create object ${name}`);
        }
    }
}

export const delGroup = (nameGroup) => {
    let indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups' , 'readwrite');
        const groups = transaction.objectStore('groups');
        const requestContent = groups.delete(nameGroup);
        requestContent.onsuccess = (e) => {
            console.log(e)
        }
    }
}

export const addLink = (nameGroup, {nameLink, url, comment} ) => {
    const indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groups = transaction.objectStore('groups');
        const requestContent = groups.get(nameGroup);
        requestContent.onsuccess = () => {
            const oldDataGroup = requestContent.result;
            let checkLink = oldDataGroup.content?.find((item) => {
                return item.nameLink === nameLink;
            })
            if (checkLink) return;
            const newLink = {
                nameLink,
                url,
                comment
            }
            const requestAddGroup =  groups.put(Object.assign({},{...oldDataGroup}, {
                content: [...oldDataGroup.content, newLink]
            }), nameGroup)
            requestAddGroup.onsuccess = () => {
                console.log('add '+ nameLink);
            }
            requestAddGroup.onerror = (err) => {
                console.log(err);
            }
        }
        requestContent.onerror = (err) => {
            console.log(err);
        }
    }
}

export const getGroups = (setGroups) => {
    const indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readonly');
        const groups = transaction.objectStore('groups');
        const requestGet = groups.getAll()
        requestGet.onsuccess = () => {
            setGroups(requestGet.result);
        }
    }
}

export const delLink = (group, nameLink) => {
    const indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groupsStore = transaction.objectStore('groups');
        const requestGet = groupsStore.get(group);
        requestGet.onsuccess = () => {
            const newContent = requestGet.result.content.filter((item) => {
                return item.nameLink !== nameLink;
            })
            groupsStore.put(Object.assign(requestGet.result, {content: newContent}), group);
        }
    }
}

export const editLink = (group, oldName,  objLink) => {
    const indDB = indexedDB.open(nameDB, 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groupsStore = transaction.objectStore('groups');
        const requestGet = groupsStore.get(group);
        requestGet.onsuccess = () => {
            const newContent =  requestGet.result.content.map((item) => {
                if (item.nameLink === oldName) {
                    return objLink;
                }
                return item;
            })
            groupsStore.put(Object.assign(requestGet.result, {content: newContent}), group)
        }
    }
}

//Action of links

export const inputLinkService = (e, setcurrentGroup, setStateVisib) => {
    const nameGroup = e.currentTarget.value;
    if(nameGroup){
        setcurrentGroup(nameGroup);
        setStateVisib('visible');
    }
}
export const pushLinkService = ( objectLink, currentGroup, setGroups) => {
    addLink(currentGroup, objectLink);
    getGroups(setGroups);
}

export const clikLink = (e, curentLink, dispatch) => {
    dispatch({
        type: 'LINK',
        link: curentLink,
    })
}
export const goToService = (e, url) => {
    if(!url) {
        alert('empty link');
        return
    };
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
}

export const editLinkService =  (objectLink, currentLink, setGroups, dispatch, initState ) => {
    editLink(currentLink.group, currentLink.nameLink, objectLink);
    getGroups(setGroups);
    dispatch({
        type: 'LINK',
        link: initState.currentLink
    })
}

export const deleteLink = (e, group, nameLink, setGroups, dispatch, initState) => {
    if(!nameLink) return;
    delLink(group, nameLink);
    getGroups(setGroups);
    dispatch({
        type: 'LINK',
        link: initState.currentLink
    })
}

//actions of groups

export const pushGroupServise = (name, color, setGroups) => {
    addGroup(name, color);
    getGroups(setGroups);
}

export  const deleteGroupSetrvise = (name, setGroups) => {
    delGroup(name);
    getGroups(setGroups);
}

