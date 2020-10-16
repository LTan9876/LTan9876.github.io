import React from 'react'
import image from './profilepic.png'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <img src = {image} alt = 'profilepic' class = 'profile'></img>
      <p>
        Hi!  My name is Lily and I'm from Brooklyn, New York.  I studied biology in college at Stony Brook University because I was always curious about how things worked.  That curiousity didn't go away after college, and during my time at a real estate startup, I wanted to know in more detail what it meant to create software. I joined Grace Hopper Academy, an immersive 17 week long coding program.
      </p>
      <p>
        At Grace Hopper I learned Javascript and computer science fundamentals;  I put what I learned into practice by building out the front and back end of my projects.  Even after graduating, I realize there is still so much new technology to learn!  I'm currently learning the ins and outs of React Native.
      </p>
      <p>
        In my spare time I like to read, and listen to podcasts. I'm currently reading IQ84 by Haruku Murakami, and listening to The Left Right Game.
      </p>
      </div>
    )
  }
}
