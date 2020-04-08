import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Home from './Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Cv from './Components/Cv'
import ContactForm from './Components/ContactForm.js'

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
          subtitle={<ContactForm/>}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}



export default App;
