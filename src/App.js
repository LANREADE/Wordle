import './App.css';
import  KeyType  from "./components/KeyType"
import  { Board } from "./components/Board";
import { boardDefault } from './Words';
import {createContext ,useState } from 'react';

export const AppContext = createContext();

function App() {
  const [board , setBoard ] = useState(boardDefault )
  const [currAttempt , setCurrAttempt ] = useState({attempt:0 , letterPos: 0})

  const onSelectLetter = (keyVal)=>{
    if(currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos]= keyVal;
    setBoard(newBoard)
    setCurrAttempt ({...currAttempt , letterPos : currAttempt.letterPos + 1})

  }
  const onDelete = ( )=>{
    if( currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos -1 ]= "";
    setBoard(newBoard)
    setCurrAttempt({...currAttempt , letterPos: currAttempt.letterPos -1 })

  }
  const onEnter = ( ) =>{
    if(currAttempt.letterPos !== 5 ) return;
    setCurrAttempt({attempt : currAttempt.attempt + 1 , letterPos :0})


  }
  return (
    <div className="App">
      <nav>
        <h1> Wordle </h1>
      </nav>
        <AppContext.Provider value= {{board ,setBoard , currAttempt , setCurrAttempt , onDelete, onEnter, onSelectLetter }}>
          <div className='game'>
            <Board />
            <KeyType />
          </div>
        </AppContext.Provider>
    </div>
  );
}

export default App;
