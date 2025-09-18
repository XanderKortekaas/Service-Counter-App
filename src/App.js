import logo from './logo.svg';
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

  return(
  <div className='counter-container, counter-viewer'>
    <button className='button' onClick={handleDecrament}>Decrease -</button>

    <h1 className='counter-viewer'>huidige teller {count}</h1>

    <button className='button' onClick={handleIncrament}>Increase +</button>
  </div>   
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>
          Welcome to the Button
        </h1>

        <div className='counter-section'>
          <h1>Counter 1</h1>
          <Counter/>  
        </div>

        <hr/>

        <div className='counter-section'>
          <h1>Counter 2</h1>
          <Counter/>  
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;


