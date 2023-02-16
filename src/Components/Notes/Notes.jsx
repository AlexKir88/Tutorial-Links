import { connect } from "react-redux";
import { AiOutlineEdit } from 'react-icons/ai';
import {TbTrashX}  from 'react-icons/tb';
import styles from './Note.module.scss';

const Notes = ({dispatch}) => {
    return (
        <div className={styles.note}>
            <span  className={styles.nameNote}>Name</span>
            <AiOutlineEdit size={23} className={styles.edit}/>
            <TbTrashX size={23}  className={styles.trash}/> 
        </div>
    )
}
export default connect()(Notes);