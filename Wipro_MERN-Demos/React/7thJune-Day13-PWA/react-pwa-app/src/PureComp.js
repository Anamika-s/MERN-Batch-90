import React, { PureComponent } from 'react'
export default class PureComp extends PureComponent {
  constructor(props)
  {
    super(props)
    this.state=
    {
      name:'hello',
      no:1
    }
  }
  updateData()
  {
    this.setState({name:'bye'})
    // this.setState({no:this.state.no+1})
    // console.log(this.state.no)
  }
 
  render() {
    console.log("method is called")
    return (
      <div>PureComp 
        <p><button onClick={() =>this.updateData()}> Update  </button></p>
        <p><button onClick={() =>this.updateData()}> Update No 
        </button></p>

      </div>
    )
  }
}
 