import './App.css';
import Navbar from './components/Navbar';
import PlayerForm from './components/PlayerForm';
import ScoreList from './components/ScoreList';
import React, { useState } from 'react';



function App() {
  const [name, setName] = useState([]);
  // const [currentPage, setCurrentPage] = useState('PlayerForm');
  

  return (
<div className="App">
  <Navbar/>
  <PlayerForm name={name} setName={setName}/>
  <ScoreList name={name} setName={setName}/>
</div>
  );
}

export default App;
