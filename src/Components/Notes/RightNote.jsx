import styles from './RightNote.module.scss'
import { connect } from 'react-redux';

const RightNote = ({currentNote, language}) => {
    return (
        <div className={styles.side}>
            <div className={styles.info}>
                <h4>{language.name}: {currentNote.name}</h4>
                <div><h4>{language.content}:</h4> {currentNote.content}</div>
            </div>
        </div>
    )
}
const mapStateFromProp = ({language}) => {
    return {
        language,
    }
}
export default connect(mapStateFromProp)(RightNote)