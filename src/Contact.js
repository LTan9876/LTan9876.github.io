import React, { Component} from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default class Contact extends Component {

  render() {
    return (
      <div>
      <h1 class = "iconHolder">
        <span class = "icon">
       <a href = "https://github.com/LTan9876"> <FaGithubSquare /> </a>
       </span>
       <span class = "icon">
       <a href = "https://www.linkedin.com/in/tlily/"> <FaLinkedin /> </a>
       </span>
      </h1>
      </div>
    )
  }
}
