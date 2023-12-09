import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [chare, setChare] = useState(false)
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( ()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertuasdfghjklzxcvbnm";
    if(num) str+="0123456789";
    if(chare) str+="!@#$%^&*()";

    for (let i = 1; i <=length; i++) {
      let char= str.charAt(Math.floor(Math.random()*str.length+1));
      pass+= char;
    }
    setPassword(pass);

  } , [length,num,chare,setPassword]);

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{passwordGenerator();},[length,num,chare,passwordGenerator])
  
  return (
    <>
     
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700"> 
     <h1 className='text-center text-white text-2xl my-2'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      ref={passwordRef}
      readOnly
      />
      <button 
      onClick={copyPassToClipboard}
      className='outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0'>copy</button>

     </div>
     <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value);}}
        /> <label > Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={num} id='numberInput' onChange={()=>{ setNum((prev)=>!prev); }}/>
        <label htmlFor="numberInput">Number</label>

      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={chare} id='charInput' onChange={()=>{ setChare((prev)=>!prev); }}/>
        <label htmlFor="charInput">Characters</label>

      </div>
     </div>
    
     </div>

    </>
  )
}

export default App
