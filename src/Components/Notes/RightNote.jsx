import styles from './RightNote.module.scss'

const RightNote = ({currentNote}) => {
    return (
        <div className={styles.side}>
            <div className={styles.info}>
                <h4>name: {currentNote.name}</h4>
                <div><h4>content:</h4> {currentNote.content}</div>
            </div>
        </div>
    )
}

export default RightNote