import './App.css';
import Navbar from './components/Navbar';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

function App() {
  return (
<div className="App">
  <Navbar/>
  <PlayerForm/>
  <PlayerList/>
</div>
  );
}

export default App;
