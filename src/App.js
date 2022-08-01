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
  { isToggled ?   <PlayerForm name={name} setName={setName}/> : <ScoreList name={name} setName={setName}/> }
  
  { isToggled ? <button className="submitButton" onClick={()=> setIsToggled(!isToggled)}>Start</button>  : <><button className="submitButton" onClick={()=> setIsToggled(!isToggled)}>New Game</button> </> }
</div>
  );
}

export default App;
