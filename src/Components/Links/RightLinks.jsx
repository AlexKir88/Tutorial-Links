import { connect } from 'react-redux'
import { delLink, getGroups, editLink } from '../../servise/linksDataFunctions'
import ModalWindow from './ModalWindow'
import { useState } from 'react'
import { initState } from '../../servise/storage'
import styles from './RightLinks.module.scss'


const RightLinks = ({setGroups, currentLink, language, dispatch}) => {
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
                    <h4>{language.group}: {currentLink.group}</h4>
                    <h4>{language.name}: {currentLink.nameLink}</h4>
                    <p>{language.URL}: {currentLink.url}</p>
                    <p>{language.comments}: {currentLink.comment}</p>
                    <div className={styles.boxButton}>
                        <button className={styles.button} onClick={(e) => openModal(e, currentLink.group, currentLink.nameLink)}>{language.buttonEdit}</button>
                        <button className={styles.button} onClick={(e) => deleteLink(e, currentLink.group, currentLink.nameLink)} >{language.buttonDelete}</button>
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
const mapStateFromProp = ({currentLink, language}) => {
    return {
        currentLink,
        language
    }
}
export default connect(mapStateFromProp)(RightLinks) ;