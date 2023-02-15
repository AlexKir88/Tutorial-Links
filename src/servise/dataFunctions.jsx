
export const addGroup = (name, color) => {

    const indDB = indexedDB.open('main', 1);
    indDB.onupgradeneeded = () => {
        const result = indDB.result;
        result.createObjectStore('groups');
    }
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groups = transaction.objectStore('groups');
        const requestAdd = groups.add({
            name,
            color,
            content: []
       }, name)
        requestAdd.onsuccess = () => {
            console.log(`create object ${name}`);
        }
        requestAdd.onerror = (err) => {
            // console.log(err)
        }
    }
}

export const delGroup = (nameGroup) => {
    let indDB = indexedDB.open('main', 1);
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
    const indDB = indexedDB.open('main', 1);
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
    const indDB = indexedDB.open('main', 1);
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
    const indDB = indexedDB.open('main', 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('groups', 'readwrite');
        const groupsStore = transaction.objectStore('groups');
        const requestGet = groupsStore.get(group);
        requestGet.onsuccess = () => {
            const newContent = requestGet.result.content.filter((item) => {
                return item.nameLink != nameLink;
            })
            groupsStore.put(Object.assign(requestGet.result, {content: newContent}), group);
        }
    }
}