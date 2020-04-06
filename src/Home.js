import React from 'react'
import { render } from 'react-dom'
import Typed from 'react-typed'



export default class Home extends React.Component {
  render() {
    return (
      <div class = "typed">
        <Typed
        strings = {[
          "Hi, I'm Lily! Welcome to my site!"
        ]}
        typeSpeed = {40}
        backSpeed = {50}
        loop
        ></Typed>
      </div>
    )
  }
}

render(
  <Home/>,
  document.getElementById('root')
)



