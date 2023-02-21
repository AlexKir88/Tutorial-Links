import { useRef } from 'react';
import styles from './ModalGroup.module.scss';
import { connect } from 'react-redux';

const ModalGroup = ({pushGroup, visibilityModalGroup, language, dispatch}) => {
    const form = useRef();
    const doneEnter = (e) => {
        pushGroup(e.target.name.value, e.target.color.value);
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'hidden'
        })
        e.target.name.value = '';
        e.preventDefault();
        e.stopPropagation();
    }
    const close = (e) => {
        dispatch({
            type: 'VISMODGR',
            visibilityModalGroup: 'hidden'
        })
        e.preventDefault();
    }
    return(
        <div className={styles.fullScreen} style={{visibility: visibilityModalGroup}}>
        <form className={styles.modalWindow} onSubmit={doneEnter} ref={form} style={{visibility: visibilityModalGroup}}>
            <button className={styles.close} onClick={close}>X</button>
            <h3>{language.nameColor}</h3>
            <div className={styles.boxField}>
                <div>{language.name}</div> <input name='name' type='text' className={styles.name}/>
            </div>
            <div>{language.color}</div>
            <div className={styles.boxField}>
                <div className={styles.inputColor}><div style={{backgroundColor:"orange" }} className={styles.square}></div> <input  name='color' type='radio' value="orange" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"yellow" }} className={styles.square}></div> <input  name='color' type='radio' value="yellow" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"pink" }} className={styles.square}></div> <input  name='color' type='radio' value="pink" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"brown" }} className={styles.square}></div> <input  name='color' type='radio' value="brown" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"blue" }} className={styles.square}></div> <input  name='color' type='radio' value="blue" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"red" }} className={styles.square}></div> <input  name='color' type='radio' value="red" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"violet" }} className={styles.square}></div> <input  name='color' type='radio' value="violet" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"green" }} className={styles.square}></div> <input  name='color' type='radio' value="green" className={styles.radio}/></div>
                <div className={styles.inputColor}><div style={{backgroundColor:"brown" }} className={styles.square}></div> <input  name='color' type='radio' value="brown" className={styles.radio}/></div>

            </div>
            <button type='submit' className={styles.add}>{language.buttonDone}</button>
        </form>
        </div>
    )
}
const mapStateFromProp = ({visibilityModalGroup, language}) => {
    return {
        visibilityModalGroup,
        language
    }
}
export default connect(mapStateFromProp)(ModalGroup);