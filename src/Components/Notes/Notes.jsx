import { connect } from "react-redux";
import { AiOutlineEdit } from 'react-icons/ai';
import {TbTrashX}  from 'react-icons/tb';
import styles from './Notes.module.scss';
import { defaultNotes } from "../../servise/defaultData";
import { useEffect, useState } from "react";
import { addNote, delNote, getsNotes } from "../../servise/notesDataServise";
import {TfiPlus} from  'react-icons/tfi';
import ModalNote from "./ModalNote";
import { initState } from "../../servise/storage";

const Notes = ({dispatch, currentNote }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [visibility, setVisibility] = useState();
    const [notes, setNotes] = useState([]);
    const addDefoultData = () => {
        defaultNotes.forEach((item) =>{
            addNote(item);
        })
    }
     useEffect(() => {
        addDefoultData();
        getsNotes(setNotes);
    }, [])

    const clickAdd = () => {
        setIsEdit(false);
        setVisibility('visible')
    }
    const clickEdit = (e, item) => {
        dispatch({
            type: 'NOTE',
            note: initState.currentNote
        })
        setIsEdit(true);
        setVisibility('visible');
        getsNotes(setNotes);
    }
    const clickDel = (e, item) => {
        delNote(item.name);
        getsNotes(setNotes);
        dispatch({
            type: 'NOTE',
            note: initState.currentNote
        })
        e.preventDefault();
        e.stopPropagation();
    }
    const choiseNote = (e, item) => {
        dispatch({
            type: 'NOTE',
            note: item
        })
    }
    return (
        <div className={styles.cont}>
            {notes?.map((item) => {
                return (
                    <div className={styles.note} key={item.name} onClick={(e) => choiseNote(e, item)}>
                        <div  className={styles.nameNote} >{item.name}</div>
                        <AiOutlineEdit onClick={(e) => clickEdit(e, item)} size={23} name='edit' className={styles.edit}/>
                        <TbTrashX size={23}  onClick={(e) => clickDel(e, item)} name='trash' className={styles.trash}/> 
                    </div>
                )
                
            })}
            <div className={styles.plus} onClick={clickAdd}>
                <TfiPlus size={25} />
            </div>
            <ModalNote visibility={visibility} setVisibility={setVisibility} setNotes={setNotes} isEdit={isEdit}/>
         </div>
       
    )
}
const mapStateFromProps = ({currentNote}) => {
    return {
        currentNote
    }
}
export default connect(mapStateFromProps)(Notes);