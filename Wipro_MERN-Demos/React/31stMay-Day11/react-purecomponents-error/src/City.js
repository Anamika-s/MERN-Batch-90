function ErrorHandler(props)
{
  return(
        <div>
          <p> An error occured</p>
          <h2> {props.error.message} </h2> 
        </div>
  )
}
function City(props)
{
  try
  {
 return <div> Hello {props.name.toUpperCase()}
 </div>
 }
 catch(error)
 { 
  return <ErrorHandler error={error}/>
 }
}

export default City;

