'use client'
import React from 'react'
import Link from 'next/link'
import { questionArray } from '../questionArray'

export default function AllQuestions() {   

    return (
    <section>
        
        <h2 style={{
            padding: '1rem',
        }}>Alle Fragen und richtigen Antworten</h2>
{questionArray.map((question,questionIndex)=>{

return (<div 
    style={{
        borderBottom: '1rem solid rgb(228, 230, 173)',
    }}
key={'question'+questionIndex}>
<h3>{question.question}</h3>
<div>
    {question.answer.map((answer,answerIndex)=>{
        if(answer.isTrue){
            return <div key={'answer'+answerIndex}>
            <b style={{
                fontSize: '1.5rem'
            }}>{(answerIndex+1)+'. Antwort'}</b>
{answer.content.map((line,lineIndex)=>{
    

  return <p 
key={'line-'+lineIndex}
style={{
    marginBottom: '1rem'
}}>{line}</p>
  })}  
           </div> 
        }
    })}
</div>
            </div>)
        })}
        <Link href={'/'}>
        <p 
        style={{
          alignSelf:'center',
          width: '100vw',
          height: '30vh',
          fontSize: '5rem'
        }}

        >Nochmal</p>
        </Link> 
    </section>
  )
}
