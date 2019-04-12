import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';

import Landing from './Pages/Landing';
import DistributorList from './Pages/DistributorList';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/distributors" exact component={DistributorList} />
        </Switch>
        <Login />
        <Signup />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
