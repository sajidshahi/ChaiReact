// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter]= useState(5);

  const addValue=()=>{

    if (counter <=19)
    {
      setCounter (counter +1)
    }
    
  }

  const removeValue=()=>{
    if (counter>=1) {
setCounter (counter -1)
    }
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
