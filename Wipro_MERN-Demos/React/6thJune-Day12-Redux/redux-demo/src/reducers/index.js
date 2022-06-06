import {combineReducers} from 'redux';

import  amountReducer from './amountReducers';

const reducers = combineReducers(
  
  {
    amount:amountReducer
  }
)

export default reducers;