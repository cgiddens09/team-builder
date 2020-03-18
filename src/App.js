import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMemberHandler = person => {
    const newMem = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMemberList([...memberList, newMem]);
  };


  return (
    <div>
      <h1>Team Members</h1>
      <Form addMember={addMemberHandler} />
      <Card member={memberList} />
    </div>
  );
}

export default App;
