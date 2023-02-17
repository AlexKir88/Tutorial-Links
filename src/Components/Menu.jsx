import styles from './Menu.module.scss';
import { connect } from 'react-redux';
import { AiOutlineLink } from 'react-icons/ai';
import {TbNotes} from'react-icons/tb';
import {MdOutlineBackup} from'react-icons/md';
import {BsFillInfoSquareFill} from'react-icons/bs';

const Menu = ({currentMenu, dispatch}) => {

    const matchName = (el) => {
        if (el == null) return;
        if (el.name == currentMenu) {
            el.style.border = '1px solid white';
        }else {
            el.style = '';
        }
        
    }
    const clickCreate = (e) => {
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'visible'
        })
        e.preventDefault();
    }

    const choiseMenu = (e, nameMenu) => {
        dispatch({
            type: 'MENU',
            menu: nameMenu
        })
    }
    return (
    <div className={styles.menu}>
        <div className={styles.header}><h2>Tutorial Links</h2></div>
        <div className={styles.boxButton}>
            <button className={styles.create} onClick={clickCreate}>Create group</button>
            <button className={styles.buttonMenu} name='Links' onClick={(e) => choiseMenu(e, 'Links')} ref={matchName}><AiOutlineLink /> Links</button>
            <button className={styles.buttonMenu} name='Notes' onClick={(e) => choiseMenu(e, 'Notes')} ref={matchName}><TbNotes /> Notes</button>
            <button className={styles.buttonMenu} name='Backup' onClick={(e) => choiseMenu(e, 'Backup')} ref={matchName}><MdOutlineBackup /> Back up</button>
            <button className={styles.buttonMenu} name='About' onClick={(e) => choiseMenu(e, 'About')} ref={matchName}><BsFillInfoSquareFill /> About</button>
        </div>
    </div>
   )
}

const mapStateToProps = ({currentMenu}) => {
    return {
        currentMenu
    }
}

export default connect(mapStateToProps)(Menu);