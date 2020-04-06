import React from 'react'

//create separate component for project details
//include blurb, and technologies used

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      graceShopper: false,
      capstone: false
    }
  }

  render() {
    return (
      <div>
      <p style = {{cursor:'pointer'}} onClick = {() =>this.setState({graceShopper:true})}>
        Made Tiny
        {this.state.graceShopper?
        <div><p>true</p></div>  :
        <div></div>
      }
      </p>
      <p style = {{cursor:'pointer'}} onClick = {() =>this.setState({capstone:true})}>
        [Hop Hop Array]
        {this.state.capstone?
        <div><p>true</p></div>  :
        <div></div>
      }
      </p>
      </div>
    )
  }
}
