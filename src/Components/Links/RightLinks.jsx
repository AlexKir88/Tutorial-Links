import { connect } from 'react-redux'
import { delLink, getGroups, editLink, editLinkService, deleteLink } from '../../servise/linksDataFunctions'
import ModalWindow from './ModalWindow'
import { useEffect, useState } from 'react'
import { initState } from '../../servise/storage'
import styles from './RightLinks.module.scss'


const RightLinks = ({setGroups, currentLink, language, dispatch}) => {
    const [stateVisib, setStateVisib] = useState('hidden');
    const pushLink = (objectLink) =>  editLinkService(objectLink, currentLink, setGroups, dispatch, initState );
    let boxButton;
    const openModal = (e, nameLink) => {
        if(!nameLink) return;
        setStateVisib('visible')
    }

    useEffect(() => {
        if(!currentLink.nameLink) {
            boxButton.style.visibility = 'hidden';
            return;
        };
        boxButton.style.visibility = 'visible';
    }, [currentLink.nameLink])

    return (
        <div className={styles.right}>
            <div className={styles.info}>
                <div className={styles.conteinerLink}>
                    <h4>{language.group}: {currentLink.group}</h4>
                    <h4>{language.name}: {currentLink.nameLink}</h4>
                    <p>{language.URL}: {currentLink.url}</p>
                    <p>{language.comments}: {currentLink.comment}</p>
                    <div className={styles.boxButton}  ref={e => boxButton = e}>
                        <button className={styles.button} onClick={(e) => openModal(e,  currentLink.nameLink)} >{language.buttonEdit}</button>
                        <button className={styles.button} onClick={(e) => deleteLink(e, currentLink.group, currentLink.nameLink, setGroups, dispatch, initState)} >{language.buttonDelete}</button>
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