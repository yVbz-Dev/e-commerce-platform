
import { useState } from 'react'
import './App.css'

function App() {
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  return (
    <>
    <div className='
      flex flex-col items-center gap-1.5 justify-center
    '>
      <h1 className='
        text-3xl text-center mt-5 font-inter
      '
      >E-Commerce</h1>
      <p className='
        text-xl text-center font-inter
      '
      >Login</p>
      <div className='
        flex flex-col items-center gap-1.5 justify-center
      '>
        <input type="text" className='
          border border-black font-inter
        ' onChange={(e) => {SetEmail(e.target.value)}}/>
        <input type="text" className='
          border-black border font-inter
        ' onChange={(e) => {SetPassword(e.target.value)}}/>
        <button className='
          font-inter border border-black
        '>Login</button>
      </div>
    </div>
    </>
  )
}

export default App
