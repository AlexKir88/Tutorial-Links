import styles from './Menu.module.scss';
import { connect } from 'react-redux';
import { AiOutlineLink } from 'react-icons/ai';
import { TbNotes} from'react-icons/tb';
import { MdOutlineBackup} from'react-icons/md';
import { BsFillInfoSquareFill} from'react-icons/bs';
import { EN, RU } from '../servise/languages';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = ({ language, dispatch}) => {
    let buttonCreateRef;
    const isActiveButton = ({isActive}) => isActive? {border: '1px solid white'}:{};
    let location = useLocation();
    useEffect(() => {
        if (location.pathname == '/') {
            buttonCreateRef.style.visibility = 'visible';
            return;
        } buttonCreateRef.style.visibility = 'hidden';
    }, [location.pathname]);
    
    const clickCreate = (e) => {
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'visible'
        })
        e.preventDefault();
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
            <button className={styles.create} ref={(e) => buttonCreateRef = e } onClick={clickCreate}>{language.buttonCreateGroup}</button>
            <NavLink className={styles.buttonMenu} name='Links' to='/' style={isActiveButton}><AiOutlineLink /> {language.buttonLinks}</NavLink>
            <NavLink className={styles.buttonMenu} name='Notes' to='/notes' style={isActiveButton}><TbNotes /> {language.buttonNotes}</NavLink>
            <NavLink className={styles.buttonMenu} name='Backup' to='/backup'style={isActiveButton}><MdOutlineBackup /> {language.buttonBackUp}</NavLink>
            <NavLink className={styles.buttonMenu} name='About' to='/about'style={isActiveButton}><BsFillInfoSquareFill /> {language.buttonAbout}</NavLink>
        </div>
    </div>
   )
}

const mapStateToProps = ({language}) => {
    return {
        language
    }
}

export default connect(mapStateToProps)(Menu);