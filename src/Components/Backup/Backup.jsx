import { useState } from 'react';
import styles from './Backup.module.scss';
import { getAllData } from '../../servise/notesDataServise';

const Backup = () => {
    let aRef;
    let inpRef;
    const saveFileCallback = (allGroups, allNotes, aRef) => {
        let allData = {};
        allData.groups = allGroups;
        allData.notes = allNotes;
        const file = new Blob([JSON.stringify(allData)], {
            type: 'txt'
        });
        aRef.href = URL.createObjectURL(file);
        aRef.download = 'backup.txt';
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
            console.log(allData);
        };
    }
    return (
        <div className={styles.container}>
            <div className={styles.backup}>
                <p>To save the data to a file, click the "Save" button</p>
                <button className={styles.buttonSend} onClick={saveFile} type="button">Save</button>
                <p></p>
                <button className={styles.buttonLoad} onClick={loadFile} type="button">Load</button>
                <a ref={(e) => aRef = e } style={{visibility: 'hidden'}} >link </a>
                <input ref={(e) => inpRef = e } type='file'  onChange={readFile} style={{visibility: 'hidden'}} />
            </div>
        </div>
    )
}
export default Backup;