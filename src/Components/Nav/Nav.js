import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {openLoginModal, openSignupModal} from '../../Actions/Auth';



class Nav extends Component {

	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
	          <div className="container">
	            <div className="navbar-left mr-4"> <button className="navbar-toggler" type="button">&#9776;</button> <Link className="navbar-brand" to="/"> <img className="logo-dark" src="/img/logo-dark.png" alt="logo" /> <img className="logo-light" src="/img/logo-light.png" alt="logo" /> </Link></div>
	            <section className="navbar-mobile">
	              <span className="navbar-divider d-mobile-none"></span>
	              <nav className="nav nav-navbar mr-auto"> <a className="nav-link" href="#about-us">About Us</a> <a className="nav-link" href="#get-coupon">Get Coupons</a> <Link className="nav-link" to="/distributors">Distributor List</Link> </nav>
	              { !this.props.isLoggedIn && <div> <div onClick={this.props.showLogin} className="btn btn-sm btn-light ml-lg-5 mr-2">Login</div> <div onClick={this.props.showSignup} className="btn btn-sm btn-success">Sign up</div></div> }
	              { this.props.isLoggedIn && <nav className="nav nav-navbar mr-auto"> <Link className="nav-link" to="/">Hello {this.props.user.name.split(' ')[0]}</Link> </nav>}
	            </section>
	          </div>
	        </nav>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		user:state.auth.user
	}
}

const mapDispatchToProps = {
	showLogin:openLoginModal,
	showSignup:openSignupModal
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);