import React, {useState} from 'react'

export default function Ss1() {
  const [data,setData] = useState("")
  setTimeout(()=>{
  setData("This is a simple component")
},1000);

  console.log(data);
  return (
    <div> Hello </div>
  )
}


// ComponentDidMount
// ComponentDidUpdate
// ComponentDidUnMount
