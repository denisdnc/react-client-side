import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {

  getMessage() {
    return 'Olar!'
  }

  render() {
    return <div>{this.getMessage()}</div>
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
