import React from 'react'
import ReactDom from 'react-dom'
import ReactIcon from '../images/react-icon.png'
import '../styles/style.scss'

class App extends React.Component {
  render () {
    return (
      <div class="container">
        <img src={ReactIcon} className="spin" style={{width: '500px'}}/>
        <h1>Let's build something amaizing</h1>
        <p>Edit the <code>src/index.js</code> file to see the changes</p>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
