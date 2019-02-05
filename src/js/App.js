import React from 'react'
import ReactIcon from '../images/react-icon.png'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <img src={ReactIcon} className="spin" style={{width: '500px'}}/>
        <h1>Let's build something amaizing</h1>
        <p>Edit the <code>src/index.js</code> file to see the changes</p>
      </div>
    )
  }
}

export default App
