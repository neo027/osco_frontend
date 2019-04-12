import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {

	render(){
		return (
			<footer className="footer bg-gray py-7">
		      <div className="container">
		        <div className="row">
		          <div className="col-12">
		            <p><Link to="/"><img src="/img/logo-dark.png" alt="logo" /></Link></p>
		          </div>
		          <div className="col-xl-5">
		            <p>Welcome to the Osco Jewels, where we present a collection of the best jewellery in exquisite designs.</p>
		            <div className="social social-sm social-bg-brand social-cycling mt-6"> <a className="social-facebook" href="#fb"><i className="fa fa-facebook"></i></a> <a className="social-twitter" href="#twitter"><i className="fa fa-twitter"></i></a> <a className="social-youtube" href="#youtube"><i className="fa fa-youtube"></i></a> <a className="social-instagram" href="#instagram"><i className="fa fa-instagram"></i></a></div>
		            <hr className="d-xl-none" />
		          </div>
		          <div className="col-4 col-xl-2 offset-xl-1">
		            <div className="nav flex-column"> <a className="nav-link" href="#home">Home</a> <a className="nav-link" href="#about">About Us</a> <Link className="nav-link" to="/distributors">Distributor List</Link></div>
		          </div>
		          <div className="col-4 col-xl-2">
		            <div className="nav flex-column"> <a className="nav-link" href="#contact-us">Contact Us</a> <div className="nav-link">Log-in</div> <div className="nav-link">Sign-up</div></div>
		          </div>
		          <div className="col-4 col-xl-2">
		            <div className="nav flex-column"> <a className="nav-link" href="#ios">iOS App Download</a> <a className="nav-link" href="#android">Android App Download</a></div>
		          </div>
		        </div>
		      </div>
		    </footer>
		);
	}
}

export default Footer;