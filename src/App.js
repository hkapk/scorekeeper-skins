import './App.css';
import Navbar from './components/Navbar';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState([]);


  return (
<div className="App">
  <Navbar/>
  <PlayerForm name={name} setName={setName}/>
  <PlayerList name={name} setName={setName}/>
</div>
  );
}

export default App;
