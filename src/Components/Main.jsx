import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className={styles.main}>
            <div>
                <ul>
                    <label>Group1</label>
                    <li>link1</li>
                    <li>link1</li>
                </ul>
            </div>
        </div>
    )
}

export default Main;