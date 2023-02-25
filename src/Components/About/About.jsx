import styles from './About.module.scss'
import { sendInTlg } from '../../servise/mainDataFuncyion';
import { connect } from 'react-redux';

const About = ({language}) => {
    const sendMessage = (e) => {
        if (e.target.tagName != 'BUTTON') return;
        let name = e.currentTarget[0].value;
        let contacts = e.currentTarget[1].value;
        let contents = e.currentTarget[2].value;
        sendInTlg('/' + 'message' + '/' + name + '/' + contacts + '/' + contents + '/');
        e.currentTarget[0].value = '';
        e.currentTarget[1].value = '';
        e.currentTarget[2].value = '';
    }
    return (
        <div className={styles.main}>
            <div className={styles.about}>
                <p>
                    {language.about}
                </p>
            </div>
            <div className={styles.feedback}>
                <form onClick={sendMessage} className={styles.form}>
                    <h4>{language.feedback}</h4>
                    <div>{language.name}<input className={styles.name} type="text" placeholder={language.placeholderName} name='nameUser'/></div>
                    <div>{language.contact}<input className={styles.contact} type="text" placeholder={language.placeholderContact} name='contact' /></div>
                    <div className={styles.content}>{language.descript}<textarea className={styles.text} placeholder={language.placeholderDescript} name='descript' /></div>
                    <button type='button'>{language.buttonSend}</button>
                </form>
            </div>
        </div>
    )
}
const mapStateFromProp = ({language}) => {
    return {
        language,
    }
}
export default connect(mapStateFromProp)(About);