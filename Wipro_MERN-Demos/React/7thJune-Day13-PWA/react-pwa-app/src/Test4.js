import React, { useEffect } from 'react'

export default function Test4() {
  useEffect(()=>
  {
    let data = "this is some data"
    console.log(data)
  },[])
  return (
    <div>Test4</div>
  )
}

 // useffect will cover all of them
// ComponentDidMount
// ComponentDidUpdate
// ComponentDidUnMount
