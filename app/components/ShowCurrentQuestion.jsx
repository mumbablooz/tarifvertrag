
import React,{useState,useEffect,useRef} from 'react'

export function ShowCurrentQuestion({question,setPoints,setTrueAnswer,setCurrentQuestionIndex}) {
 
    const [ opacity, setOpacity ] = useState(0)
    const [ opacityNone, setOpacityNone ] = useState(false)
    let attempt = useRef(0)
    window.scrollTo(0,0);
    
    useEffect(()=>{
        if(!opacityNone){
      setTimeout(()=>{
    setOpacity(1)
      },0)
    }
    },[opacityNone])

    return (
    <div style={{
        opacity: opacity,
        transition: '0.8s ease-in-out',
    }}>
<b>{question.question}</b>
<div>
    {question.answer.map((answer, index)=>{
       return <div 
       key={'answer'+index}
       style={{
        marginBottom: '2rem',
       }}
       >
        <b>{(index+1)+'.'}</b>
<p id={'answer-'+index}
style={{
    marginBottom: '1rem'
}}>{answer.content}</p>
<button 
style={{

}}
onClick={(e)=>{
    if(answer.isTrue===true){
        e.target.style.backgroundColor= 'green'
        e.target.style.disabled = true
        if(attempt.current===0){
            setPoints(rev=>rev+1)
        }
        setTrueAnswer(answer.content)
        setCurrentQuestionIndex(rev=>rev+1)
        attempt.current=0

        setOpacityNone(true)
    } else {
        e.target.style.backgroundColor= 'red'
        
        attempt.current=rev=>rev+1
    }

}}>Auswählen</button>
       </div> 
    })}
</div>      
    </div>
  )
}
