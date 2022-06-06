import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './actions/index';
import { useSelector } from 'react-redux'  

const Shop = ()=>{

 const amount = useSelector(state=> state.amount)
  const dispatch = useDispatch();
const {deposit, withdraw} = bindActionCreators(actionCreators,dispatch);

  return(
    <div> 
      <h1> Deposit / Withdraw Money </h1><button className='btn btn-primary'
    onClick={()=>deposit(100)}>  +  </button>
    
    Actual Amount is :   {amount}
    <button onClick={()=>{dispatch(actionCreators.withdraw(100))}}  className='btn btn-primary'>   - </button></div>
  )
}
   
export default Shop;