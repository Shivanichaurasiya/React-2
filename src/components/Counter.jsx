import React,{useState} from 'react';
import '../CSS/counter.css'

export function Counter(){
    const[count,setCount]=useState(0);
    return(
        <>
        <div className="count">
            <h2>Count:{count} </h2>
            <button onClick={() => setCount(count + 1 )}>Increment</button>
            <button onClick={() => setCount(count - 1 )}>decrement</button>

            <button onClick={()=>setCount(0)} >Reset </button>
        </div>
        </>
    )
}