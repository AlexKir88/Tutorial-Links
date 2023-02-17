export const addNote = (objNote) => {
    const indDB = indexedDB.open('main', 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('notes', 'readwrite');
        const notes = transaction.objectStore('notes');
        const requestAdd = notes.add(objNote, objNote.name);
        requestAdd.onsuccess = () => {
            console.log(requestAdd.result);
        }
    } 
}

export const getsNotes = (setNotes) => {
    const indDB = indexedDB.open('main', 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('notes', 'readonly');
        const notes = transaction.objectStore('notes');
        const getReq = notes.getAll();
        getReq.onsuccess = () => {
            setNotes(getReq.result)
        }
    }
} 

export const editNote = (oldName, objNote) => {
    const indDB = indexedDB.open('main', 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('notes', 'readwrite');
        const notes = transaction.objectStore('notes');
        const delreq = notes.delete(oldName);
        delreq.onsuccess = () => {
            notes.add(objNote, objNote.name)
        }
    }
}

export const  delNote = (name) => {
     const indDB = indexedDB.open('main', 1);
    indDB.onsuccess = () => {
        const transaction = indDB.result.transaction('notes', 'readwrite');
        const notes = transaction.objectStore('notes');
        const delreq = notes.delete(name);
    } 
}