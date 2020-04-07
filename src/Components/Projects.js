import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';

//create separate component for project details
//include blurb, and technologies used

export default class Projects extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
    )
  }
}
