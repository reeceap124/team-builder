import React, {useState} from 'react';
import './App.css';
import TeamForm from './components/TeamForm';
import Team from './components/Team';

function App() {
  const [members, setMembers] = useState([
    {
      id: 0,
      name: 'Reece',
      email: 'piersonreece@gmail.com',
      role: 'Husband'
    },
    {
      id: 1,
      name: 'The Mrs.',
      email: 'heremail@gmail.com',
      role: 'Wife'
    }
  ])
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  const editMember = member => {

  }


  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewMember={addNewMember}/>
      <Team members={members}/>
    </div>
  );
}

export default App;
