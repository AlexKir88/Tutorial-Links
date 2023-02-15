import { connect } from 'react-redux'
import { delLink } from '../servise/dataFunctions'
import styles from './Right.module.scss'

const Right = ({currentLink}) => {
    const deleteLink = (e, group, nameLink) => {
        delLink(group, nameLink);
    }
    return (
        <div className={styles.right}>
            <div className={styles.info}>
                <h4>Group: {currentLink.group}</h4>
                <h4>Name: {currentLink.nameLink}</h4>
                <p>url: {currentLink.url}</p>
                <p>Comments: {currentLink.comment}</p>
                <div className={styles.boxButton}>
                    <button className={styles.button}>Edit</button>
                    <button className={styles.button} onClick={(e) => deleteLink(e, currentLink.group, currentLink.nameLink)} >Delete</button>
                </div>
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
const mapStateFromProp = ({currentLink}) => {
    return {
        currentLink
    }
}

export default connect(mapStateFromProp)(Right) ;