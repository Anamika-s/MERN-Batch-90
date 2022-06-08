import React , {useState} from 'react'

export default function Test1() {
  const [count, setCount] = useState(0)
  return (
    <div> 
       <p> {count} </p>
       <button onClick={()=> setCount(count+1)}> Increment </button>
       <button onClick={()=>setCount(count-1)}> Decrement </button>

    </div> 
 )
}
