import React, { PureComponent } from 'react'
import User from './User';
export default class App1 extends PureComponent {
  constructor()
  {
    super()
    this.state =
    {
      count:1
    }
  }
  render() {
    console.warn("check-rendering");
    return (
      <div>
       
       <User count={this.state.count}/>
       <button onClick={()=>this.setState({count:1+1})}> Update Count </button>

       </div>
    )
  }
}
