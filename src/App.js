import "./css/app.css"
import Board from './Board'

import { useState } from 'react';

function App() {

  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    setReset(true)
  }
  return (
    <section className="main-container">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        <div className="winner-text">{winner}</div>

        <button onClick={() => resetBoard()}>
          Reset Board
        </button>
      </div>

      <Board 
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
    </section>
  );
}

export default App;
