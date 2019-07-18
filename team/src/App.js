import React, { useState } from 'react';
import TeamMemberList from './components/TeamMembersList'
import Form from './components/Form'
import './App.css';

function App() {

  const [members, setMembers] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form setMembers={setMembers} members={members} update={update} setIsUpdating={setIsUpdating} isUpdating={isUpdating} />
      <TeamMemberList members={members} setUpdate={setUpdate} setIsUpdating={setIsUpdating} />
    </div>
  );
}

export default App;
