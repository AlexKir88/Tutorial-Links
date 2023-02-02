import styles from './Menu.module.scss';
import { addGroup, addLink } from '../servise/dataFunctions';
import { defaultGroup } from '../servise/defaultData';
import { useEffect } from 'react';

const Menu = () => {
    useEffect(() => {
        addGroup(defaultGroup.name, defaultGroup.color);
        defaultGroup.content.forEach( (item) => {
            addLink(item, defaultGroup.name);
        })
    })
   return (
    <div className={styles.menu}>
        <div className={styles.header}><h2>//Tutorial Links</h2></div>
        <div className={styles.boxButton}>
            <button className={styles.create}>Create group</button>
            <button className={styles.buttonMenu}>IMG Links</button>
            <button className={styles.buttonMenu}>IMG Notes</button>
            <button className={styles.buttonMenu}>IMG Buckup</button>
        </div>
    </div>
   )
}

export default Menu;