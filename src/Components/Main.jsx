import Links from './Links/Links';
import RightLinks from './Links/RightLinks';
import { connect } from 'react-redux';
import { useState } from 'react';
import Notes from './Notes/Notes';
import RightNote from './Notes/RightNote';
import Backup from './Backup/Backup'
import About from './About/About';
import styles from './Main.module.scss'
import {Routes, Route} from 'react-router-dom';

function Main( { language, currentNote}) {
  const [groups, setGroups] = useState([]);

  return (
    <>
      <Routes>
        <Route path='Tutorial-Links/' element={<><Links groups={groups} setGroups={setGroups}/><RightLinks setGroups={setGroups} /></>} />
        <Route path='Tutorial-Links/notes' element={<><Notes /><RightNote currentNote={currentNote}/></>} />
        <Route path='Tutorial-Links/backup' element={<Backup />} />
        <Route path='Tutorial-Links/about' element={<About />} />
        <Route path='Tutorial-Links/*' element={<div style={{position: 'relative', left: '40vw'}}><h1>{language.error404}</h1></div>} />
      </Routes>
    </>
  );
}

const mapStateFromProp = ({ language, currentNote}) => {
  return {
    language,
    currentNote
  }
}

export default connect(mapStateFromProp)(Main);
