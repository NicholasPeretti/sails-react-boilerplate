import React from 'react'
import ReactIcon from '../images/react-icon.png'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <img src={ReactIcon} className="spin" style={{width: '500px'}}/>
        <h1>Let's build something amazing!</h1>
        <p>Edit <code>src/index.jsx</code> to see changes on this page.</p>
      </div>
    )
  }
}

export default App
