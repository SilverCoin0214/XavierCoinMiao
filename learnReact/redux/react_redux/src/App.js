import React, { PureComponent } from 'react'
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/Profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Profile />
      </div>
    )
  }
}
