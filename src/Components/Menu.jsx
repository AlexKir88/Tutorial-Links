import styles from './Menu.module.scss';
import { connect } from 'react-redux';
import { AiOutlineLink } from 'react-icons/ai';
import { TbNotes} from'react-icons/tb';
import { MdOutlineBackup} from'react-icons/md';
import { BsFillInfoSquareFill} from'react-icons/bs';
import { EN, RU } from '../servise/languages';

const Menu = ({currentMenu, language, dispatch}) => {

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
    const setLang = (e) => {
        if (e.target.name == 'RU') {
            dispatch({
                type: 'LANG',
                language: RU
            })
        }
        if (e.target.name == 'EN') {
            dispatch({
                type: 'LANG',
                language: EN
            })
        }
    }

    const currentLang = (e) => {
        if(e == null) return;
        if(e.name == language.id) {
            e.style.border = '1px solid white'
        }else {
            e.style = '';
        }
    }
    return (
    <div className={styles.menu}>
        <div className={styles.language}>
            <button className={styles.rus} name='RU' onClick={setLang} ref={currentLang} >RU</button>
            <button className={styles.eng} name='EN' onClick={setLang} ref={currentLang} >EN</button>
        </div>
        <div className={styles.header}><h2>{language.TutorialLinks}</h2></div>
        <div className={styles.boxButton}>
            <button className={styles.create} onClick={clickCreate}>{language.buttonCreateGroup}</button>
            <button className={styles.buttonMenu} name='Links' onClick={(e) => choiseMenu(e, 'Links')} ref={matchName}><AiOutlineLink /> {language.buttonLinks}</button>
            <button className={styles.buttonMenu} name='Notes' onClick={(e) => choiseMenu(e, 'Notes')} ref={matchName}><TbNotes /> {language.buttonNotes}</button>
            <button className={styles.buttonMenu} name='Backup' onClick={(e) => choiseMenu(e, 'Backup')} ref={matchName}><MdOutlineBackup /> {language.buttonBackUp}</button>
            <button className={styles.buttonMenu} name='About' onClick={(e) => choiseMenu(e, 'About')} ref={matchName}><BsFillInfoSquareFill /> {language.buttonAbout}</button>
        </div>
    </div>
   )
}

const mapStateToProps = ({currentMenu,language}) => {
    return {
        currentMenu,
        language
    }
}

export default connect(mapStateToProps)(Menu);