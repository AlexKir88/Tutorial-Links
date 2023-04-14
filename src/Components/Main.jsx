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

function Main( { currentNote}) {
  const [groups, setGroups] = useState([]);

  return (
    <>
      <Routes>
        <Route path='/' element={
          <> <Links groups={groups} setGroups={setGroups}/>  <RightLinks setGroups={setGroups} /> </>
        } />
        <Route path='/notes' element={
          <>  <Notes /> <RightNote currentNote={currentNote}/> </>
        } />
        <Route path='/backup' element={<Backup />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<div style={{position: 'relative', left: '40vw'}}><h1>not found page</h1></div>} />
      </Routes>
    </>
  );
}

const mapStateFromProp = ({ currentNote}) => {
  return {
    currentNote
  }
}

export default connect(mapStateFromProp)(Main);
