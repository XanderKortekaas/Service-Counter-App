import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function MyButton()
{
 
    
  
  const [count, setCount] = useState(0);

  function handleClick()
  {
    setCount(count + 1);
  }

  return(
    <button className="button" onClick={handleClick}>
    You pressed me {count} times
    </button>
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
        <MyButton />

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


