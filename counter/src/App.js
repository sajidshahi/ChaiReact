// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter]= useState(5);

  const addValue=()=>{
    console.log ("Clicked", counter)
    setCounter (counter +1)
  }

  const removeValue=()=>{
    console.log("Value removed", counter)
    setCounter(counter -1)
  }

  return (
    <>
    <h1> Chai aur React</h1>
    <h2>Counter Value: {counter} </h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    
    </>
  );
}

export default App;
