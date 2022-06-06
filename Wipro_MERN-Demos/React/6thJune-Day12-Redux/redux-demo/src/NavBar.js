  import React from 'react'
import { useSelector } from 'react-redux'  
  
  export default function NavBar() {
    const amount = useSelector(state => state.amount)
    

    return (
      <div> 

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Home Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">About Us</a>
        </li>
        
      </ul>
      <form className="d-flex">
         <button className="btn btn-primary" type="button">Your Balance : {amount} </button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
  