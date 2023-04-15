import styles from './Menu.module.scss';
import { connect } from 'react-redux';
import { AiOutlineLink } from 'react-icons/ai';
import { TbNotes} from'react-icons/tb';
import { MdOutlineBackup} from'react-icons/md';
import { BsFillInfoSquareFill} from'react-icons/bs';
import { currentLang, setLang } from '../servise/languages';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = ({ language, dispatch}) => {
    let buttonCreateRef;
    const isActiveButton = ({isActive}) => isActive? {border: '1px solid white'}:{};
    let location = useLocation();
    const clickCreate = (e) => {
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'visible'
        })
        e.preventDefault();
    };

    useEffect(() => {
        if (location.pathname === '/Tutorial-Links' || location.pathname === '/Tutorial-Links/') {
            buttonCreateRef.style.visibility = 'visible';
            return;
        } ;
        buttonCreateRef.style.visibility = 'hidden';
    }, [location.pathname]);
    
    return (
    <div className={styles.menu}>
        <div className={styles.language}>
            <button className={styles.rus} name='RU' onClick={(e) => setLang(e,dispatch )} ref={(e) => currentLang(e,language)} >RU</button>
            <button className={styles.eng} name='EN' onClick={(e) => setLang(e,dispatch )} ref={(e) => currentLang(e,language)} >EN</button>
        </div>
        <div className={styles.header}><h2>{language.TutorialLinks}</h2></div>
        <div className={styles.boxButton}>
            <button className={styles.create} ref={(e) => buttonCreateRef = e } onClick={clickCreate}>{language.buttonCreateGroup}</button>
            <NavLink className={styles.buttonMenu} name='Links' to='Tutorial-Links/' style={isActiveButton}><AiOutlineLink /> {language.buttonLinks}</NavLink>
            <NavLink className={styles.buttonMenu} name='Notes' to='Tutorial-Links/notes' style={isActiveButton}><TbNotes /> {language.buttonNotes}</NavLink>
            <NavLink className={styles.buttonMenu} name='Backup' to='Tutorial-Links/backup'style={isActiveButton}><MdOutlineBackup /> {language.buttonBackUp}</NavLink>
            <NavLink className={styles.buttonMenu} name='About' to='Tutorial-Links/about'style={isActiveButton}><BsFillInfoSquareFill /> {language.buttonAbout}</NavLink>
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