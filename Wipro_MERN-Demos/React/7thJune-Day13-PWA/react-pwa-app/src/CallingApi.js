import React, {useEffect, useState} from 'react'
 
 export default function CallingApi() {

  const [users, setUsers] = useState([])

    useEffect(function useEffectFunc()
      {
        async function getUsers()
        {
  const response =  await fetch("https://jsonplaceholder.typicode.com/users");
      
     const json =   await response.json();
      // console.log(json)
      setUsers(json);
      console.log(users)
    }
    getUsers();
  },[]
 );

  return (
    <div>  
  <h1> List of Users  </h1>
  {
     users ?
       users.map((item,i)=>
       <p>  {item.id} --- {item.name} </p>
       ) :

  <h2> No users </h2>
  }
    </div>
  )
}
