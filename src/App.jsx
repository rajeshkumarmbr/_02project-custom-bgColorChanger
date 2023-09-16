import { useState } from 'react'

function App() {
  const [color, setColor] = useState(null)
  const [input, setInput] = useState(null)

  return (
    < >
      <div className='h-[100vh] flex justify-center text-center items-center flex-col' style={{backgroundColor : color } }>
        <h1 className='text-3xl font-bold '>Background Color Changer  </h1>
        <input className='my-3 p-3 rounded-lg border-2 border-zinc-950' placeholder='Enter Color Name & Code' onChange={e => setInput (e.target.value)} />
        <button className='bg-blue-700 border-black rounded-md p-2 text-white'onClick={() => setColor(input)} >Change Color</button>

       </div> 
    </>
  )
}

export default App
