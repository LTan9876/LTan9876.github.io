import React from 'react';
import axios from 'axios';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default class ContactForm extends React.Component{
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit (e)  {
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3000/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.setState({name: "", email: "", message: ""})
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
    }

    onEmailChange(event) {
    this.setState({email: event.target.value})
    }

    onMessageChange(event) {
    this.setState({message: event.target.value})
    }

  render() {
	return(
  	<div className="App">
      <h1>
        <span >
        <a href = "https://github.com/LTan9876"> <FaGithubSquare /> </a>
       <a href = "https://www.linkedin.com/in/tlily/"> <FaLinkedin /> </a>
       </span>
      </h1>
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	<div className="form-group">
      	<label htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message">Message</label>
      	<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary">Submit</button>
  	</form>
  	</div>
	);
  }
}

