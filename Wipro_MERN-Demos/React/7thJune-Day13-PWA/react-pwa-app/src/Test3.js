import React, {useState} from 'react'

export default function Test3() {
  const names =["Ajay", "Deepak", "Sagar", "Pawan"];
  const [name, setName]= useState("");
  const [i,setI] = useState(0);
  setInterval(()=>
  {
    setName(names[i])
    setI(i+1);
  },2000);

  return (
  
    <div> 
  <h2>   {name} </h2>

    </div>
  )
}
