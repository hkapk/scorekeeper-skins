import './App.css';
import PlayerForm from './components/PlayerForm';
import ScoreList from './components/ScoreList';
import React, { useState } from 'react';



function App() {
  const [name, setName] = useState([]);
  // const [currentPage, setCurrentPage] = useState('PlayerForm');
  const [isToggled, setIsToggled] = useState(true);

  return (
<div className="App">
  <button onClick={()=> setIsToggled(!isToggled)}>Toggle</button>
  { isToggled ?   <PlayerForm name={name} setName={setName}/> : <ScoreList name={name} setName={setName}/> }
</div>
  );
}

export default App;
