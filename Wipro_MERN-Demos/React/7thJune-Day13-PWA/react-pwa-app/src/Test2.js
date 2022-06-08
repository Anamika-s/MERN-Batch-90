import React, { useReducer } from 'react'
import { act } from 'react-dom/test-utils';

const reducer = (state, action) =>
{
console.warn("State is" + state)
console.warn(action.type)
if(action.type==='INCRE')
 return state  + 1;
 else if(action.type==='DECR')
 return state -1 ;
 else 
return state;
}

const initialvalue = 0;
export default function Test2() {
  const[state, dispatch] = useReducer(reducer,initialvalue)
  return (
    <div> 
          <h1> State is  {state} </h1>
         <button onClick={()=>dispatch({'type':'INCRE'})}> Increment </button>  
      <button onClick={()=>dispatch({'type':'DECR'})}> Decrement </button>    
    </div>
  )
}
