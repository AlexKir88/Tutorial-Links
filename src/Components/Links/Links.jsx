import { useEffect, useRef, useState } from 'react';
import styles from './Links.module.scss';
import { FiPlus } from 'react-icons/fi';
import {TbTrashX}  from 'react-icons/tb';
import ModalWindow from './ModalWindow';
import ModalGroup from './ModalGroup';
import { addLink, addGroup, delGroup, getGroups, addDefoultData} from '../../servise/linksDataFunctions';
import { connect } from 'react-redux';

const Links = ({groups, setGroups, dispatch}) => {
    const [stateVisib, setStateVisib] = useState('hidden');
    const [currentGroup, setcurrentGroup] = useState();

    useEffect(() => {
        addDefoultData(setGroups);
    }, [])

    const inpLink = (e) => {
        const nameGroup = e.currentTarget.value;
        if(nameGroup){
            setcurrentGroup(nameGroup);
            setStateVisib('visible');
        }
    }
    const pushLink = ( objectLink) => {
        addLink(currentGroup, objectLink);
        getGroups(setGroups);
    }
    const pushGroup = (name, color) => {
        addGroup(name, color);
        getGroups(setGroups);
       
    }
    const deleteGroup = (name) => {
        delGroup(name);
        getGroups(setGroups);
    }

    const clikLink = (e, curentLink) => {
        dispatch({
            type: 'LINK',
            link: curentLink,
        })
    }
    const goTo = (e, url) => {
        if(!url) {
            alert('empty link');
            return
        };
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.click();
    }
    return (
        <div className={styles.main}>
        {groups?.map((item) => {
            return(
                <div key={item.name} className={styles.group} style={{backgroundColor: item.color}}>
                    <ul type='none'>
                        <TbTrashX size={23} className={styles.delGroup} onClick={() => deleteGroup(item.name)}  title='delete group'/>
                        <button onClick={inpLink} value={item.name} className={styles.addLink} title='add link'><FiPlus size={23} /></button>
                        <h4 className={styles.headerGroup}>{item.name}</h4>
                        {item.content.map((elem) => {
                            let currentLinkObj = {
                                group: item.name,
                                nameLink: elem.nameLink,
                                url: elem.url,
                                comment: elem.comment,
                            }
                            return(
                                <li key={elem.nameLink} className={styles.link}  onClick={(e) => clikLink(e, currentLinkObj)} onDoubleClick={(e) => goTo(e,elem.url)}>
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


export default connect()(Links);