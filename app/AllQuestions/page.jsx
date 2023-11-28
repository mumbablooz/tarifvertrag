'use client'
import React from 'react'
import { questionArray } from '../questionArray'
export default function AllQuestions() {
  return (
    <section>
{questionArray.map((question,questionIndex)=>{
return (<div key={'question'+questionIndex}>
<b>{question.question}</b>
<div>
    {question.answer.map((answer,answerIndex)=>{
        if(answer.isTrue){
            return <div key={'answer'+answerIndex}>
            <b>{(answerIndex+1)+'.'}</b>
    <p style={{
        marginBottom: '1rem'
    }}>{answer.content}</p>
    <button 
    style={{
    
    }}
    onClick={(e)=>{
        if(answer.isTrue===true){
            e.target.style.backgroundColor= 'green'
            e.target.style.disabled = true
            setPoints(rev=>rev+1)
        } else {
            e.target.style.backgroundColor= 'red'
        }
    
        console.log(e.target)
    }}>Auswählen</button>
           </div> 
        }

    })}
</div>
            </div>)
        })}
    </section>
  )
}
