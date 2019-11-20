import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Error from './components/Error';
import Navigation from './components/Navigation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/About' component={About} />
            <Route path='/Blog' component={Blog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
