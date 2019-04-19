import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {openLoginModal, openSignupModal, userLoggedOut} from '../../Actions/Auth';
import {removeToken} from '../../Utilities';

import $ from 'jquery';

class Nav extends Component {

	state = {
		navBarOpen:false
	}

	handleLogout = () => {
		removeToken();
		this.props.onLogOut();
	}

	componentDidMount(){
		$(window).scroll(() => {
			let nav = $('.navbar');
			let header = $('.header');
			let navbarHeight = nav.outerHeight(),
	      		headerHeight = header.innerHeight();
			let window_top = $(window).scrollTop();
			let body = $('body');

		    if (window_top > 1) {
		      body.addClass('body-scrolled');
		    }
		    else {
		      body.removeClass('body-scrolled');
		    }

		    if (window_top > navbarHeight) {
		      body.addClass('navbar-scrolled');
		    }
		    else {
		      body.removeClass('navbar-scrolled');
		    }

		    if (window_top > headerHeight - navbarHeight - 1) {
		      body.addClass('header-scrolled');
		      nav.addClass('stick');
		    }
		    else {
		      body.removeClass('header-scrolled');
		      nav.removeClass('stick');
		    }

		});
	}

	toggleNavBar = (e) => {
		e.stopPropagation();
		this.setState({navBarOpen:!this.state.navBarOpen});
		$('body').toggleClass('navbar-open');
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
			  {this.state.navBarOpen && <div onClick={this.toggleNavBar} className="backdrop backdrop-navbar"></div>}
	          <div className="container">
	            <div className="navbar-left mr-4"> <button onClick={this.toggleNavBar} className="navbar-toggler" type="button">&#9776;</button> <Link className="navbar-brand" to="/"> <img className="logo-dark" src="/img/logo-dark.png" alt="logo" /> <img className="logo-light" src="/img/logo-light.png" alt="logo" /> </Link></div>
	            <section className="navbar-mobile">
	              <span className="navbar-divider d-mobile-none"></span>
	              <nav className="nav nav-navbar mr-auto"> <Link className="nav-link" to="/about">About Us</Link> {(this.props.user.role !== 'super' || this.props.user.role !== 'distributor') && <Link className="nav-link" to="/buycoupon">Get Coupons</Link>} <Link className="nav-link" to="/distributors">Distributor List</Link> </nav>
	              { !this.props.isLoggedIn && <div> <div onClick={this.props.showLogin} className="btn btn-sm btn-light ml-lg-5 mr-2">Login</div> <div onClick={this.props.showSignup} className="btn btn-sm btn-success">Sign up</div></div> }
	              { this.props.isLoggedIn && <nav className="nav nav-navbar mr-auto"> <Link className="nav-link" to="/profile">profile</Link> </nav>}
	              { this.props.isLoggedIn && <div onClick={this.handleLogout} className="btn btn-sm btn-light ml-lg-5 mr-2">Logout</div>}
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
	showSignup:openSignupModal,
	onLogOut:userLoggedOut
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);