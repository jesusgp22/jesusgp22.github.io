import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/blog'>blog</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* both /roster and /roster/:number begin with /roster */}
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
