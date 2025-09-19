import minus from './minus.png';
import plus from './plus.png';
import trashCan from './trash-can.png';
import './App.css';

import { useState } from 'react';

function Counter()
{
  const [count, setCount] = useState(0);

  function handleIncrament()
  {
    setCount(count + 1);
  }

  function handleDecrament()
  {
    if(count > 0)
    {
        setCount(count - 1);
    }
  }

  function resetCount()
  {
    setCount(0)
  }

  return(
  <div className='counter-container'>
    <h2 className='counter-viewer'>Huidige Klant Aantal {count}</h2>
    <br></br>
    <button className='button, button-svg' onClick={handleDecrament}> <img src={minus} className='logo'/> </button>
    <br></br>
    <button className='button, button-svg' onClick={handleIncrament}> <img src={plus} className = 'logo'/> </button>
    <br></br>
    <button className='button, button-svg' onClick={resetCount}> <img src={trashCan} className='logo'/></button>
  </div>   
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Reception
        </h1>

        <div className='counter-section'>
          <h1>HR</h1>
          <Counter/>  
        </div>

        <hr/>

        <div className='counter-section'>
          <h1>Financials</h1>
          <Counter/>  
        </div>

        <hr/>

        <div className='counter-section'>
          <h1>ICT</h1>
          <Counter/>
        </div>
      </header>
    </div>
  );
}



export default App;


