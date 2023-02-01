import styles from './Right.module.scss'

const Right = () => {
    return (
        <div className={styles.right}>
            <div className={styles.info}>
                <h4>Name</h4>
                <p>url</p>
                <p>There be comments</p>
            </div>
            <div className={styles.last}>
                <ul>
                    <label>last links</label>
                    <li>link1</li>
                    <li>link1</li>
                </ul>
            </div>

        </div>
    )
}

export default Right;