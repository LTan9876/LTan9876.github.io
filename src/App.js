import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Cv from './Cv'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          id="section1"
          subtitle = {<Home/>}
        />

        <Section
          title="About"
          subtitle={<About/>}
          id="section2"
        />
        <Section
          title="Projects"
          subtitle={<Projects/>}
          dark={false}
          id="section3"
        />
        <Section
          title="CV"
          subtitle={<Cv />}
          dark={false}
          id="section4"
        />
        <Section
          title="Contact"
          subtitle={<Contact/>}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}



export default App;
