import { useEffect, useRef, useState } from 'react';
import styles from './ModalWindow.module.scss';
import { connect } from 'react-redux';

const ModalWindow = ({currentLink, language, setstateVisib, visibility, pushLink, isEdit}) => {
    const form = useRef();
    useEffect(()=> {
        if (isEdit) {
            form.current.name.value = currentLink.nameLink;
            form.current.url.value = currentLink.url;
            form.current.comment.value = currentLink.comment;
        }
    })
    const doneEnter = (e) => {
        pushLink({
            nameLink: e.target.name.value,
            url: e.target.url.value,
            comment: e.target.comment.value,
        })
        e.target.name.value = '';
        e.target.url.value ='';
        e.target.comment.value = '';
        
        setstateVisib('hidden');
        e.preventDefault();
        e.stopPropagation();
    }
    const close = (e) => {
        setstateVisib('hidden');
        e.preventDefault();
    }
    return(
        <div className={styles.fullScreen} style={{visibility}}>
            <form className={styles.modalWindow} onSubmit={doneEnter} ref={form} style={{visibility}}>
                <button className={styles.close} onClick={close}>X</button>
                <h3>{language.inputData}</h3>
                <div className={styles.boxField}>
                    <span>{language.name}</span> <input name='name' type='text'autoComplete='off' required className={styles.name} />
                </div>
                <div className={styles.boxField}>
                    <span>{language.URL}</span> <input  name='url' type='url' autoComplete='off' required className={styles.url} />
                </div>
                <div className={styles.boxField}>
                    <span>{language.comments}</span> <textarea name='comment' className={styles.comment} />
                </div>
                <button type='submit' className={styles.add}>{language.buttonDone}</button>
            </form>
        </div>
    )
}
const mapStateFromProp = ({currentLink, language}) => {
    return {
        currentLink,
        language
    }
}
export default connect(mapStateFromProp)(ModalWindow);