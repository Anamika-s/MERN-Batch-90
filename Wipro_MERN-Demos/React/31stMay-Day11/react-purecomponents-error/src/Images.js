import React, { Component } from 'react'

export default class Images extends Component {
  render() {
    if(this.props.name==="noimage")
    {
      throw new Error("There is no image")
    }
    return (
      <div> 
        
        <h1> Images </h1> 
        <img src={this.props.name}/>
        </div>
    )
  }
}
