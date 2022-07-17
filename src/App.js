import './App.css';
import Navbar from './components/Navbar';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import React, { useState, useEffect} from 'react';

function App() {
  const [name, setName] = useState([]);
  const [skins, setSkins] = useState(0);


  return (
<div className="App">
  <Navbar setSkins={skins}/>
  <PlayerForm name={name} setName={setName}/>
  <PlayerList name={name} setName={setName}/>
</div>
  );
}

export default App;
