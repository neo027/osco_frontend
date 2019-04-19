import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Protected from './Components/Routes/Protected';

import Landing from './Pages/Landing';
import DistributorList from './Pages/DistributorList';
import Dashboard from './Pages/Dashboard';
import GetCoupon from './Pages/GetCoupon';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

// bootstrap imports
import 'bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/distributors" exact component={DistributorList} />
          <Route path="/buycoupon" exact component={GetCoupon} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Protected path="/profile" isLoggedIn={this.props.isLoggedIn} exact component={Dashboard} />
        </Switch>
        <Login />
        <Signup />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);


