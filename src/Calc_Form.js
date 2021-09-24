import React, {useState} from 'react'

export const Calc_Form = () => {
    
        const[input,setInput] = useState('')
        
        const[result,setResult] = useState('')

        const ops = ['+','-','/','*','.']


        const updateInput = (value) => {
            
            if (ops.includes(value) && input === '' ||
                ops.includes(value)  && ops.includes(input.slice(-1))) {
                    return; //position matters here
                } 
                
                     setInput(input + value)

                    if(!ops.includes(value)) {  
                      setResult(eval(input+value).toString())
                    }
                    
                
        }
    
    const createDigits = () =>{
        
        const digits = []

        for(let i=1; i<10; i++) {
            digits.push(<button key={i} onClick={()=> updateInput(i.toString())}>{i}</button>)
        }
        return digits;
    }
    
    
    const deleteLast = () => {
        
        if(input !== '') {
          setInput(input.slice(0,-1))
    }

    }
    

    const calculate = () => {
        setInput(eval(input).toString())
    }


    return (
        <div className ='calculator'>
         <div className='calc-input'>
         <span>{result ? '(' + result + ')' : ''}</span> {input || 0}
         </div>
         <div className='ops'>
        <button onClick={()=> updateInput('+')}>(+)</button>
        <button onClick={()=> updateInput('-')}>(-)</button>
        <button onClick={()=> updateInput('/')}>(/)</button>
        <button onClick={()=> updateInput('*')}>(*)</button>
        <button onClick={()=> updateInput('.')}>(.)</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={calculate}>=</button>
         </div>
         <div className='digits'> 
          {createDigits()}
         </div>  
        </div>
    )
}
