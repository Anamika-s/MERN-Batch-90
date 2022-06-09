import React ,{useState} from 'react'

export default function App1() {
  return (
    <div> 
      <h1> HOC </h1>
      {/* <HOC name="ajay" age={12}/> */}
      <HOCRed cmp={<Counter/>}/>
      <HOCGreen cmp={Counter}/>
     
      {/* <Counter/>
      <Counter/>
      <Counter/> */}
    </div>
  )
}

function HOCRed(props)
{
  return (
  <> 
   
  {/* <b> Hello {props.name} {props.age} </b> */}
  <h2  style={{backgroundColor:'red'}}> {props.cmp} </h2>
  </>)
}

function HOCGreen(props)
{
  return (
  <> 
   
  {/* <b> Hello {props.name} {props.age} </b> */}
  <h2  style={{backgroundColor:'green'}}> 
  <props.cmp/> </h2>
  </>)
}

function Counter()
{
  const [count, setCount] = useState(0)
  return(
    <div>
<h3> {count} </h3>
<button onClick={()=> setCount(count+1)}> Update </button>
    </div>
  )
}