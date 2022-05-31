import React, { PureComponent } from 'react'

export default class User extends PureComponent {
  
  render() {
    console.warn("check-rendering");
    return (
      <div>
        <h1> User Component in React : 
          {this.props.count} </h1>
      </div>
    )
  }
}
