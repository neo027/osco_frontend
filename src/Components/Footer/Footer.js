import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { openLoginModal, openSignupModal } from "../../Actions/Auth";

class Footer extends Component {
	handleShowLogin = () => {
		if (!this.props.isLoggedIn) {
			this.props.showLogin();
		}
	};

	handleShowSignup = () => {
		if (!this.props.isLoggedIn) {
			this.props.showSignup();
		}
	};

	render() {
		return (
			<footer className="footer bg-gray py-7">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<p>
								<Link to="/">
									<img src="/img/logo-dark.png" alt="logo" />
								</Link>
							</p>
						</div>
						<div className="col-xl-5">
							<p>
								Welcome to the Osco Jewells, where we present a
								collection of the best jewellery in exquisite
								designs.
							</p>
							<div className="social social-sm social-bg-brand social-cycling mt-6">
								{" "}
								<a className="social-facebook" href="#fb">
									<i className="fa fa-facebook" />
								</a>{" "}
								<a className="social-twitter" href="#twitter">
									<i className="fa fa-twitter" />
								</a>{" "}
								<a className="social-youtube" href="#youtube">
									<i className="fa fa-youtube" />
								</a>{" "}
								<a
									className="social-instagram"
									href="#instagram"
								>
									<i className="fa fa-instagram" />
								</a>
							</div>
							<hr className="d-xl-none" />
						</div>
						<div className="col-4 col-xl-2 offset-xl-1">
							<div className="nav flex-column">
								{" "}
								<Link className="nav-link" to="/profile">
									Home
								</Link>{" "}
								<Link className="nav-link" to="/about">
									About Us
								</Link>{" "}
								<Link className="nav-link" to="/distributors">
									Distributor List
								</Link>
							</div>
						</div>
						<div className="col-4 col-xl-2">
							<div className="nav flex-column">
								{" "}
								<Link className="nav-link" to="/contact-us">
									Contact Us
								</Link>{" "}
								<div
									onClick={this.handleShowLogin}
									style={{ cursor: "pointer" }}
									className="nav-link"
								>
									Log-in
								</div>{" "}
								<div
									style={{ cursor: "pointer" }}
									onClick={this.handleShowSignup}
									className="nav-link"
								>
									Sign-up
								</div>
							</div>
						</div>
						<div className="col-4 col-xl-2">
							<div className="nav flex-column">
								{" "}
								<a className="nav-link" href="#ios">
									iOS App Download
								</a>{" "}
								<a className="nav-link" href="#android">
									Android App Download
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
};

const mapDispatchToProps = {
	showLogin: openLoginModal,
	showSignup: openSignupModal
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);
