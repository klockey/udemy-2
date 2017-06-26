import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hashHistory, IndexRoute } from 'react-router'
import Main from './Main'
import Nav from './Nav'
import Weather from './Weather'
import About from './About'
import Examples from './Examples'

class App extends Component {
  render () {
    return <div>
      <Router>
        <Main>
          <Switch>
            {/* <Route exact path='/' component={Main} /> */}
            <Route exact path='/' component={Weather} />
            <Route path='/about' component={About} />
            <Route path='/examples' component={Examples} />
          </Switch>
        </Main>
      </Router>
    </div>
  }
}

export default App
