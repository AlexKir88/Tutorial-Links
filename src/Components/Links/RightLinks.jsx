import { connect } from 'react-redux'
import { delLink, getGroups, editLink } from '../../servise/linksDataFunctions'
import ModalWindow from './ModalWindow'
import { useState } from 'react'
import { initState } from '../../servise/storage'
import styles from './RightLinks.module.scss'


const RightLinks = ({setGroups, currentLink, dispatch}) => {
    const [stateVisib, setStateVisib] = useState('hidden');
    const deleteLink = (e, group, nameLink) => {
        delLink(group, nameLink);
        getGroups(setGroups);
        dispatch({
            type: 'LINK',
            link: initState.currentLink
        })
    }
    const openModal = (e, group, nameLink) => {
        setStateVisib('visible')
    }
    const pushLink = (objectLink) => {
        editLink(currentLink.group, currentLink.nameLink, objectLink);
        getGroups(setGroups);
        dispatch({
            type: 'LINK',
            link: initState.currentLink
        })
    }
    return (
        <div className={styles.right}>
            <div className={styles.info}>
                <div className={styles.conteinerLink}>
                    <h4>Group: {currentLink.group}</h4>
                    <h4>Name: {currentLink.nameLink}</h4>
                    <p>url: {currentLink.url}</p>
                    <p>Comments: {currentLink.comment}</p>
                    <div className={styles.boxButton}>
                        <button className={styles.button} onClick={(e) => openModal(e, currentLink.group, currentLink.nameLink)}>Edit</button>
                        <button className={styles.button} onClick={(e) => deleteLink(e, currentLink.group, currentLink.nameLink)} >Delete</button>
                    </div>
                    
                </div>
                <div className={styles.iframe}>
                    <iframe src={currentLink.url} />
                </div>
                 <ModalWindow visibility={stateVisib} setstateVisib={setStateVisib} pushLink={pushLink} linkData={{
                    nameLink: currentLink.nameLink,
                    url: currentLink.url,
                    comment: currentLink.comment
                 }} isEdit={true}/>
            </div>
        </div>
    )
}
const mapStateFromProp = ({currentLink}) => {
    return {
        currentLink
    }
}
export default connect(mapStateFromProp)(RightLinks) ;