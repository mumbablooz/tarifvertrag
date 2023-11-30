'use client'
import React,{useContext} from 'react'
import { questionArray } from '../questionArray'
import { AndAgainContext } from '../context'

export default function AllQuestions() {

    let  {andAgain, setAndAgain}  = useContext(AndAgainContext)

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
         <button 
        style={{
          alignSelf:'center',
          width: '100vw',
          height: '30vh',
          fontSize: '5rem'
        }}
        onClick={(e)=>{
          e.target.style.backgroundColor='lightgreen'
            setAndAgain(true)
        }}
        >Nochmal</button>
    </section>
  )
}
