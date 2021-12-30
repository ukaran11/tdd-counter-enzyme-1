import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <div id="counter-value">{ counter }</div>
      <button id="increment-btn">Increment</button>
    </div>
  );
}

export default App;
