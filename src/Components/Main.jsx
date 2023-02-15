import { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import { getGroups } from '../servise/dataFunctions';
import { FiPlus } from 'react-icons/fi';
import {TbTrashX}  from 'react-icons/tb';
import ModalWindow from './ModalWindow';
import ModalGroup from './ModalGroup';
import { addLink, addGroup, delGroup} from '../servise/dataFunctions';
import { connect } from 'react-redux';


const Main = ({dispatch}) => {
    const [stateVisib, setStateVisib] = useState('hidden');
    const [groups, setGroups] = useState([]);
    const [currentGroup, setcurrentGroup] = useState();

    useEffect(() => {
        getGroups(setGroups);
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
            link: curentLink
        })
    }
    return (
        <div className={styles.main}>
            <ModalWindow visibility={stateVisib} setstateVisib={setStateVisib} pushLink={pushLink} />
            <ModalGroup  pushGroup={pushGroup} />
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
                                <li key={elem.nameLink} className={styles.link}  onClick={(e) => clikLink(e, currentLinkObj)}>
                                    <b>{elem.nameLink}</b> : {elem.url}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
        </div>
    )
}


export default connect()(Main);