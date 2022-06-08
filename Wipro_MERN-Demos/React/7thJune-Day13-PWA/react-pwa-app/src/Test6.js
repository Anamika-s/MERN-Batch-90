import React, { useState,  useEffect } from 'react'

export default function Test6() {
  const [data , setData]  = useState(0)
  const [count, setCount] = useState(0)
  useEffect(()=>
  {
      console.log("USeEffect")
  },[data,count])
  return (
    <div>
      <h2> Data : {data} </h2>
      <h2> Count : {count} </h2>
      
    <button onClick={()=> setData(data+1)}> Add </button>
   
    <button onClick={()=> setCount(count+1)}> Add Count</button>
   
    </div>
  )
}
