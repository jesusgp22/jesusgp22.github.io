import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={() => "portfolio"} />
            <Route path='/blog' component={() => "blog"} />
            <Route path='/posts/:id' component={({ match }) => "post id: " + match.params.id} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
