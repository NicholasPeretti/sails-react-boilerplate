import React from 'react'
import ReactDom from 'react-dom'
import '../styles/style.scss'
import App from './App'

const render = (Component) => (
  ReactDom.render(<Component/>, document.getElementById('root'))
)
render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) });
}
