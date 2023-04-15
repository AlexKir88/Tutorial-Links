import { addGroup, addLink } from './linksDataFunctions';
import { addNote } from './notesDataServise';

export const saveFileCallback = (allGroups, allNotes, aRef) => {
    let allData = {};
    allData.groups = allGroups;
    allData.notes = allNotes;
    const file = new Blob([JSON.stringify(allData)], {
        type: 'json'
    });
    const currentDate =new Intl.DateTimeFormat('ru').format(new Date());
    aRef.href = URL.createObjectURL(file);
    aRef.download = `backup${currentDate}.json`;
    aRef.click();
}

export const readRecordFile = (inpRef, messageLoad) => {
    let file = inpRef.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        const allData = JSON.parse(reader.result)
        allData.groups.forEach(element => {
            addGroup(element.name, element.color);
            const content = element.content;
            content.forEach(item => {
                addLink(element.name, item)
            })
        });
        allData.notes.forEach(elem => {
            addNote(elem);
        })
        messageLoad.style.visibility = 'visible';
        setTimeout(() => messageLoad.style.visibility = 'hidden', 3000)
    };
}