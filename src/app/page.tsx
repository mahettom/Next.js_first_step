'use client';

import { useState } from "react"



export default function Home() {

  const [inputValue, setInputValue] = useState('')

  return (

    <div className='bg-black flex flex-col justify-center items-center h-screen w-full'>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form>
        <input type='text' placeholder='Type your name' />
        <button type='submit' >Predict data</button>
      </form>
    </div>

  )
}
