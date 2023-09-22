import React, {useState} from 'react';
import './App.css';
function App(){
  const [count,setcount]=useState(0);
  const incrementCounter =()=> {
    setcount(count+1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App with button</h1>
<p>counter value:{count }</p>
<button onClick={incrementCounter} >Increment me </button>
      </header>
    </div>
  );
}
export default App;