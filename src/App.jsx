/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center w-full flex-wrap gap-8'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo w-28 p-4" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-28 p-4" alt="React logo" />
        </a>
      </div>
      <h1 className='text-5xl text-white text-opacity-75 font-mono pt-6'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-black pt-4'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-black">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
