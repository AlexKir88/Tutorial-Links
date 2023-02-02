import { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import { getGroups } from '../servise/dataFunctions';
import { FiPlus } from 'react-icons/fi';
import ModalWindow from './ModalWindow';
import ModalGroup from './ModalGroup';
import { addLink, addGroup} from '../servise/dataFunctions';
import { connect } from 'react-redux';


const Main = () => {
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
    return (
        <div className={styles.main}>
            <ModalWindow visibility={stateVisib} setstateVisib={setStateVisib} pushLink={pushLink} />
            <ModalGroup  pushGroup={pushGroup} />
        {groups?.map((item) => {
            return(
                <div key={item.name} className={styles.group} style={{backgroundColor: item.color}}>
                    <ul type='none'>
                        <h4>{item.name}</h4>
                        {item.content.map((elem) => {
                            return(
                                <li key={elem.nameLink}className={styles.link}>
                                    <b>{elem.nameLink}</b> : {elem.url}
                                </li>
                            )
                        })}
                        <button onClick={inpLink} value={item.name} className={styles.addLink}><FiPlus size={23} /></button>
                    </ul>
                </div>
            )
        })}
        </div>
    )
}


export default connect()(Main);