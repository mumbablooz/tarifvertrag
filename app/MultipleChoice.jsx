'use client'
import React,{useEffect, useState} from 'react'
import {ShowTrueAnswer} from './components/ShowTrueAnswer'
import {ShowCurrentQuestion} from './components/ShowCurrentQuestion'
import {ShowFinalResult} from './components/ShowFinalResult'

export default function MultipleChoice({points,setPoints,questionArray}) {
    const [ trueAnswer, setTrueAnswer ] = useState(null)
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0)
    const [ content, setContent ] = useState(null)
    const [ andAgain, setAndAgain ] = useState(false)
    const questionArrayLength = questionArray.length

useEffect(()=>{
if(andAgain){
  setTrueAnswer(null)
  setCurrentQuestionIndex(0)
  setPoints(0)

  setTimeout(()=>{

    setContent(<ShowCurrentQuestion       
        question={questionArray[0]} 
        setPoints={setPoints} 
        setTrueAnswer={setTrueAnswer}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
    
        />)
        window.scrollTo(0,0);
  },2000)

  setAndAgain(false)
}
},[andAgain,questionArray,setPoints,setTrueAnswer,setCurrentQuestionIndex])

    useEffect(()=>{
if(trueAnswer){

        setContent(<ShowTrueAnswer trueAnswer={trueAnswer} setTrueAnswer={setTrueAnswer}/>)

    } else if(!trueAnswer && currentQuestionIndex < questionArrayLength) {
  
      setContent(<ShowCurrentQuestion       
        question={questionArray[currentQuestionIndex]} 
        setPoints={setPoints} 
        setTrueAnswer={setTrueAnswer}
        setCurrentQuestionIndex={setCurrentQuestionIndex}

        />)
    } else if(!trueAnswer && currentQuestionIndex===questionArrayLength) {
setContent(<ShowFinalResult points={points} questionArrayLength={questionArrayLength} setAndAgain={setAndAgain}/>)
    }
    },[trueAnswer,questionArray,points,setPoints,currentQuestionIndex,questionArrayLength,setAndAgain])

  return (
    <section style={{
      width: '100vw',
      padding: '1rem',
    }}>       
        {content}
    </section>
  )
}
