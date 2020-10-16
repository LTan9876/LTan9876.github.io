import React from 'react'
import Pdf from './resume2.pdf'

export default class Cv extends React.Component {

  render() {
    return (
      <div>
        <iframe
        title = 'Lily Tan Resume'
        src = {Pdf}
        width = "100%"
        height = "500px"
        ></iframe>
      </div>
    )
  }
}
