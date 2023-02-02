import styles from './Menu.module.scss';
import { addGroup, addLink } from '../servise/dataFunctions';
import { defaultGroup } from '../servise/defaultData';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Menu = ({dispatch}) => {
    const clickCreate = (e) => {
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'visible'
        })
        e.preventDefault();
    }
     
    useEffect(() => {
        addGroup(defaultGroup.name, defaultGroup.color);
        defaultGroup.content.forEach( (item) => {
            addLink(defaultGroup.name, item);
        })
    }, [])
   return (
    <div className={styles.menu}>
        <div className={styles.header}><h2>//Tutorial Links</h2></div>
        <div className={styles.boxButton}>
            <button className={styles.create} onClick={clickCreate}>Create group</button>
            <button className={styles.buttonMenu}>IMG Links</button>
            <button className={styles.buttonMenu}>IMG Notes</button>
            <button className={styles.buttonMenu}>IMG Buckup</button>
        </div>
    </div>
   )
}

export default connect()(Menu);