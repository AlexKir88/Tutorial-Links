import styles from './Backup.module.scss';
import { getAllData } from '../../servise/notesDataServise';
import { addGroup, addLink } from '../../servise/linksDataFunctions';
import { addNote } from '../../servise/notesDataServise';

const Backup = () => {
    let aRef;
    let inpRef;
    const saveFileCallback = (allGroups, allNotes, aRef) => {
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
    const saveFile = () => {
        getAllData(saveFileCallback, aRef );
    }
    const loadFile = () => {
        inpRef.click();
    }
    const readFile = () => {
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
            console.log('done');
        };
    }
    return (
        <div className={styles.container}>
            <div className={styles.backup}>
                <p>To save the data to a file, click the "Save" button</p>
                <button className={styles.buttonSend} onClick={saveFile} type="button">Save</button>
                <p>To load a previously saved file, click the "Download" button</p>
                <button className={styles.buttonLoad} onClick={loadFile} type="button">Download</button>
                <a ref={(e) => aRef = e } style={{visibility: 'hidden'}} >link </a>
                <input ref={(e) => inpRef = e } type='file'  onChange={readFile} style={{visibility: 'hidden'}} />
               
            </div>
        </div>
    )
}
export default Backup;