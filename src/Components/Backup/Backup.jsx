import styles from './Backup.module.scss';
import { getAllData } from '../../servise/notesDataServise';
import { addGroup, addLink } from '../../servise/linksDataFunctions';
import { addNote } from '../../servise/notesDataServise';
import { connect } from 'react-redux';

const Backup = ({language}) => {
    let aRef;
    let inpRef;
    let messageLoad;
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
            messageLoad.style.visibility = 'visible';
            setTimeout(() => messageLoad.style.visibility = 'hidden', 3000)
        };
    }
    return (
        <div className={styles.container}>
            <div className={styles.backup}>
                <p>{language.textSave}</p>
                <button className={styles.buttonSend} onClick={saveFile} type="button">{language.buttonSave}</button>
                <p>{language.textDownload}</p>
                <button className={styles.buttonLoad} onClick={loadFile} type="button">{language.buttonDownload}</button>
                <div className={styles.message}  style={{visibility: 'hidden'}} ><p ref={e => messageLoad = e}>{language.messageComplete}</p></div>
                <a ref={(e) => aRef = e } style={{visibility: 'hidden'}} >link </a>
                <input ref={(e) => inpRef = e } type='file'  onChange={readFile} style={{visibility: 'hidden'}} />
            </div>
        </div>
    )
}

const mapStateFromProp = ({language}) => {
    return {
        language,
    }
}
export default connect(mapStateFromProp)(Backup);