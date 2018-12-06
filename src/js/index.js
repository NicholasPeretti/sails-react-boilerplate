import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <h1>Let's build something amaizing</h1>
        <p>Edit the <code>src/index.js</code> file to see the changes</p>
      </Fragment>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
