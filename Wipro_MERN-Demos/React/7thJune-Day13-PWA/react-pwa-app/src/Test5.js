import React, {useState, useEffect } from 'react'

export default function Test5() {
  const [i, setI] = useState(0);
  useEffect(()=>
  {
    setTimeout(()=>
    {
      setI(i+1);
    },1000);
    console.log(i)
  },[])
  return (
    <div> 


    </div>
  )
}
