const init =0;
const reducer = (state=init, action)=>
{
  console.log("TYPE IS "  + action.type)
  if(action.type==='deposit')
  {
    console.log("D" + state) 
    return state + action.payload;
    
  }
  else if(action.type==='withdraw')
  {
    console.log("W" + state)
    return state - action.payload;
  
  }
  else 
  {
    console.warn("E" + state)
  
  return state;
  }
}

export  default reducer;