import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  // let a=5;

  const addValue =()=>{
    // setCount=count+1;
    if(count<20)
    setCount(count+1);
  }
  const removeValue =()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {count}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
