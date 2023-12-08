import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  const col =["green", "yellow", "red", "orange", "blue", "white", "black", "brown", "violet"]

  const colorChange=(newColor) => setColor(newColor);

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}} >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {
              col.map((c,index)=>(
                <button 
                // key={index}
                className="outline-none px-4 rounded-2xl text-white shadow-lg py-1" 
                style={{backgroundColor: c}} 
                onClick={()=>colorChange(c)}>{c}</button>
              ))
            }
            
            
            </div>
        </div>
      </div>
    </>
  )
}

export default App
