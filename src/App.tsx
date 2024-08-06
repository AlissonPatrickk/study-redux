import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice';
import Count from './components/Count'

const App: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Redux Counter</h1>
        <Count />
        <button onClick={() => dispatch(increment())} >Increment</button>
        <button onClick={() => dispatch(decrement())} >Increment</button>
      </div>
    </div>
  );
}

export default App;
