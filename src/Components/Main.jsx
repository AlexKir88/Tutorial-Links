import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { getGroups } from '../servise/dataFunctions';

const Main = () => {
    const[groups, setGroups] = useState([]);
    useEffect(() => {
        getGroups(setGroups);
    })
    return (
        <div className={styles.main}>
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
                    </ul>
                </div>
            )
        })}
        </div>
    )
}

export default Main;