import React, { Component} from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
// import ContactForm from './ContactForm'

export default class Contact extends Component {
  render() {
    return (
      <div>
      <h1>
        <span >
       <a href = "https://github.com/LTan9876"> <FaGithubSquare /> </a>
       </span>
       <span>
       <a href = "https://www.linkedin.com/in/tlily/"> <FaLinkedin /> </a>
       </span>
      </h1>
      {/* <ContactForm/> */}
      </div>
    )
  }
}
