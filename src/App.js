import './App.css';
import Player from './components/player/Player';
import Data from './components/Data/data.json'
import Club from './components/Club/Club';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react'

function App() {
  const [userData, setUserData] = useState([])
  useEffect(() => setUserData(Data), [])  //it takes json data then setup it with the state

  const [player, setPlayer] = useState([]) //this state takes individual user information when clicked

  //this function executes when user click on add player button from player component.
  const addPlayerHandle = (playerInfo) => { 
    const totalPlayerSalary = [...player, playerInfo]
    setPlayer(totalPlayerSalary)
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <div className="club-info">
          <Club player={player}></Club>
        </div>
        <div className='players'>
          {userData.map(player => <Player key={player.rank} addPlayerHandle={addPlayerHandle} data={player}></Player>)}
        </div>
        
      </header>
    </div>
  );
}

export default App;
