import styles from './Menu.module.scss'

const Menu = () => {
   return (
    <div className={styles.menu}>
        <div className={styles.header}><h1>Tutorial Links</h1></div>
        <div className={styles.boxButton}>
            <button className={styles.create}>Create folder</button>
            <button className={styles.buttonMenu}>IMG Main</button>
            <button className={styles.buttonMenu}>IMG Buckup</button>
        </div>
    </div>
   )
}

export default Menu;