import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/Navigation/AppBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AddJob from './components/Forms/AddJob';
import AddPwid from './components/Forms/AddPwid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
      <BrowserRouter>
        <Switch>
          <Route path="/addjob" component={AddJob} />
          <Route path="/addpwid" component={AddPwid} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
