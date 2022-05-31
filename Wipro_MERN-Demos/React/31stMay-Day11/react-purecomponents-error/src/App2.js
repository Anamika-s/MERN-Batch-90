import {useState, useMemo} from "react";

export default function App2()
{
const [count, setCount] =  useState(1)
const [item, setItem] = useState(10);
const multiplyCountMemo = useMemo(function Multiply()
{
    console.warn("Within Mutiply");
    return count * 5;
},[count])

return (
    <>
      <h1> Pure Component </h1>
      <h2> Count  : {count} </h2>
      <h3> Product : {item} </h3>
      {multiplyCOuntMemo}
<button onClick={()=>setCount(count+1)}> Update Count </button>
<button onClick={()=>setItem(count*10)}> Update Count </button>


    </>
  )
}