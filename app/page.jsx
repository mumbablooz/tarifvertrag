'use client'
import { useState,useEffect } from 'react'
import MultipleChoice from './MultipleChoice'
import {questionArray} from './questionArray'

export default function Home() {

  const [ opacity, setOpacity ] = useState(0)
 
  useEffect(()=>{
setOpacity(1)
},[])

const [ points, setPoints ] = useState(0)

  return (
    <main
    style={{opacity: opacity}}
    className="flex min-h-screen flex-col items-center p-2">
    <div style={{
          border: '1rem solid rgb(228, 230, 173)',
          borderRadius: '0.5rem',
          padding: '1rem',
     }}>
       <p>Beantworte die Fragen zur Tarifkommission um zu verstehen was diese tut:</p>
    <p>{points} Punkte / {questionArray.length} Fragen</p>
     <p style={{
      fontSize: '1.3rem',
     }}>Du bekommst für jede richtig beantwortete Frage 1 Punkt</p>
      </div> 
     <MultipleChoice points={points} setPoints={setPoints} questionArray={questionArray}/>
    </main>
  )
}
