import styles from './Backup.module.scss';
import { getAllData } from '../../servise/notesDataServise';
import { addGroup, addLink } from '../../servise/linksDataFunctions';
import { addNote } from '../../servise/notesDataServise';
import { connect } from 'react-redux';
import { saveFileCallback, readRecordFile } from '../../servise/backupServise';

const Backup = ({language}) => {
    let aRef;
    let inpRef;
    let messageLoad;
    const saveFile = () => {
        getAllData(saveFileCallback, aRef );
    }
    const loadFile = () => {
        inpRef.click();
    }
    const readFile = () => readRecordFile(inpRef, messageLoad )
    
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