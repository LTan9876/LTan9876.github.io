import React from 'react'
import Pdf from '../resume.pdf'

export default class Cv extends React.Component {

  render() {
    return (
      <div>
        <iframe
        src = {Pdf}
        width = "100%"
        height = "500px"
        ></iframe>
      </div>
    )
  }
}
