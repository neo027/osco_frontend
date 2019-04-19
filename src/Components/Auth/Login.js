import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import {closeLoginModal, openSignupModal, userLoggedIn} from '../../Actions/Auth';
import {doLogin} from '../../Api/Auth';

import OTPVerify from './OTPVerify';

import {saveToken} from '../../Utilities';



class Login extends Component {

	constructor(){
		super();
	
		this.state = this.getInitialState()
	}

	getInitialState = () => {
		return {
			data:{
				username:'',
				password:''
			},
			isOTPSent:false,
			otpData:{
				mobileNumber:null,
				otp:''
			},
			error:{}
		};
	}


	handleChange = (e) => {
		this.setState({data:{...this.state.data, [e.target.name]:e.target.value}, error:{...this.state.error, [e.target.name]:null, global:null}});
	}


	handleSubmit = (e) => {
		e.preventDefault();

		doLogin(this.state.data)
		.then(res => {
			if(res.otp){
				this.setState({otpData:{...this.state.otpData, mobileNumber:res.mobileNumber}, isOTPSent:res.otp});
			}
			else {
				this.onUserLoggedIn(res);
			}
		})
		.catch(error => {
			if(error.response && error.response.status === 401){
				this.setState({error:{global:'invalid credentials', status:401}});
			}
			else if(error.response && error.response.status){
				this.setState({error:{global:error.response.data.message, status:error.response.status}});
			}
			else {
				this.setState({error:{global:'something went wrong', status:500}});
			}
		});
	}

	handleOTPChange = (value) => {
		this.setState({otpData:{...this.state.otpData, otp:value}, error:{...this.state.error, otp:null}});
	}

	onUserLoggedIn = (response) => {
		this.setState(this.getInitialState());
		saveToken(response.token);
		this.props.userLoggedIn(response.user);
	}

	render(){
		let loginForm = (
			<form onSubmit={this.handleSubmit} className="py-7">
              <h4 className="fw-200 text-center">Login</h4>
              <p className="text-center">Sign into your account using your credentials.</p>
              { this.state.error && this.state.error.global ? <div className="alert alert-danger" role="alert">{this.state.error.global}</div> : <hr className="w-25" /> }
              <div className="form-group"> 
              	<input className="form-control" type="text" onChange={this.handleChange} value={this.state.data.username} name="username" placeholder="Email Address" />
              </div>
              <div className="form-group">
              	<input className="form-control" type="password" onChange={this.handleChange} value={this.state.data.password} name="password" placeholder="Password" />
              </div>
              <div className="row align-items-center pt-3 pb-5">
                <div className="col text-right">
                  <p className="mb-0 fw-300"><div style={{cursor:'pointer'}} className="text-muted small-2">Forgot password?</div></p>
                </div>
              </div>
              <button className="btn btn-lg btn-block btn-primary" type="submit">Login</button>
              <p onClick={this.props.openSignup} className="small-2 text-center mt-5 mb-0">Don't have an account? <a href="#signup">Create one</a></p>
            </form>
		);

		let loginModal = (
			<React.Fragment>
				<div onClick={this.props.close} className="modal-open">
					<div className="modal fade show" id="modal-login-3" style={{display:'block'}} tabIndex="-1" role="dialog">
				      <div className="modal-dialog modal-lg" role="document">
				        <div onClick={e => e.stopPropagation()} className="modal-content">
				          <div className="modal-body p-md-0">
				            <div className="row no-gutters">
				              <div className="col-md-4 col-xl-6 d-none d-md-flex bg-img rounded-left" style={{backgroundImage: `url(/img/login1.jpg)`}}></div>
				              <div className="col-md-8 col-xl-5 mx-auto">
				              { !this.state.isOTPSent ? loginForm : 
					              	<OTPVerify 
					              		otp={this.state.otpData.otp} 
					              		mobileNumber={this.state.otpData.mobileNumber}
					              		onOTPVerified={this.onUserLoggedIn} 
					              		onChange={this.handleOTPChange} 
					              		error={this.state.error.otp} />
				              	}
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
				<div className="modal-backdrop fade show"></div>
			</React.Fragment>
		);

		if(this.props.show)
			return ReactDOM.createPortal(loginModal, document.getElementById('modal-root'));
		else 
			return null;
	}
}

const mapStateToProps = (state) => {
	return {
		show:state.auth.showLogin
	}
}

const mapDispatchToProps = {
	close:closeLoginModal,
	openSignup:openSignupModal,
	userLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



