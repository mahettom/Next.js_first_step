'use client';

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";


export default function Home() {

  const [inputValue, setInputValue] = useState('')
  // —————————————————————————————————————————————————————— Push provide a way to redirect using Next routing
  const { push } = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // —————————————————————————————————————————————————————— Redirect our page into the dynamic route needed
    push(`/prediction/${inputValue}`)
  }

  return (

    <div className='bg-black flex flex-col justify-center items-center h-screen w-full'>
      <div>
        <h1>Enter your name</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='text-black'
          placeholder='Type your name'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <button type='submit'>
          Predict data
        </button>
      </form>

    </div>

  )
}
