import { connect } from 'react-redux';
import styles from './ModalNote.module.scss';
import { useEffect, useRef } from 'react';
import { addNote, editNote, getsNotes } from '../../servise/notesDataServise';
import { initState } from '../../servise/storage';

const ModalNote = ({ setVisibility, visibility, setNotes, isEdit, currentNote, dispatch}) => {

 const form = useRef();
    useEffect(()=> {
        if (isEdit) {
            form.current.nameNote.value = currentNote.name;
            form.current.content.value = currentNote.content;
        } else {
            form.current.nameNote.value = '';
            form.current.content.value = '';
        }
    })
    const doneEnter = (e) => {
        if (e.target.name != 'done') return;
        if (isEdit) {
            editNote(currentNote.name, {
                name: form.current.nameNote.value,
                content: form.current.content.value
            })
        } else {
            addNote({
                name: form.current.nameNote.value,
                content: form.current.content.value
            })
        }
        dispatch({
            type: 'NOTE',
            note: initState.currentNote
        })
        getsNotes(setNotes)
        
        setVisibility('hidden');
        // e.preventDefault();
        // e.stopPropagation();
    }

    const close = (e) => {
        setVisibility('hidden');
        e.preventDefault();
    }

    return(
        <form className={styles.modalWindow}  ref={form} style={{visibility}}>
            <button className={styles.close} onClick={close}>X</button>
            <h3>Input data</h3>
            <div className={styles.boxField}>
                <span>name</span> <input name='nameNote' type='text' className={styles.name} />
            </div>
            <div className={styles.boxField}>
                 <span>content</span> <textarea name='content' className={styles.content} />
            </div>
            <button type='button' name='done' onClick={doneEnter} className={styles.add}>done</button>
        </form>
    )
}

const mapStateFromProps = ({currentNote}) => {
    return {
        currentNote
    }
}
export default connect(mapStateFromProps)(ModalNote)