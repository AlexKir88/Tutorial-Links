import Links from './Links/Links';
import RightLinks from './Links/RightLinks';
import { connect } from 'react-redux';
import { useState } from 'react';
import Notes from './Notes/Notes';

function Main( {currentMenu}) {
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const mainContent = {
    Links: (
      <>
        <Links groups={groups} setGroups={setGroups} />
        <RightLinks setGroups={setGroups} />
      </>
    ),
    Notes: (
      <>
        <Notes notes={notes} setNotes={setNotes} />
      </>
    )
  }
  return (
    <>
        {mainContent[currentMenu]}
    </>
  );
}

const mapStateFromProp = ({currentMenu}) => {
  return {
    currentMenu
  }
}

export default connect(mapStateFromProp)(Main);
