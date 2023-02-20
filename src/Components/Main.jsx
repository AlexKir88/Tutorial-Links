import Links from './Links/Links';
import RightLinks from './Links/RightLinks';
import { connect } from 'react-redux';
import { useState } from 'react';
import Notes from './Notes/Notes';
import RightNote from './Notes/RightNote';
import Backup from './Backup/Backup'
import About from './About/About';

function Main( {currentMenu, currentNote, dispatch}) {
  const [groups, setGroups] = useState([]);
  const mainContent = {
    Links: (
      <>
        <Links groups={groups} setGroups={setGroups} />
        <RightLinks setGroups={setGroups} />
      </>
    ),
    Notes: (
      <>
        <Notes />
        <RightNote currentNote={currentNote}/>
      </>
    ),
    Backup: (
      <>
        <Backup />
      </>
    ),
    About: (
      <>
        <About />
      </>
    )
  }
  return (
    <>
      {mainContent[currentMenu]}
    </>
  );
}

const mapStateFromProp = ({currentMenu, currentNote}) => {
  return {
    currentMenu,
    currentNote
  }
}

export default connect(mapStateFromProp)(Main);
