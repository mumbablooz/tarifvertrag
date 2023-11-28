'use client'
import { useState } from 'react'
import MultipleChoice from './MultipleChoice'
import {questionArray} from './questionArray'
export default function Home() {

const [ points, setPoints ] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
     <p>{points} / {questionArray.length}</p>
     <MultipleChoice points={points} setPoints={setPoints} questionArray={questionArray}/>
    </main>
  )
}
