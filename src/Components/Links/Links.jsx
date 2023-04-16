import { useEffect, useState } from 'react';
import styles from './Links.module.scss';
import { FiPlus } from 'react-icons/fi';
import {TbTrashX}  from 'react-icons/tb';
import ModalWindow from './ModalWindow';
import ModalGroup from './ModalGroup';
import {addDefoultData, inputLinkService, pushLinkService, pushGroupServise, deleteGroup, clikLink, goTo} from '../../servise/linksDataFunctions';
import { connect } from 'react-redux';

const Links = ({groups, setGroups, language, dispatch}) => {
    const [stateVisib, setStateVisib] = useState('hidden');
    const [currentGroup, setcurrentGroup] = useState();
    const inpLink = (e) => inputLinkService(e, setcurrentGroup, setStateVisib );
    const pushLink = ( objectLink) => pushLinkService(objectLink, currentGroup, setGroups );
    const pushGroup = (name, color) => pushGroupServise(name, color, setGroups)

    useEffect(() => {
        addDefoultData(setGroups);
    }, [])

    return (
        <div className={styles.main}>
            {groups?.map((item) => {
                return(
                    <div key={item.name} className={styles.group} style={{backgroundColor: item.color}}>
                        <ul type='none' className='ulGroup'>
                            <TbTrashX size={23} className={styles.delGroup} onClick={() => deleteGroup(item.name, setGroups)}  title={language.promtDeldGroup}/>
                            <button onClick={inpLink} value={item.name} className={styles.addLink} title={language.promtAddLink}><FiPlus size={23} /></button>
                            <h4 className={styles.headerGroup}>{item.name}</h4>
                            {item.content.map((elem) => {
                                let currentLinkObj = {
                                    group: item.name,
                                    nameLink: elem.nameLink,
                                    url: elem.url,
                                    comment: elem.comment,
                                }
                                return(
                                    <li key={elem.nameLink} className={styles.link}  onClick={(e) => clikLink(e, currentLinkObj, dispatch)} onDoubleClick={(e) => goTo(e,elem.url)}>
                                        <b>{elem.nameLink}</b> : {elem.url}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            <ModalWindow visibility={stateVisib} setstateVisib={setStateVisib} pushLink={pushLink} />
            <ModalGroup  pushGroup={pushGroup} />
        </div>
    )
}

const mapStateFromProp = ({language}) => {
    return {
        language,
    }
}
export default connect(mapStateFromProp)(Links);