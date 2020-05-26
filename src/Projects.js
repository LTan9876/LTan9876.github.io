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
      <div class = 'cardHolder'>
      <div class = 'card'>
        <h1>[Hop Hop] Array</h1>
        <p>An approachable platform where users can practice algorithms.</p>
        <p>Made with Javascript, React, Redux, Docker, Express, Postgres</p>
        <div class = 'buttonHolder'>
        <p><a href = "https://github.com/hophoparray/hop_hop_array">Github</a></p>
      <p><a href = "https://www.hophoparray.com">Deployed Site</a></p>
      </div>
      </div>

      <div class = 'card'>
      <h1>Made Tiny</h1>
      <p>A mock e-commerce site used to sell tiny houses.</p>
      <p>Made with Javascript, React, Redux, Express, Postgres
      </p>
      <div class = 'buttonHolder'>
      <p><a href = "https://github.com/1911-grace-shopper/grace-shopper">Github</a></p>
      <p><a href = "https://madetiny.herokuapp.com">Deployed Site</a></p>
      </div>
    </div>

    <div class = 'card'>
      <h1>Mafia</h1>
      <p>An online version of the game Mafia.</p>
      <p>Made with Javascript, React, Redux, Express, Postgres

      </p>
      <div class = 'buttonHolder'>
      <p><a href = "https://github.com/LTan9876/mafia">Github</a></p>
      <p><a href = " ">Not Deployed</a></p>
      </div>
    </div>
    </div>

    )
  }
}
