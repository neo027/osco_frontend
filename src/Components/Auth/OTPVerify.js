import React, {Component} from 'react';


import {resendOTP, verifyOTP} from '../../Api/Auth';


class OTPVerify extends Component {

	constructor(){
		super();
	
		this.state = {
			timer:60,
			error:{}
		}
	}

	componentDidMount(){
		this.otpTimer = setInterval(
	      () => {
	      	if(this.state.timer === 0){
	      		clearInterval(this.otpTimer);
	      	}
	      	else {
	      		this.setState({timer: this.state.timer - 1});
	      	}
	      },
	      1000
	    );
	}

	componentWillUnmount(){
		clearInterval(this.otpTimer);
	}

	handleResendOTP = () => {
		if(this.state.timer === 0){
			resendOTP(this.props.mobileNumber)
			.then(data => {
				if(data.otp) {
					this.setState({timer:60});
				}
				else {
					this.setState({error:'could not send otp'});
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
	}

	onSubmitOTP = (e) => {
		e.preventDefault();

		let {otp, mobileNumber} = this.props;

		verifyOTP({otp, mobileNumber})
		.then(this.props.onOTPVerified)
		.catch(error => {
			if(error.response && error.response.status === 401){
				this.setState({error:{global:'Invalid OTP', status:401}});
			}
			else if(error.response && error.response.status){
				this.setState({error:{global:error.response.data.message, status:error.response.status}});
			}
			else {
				this.setState({error:{global:'something went wrong', status:500}});
			}
		});
	}

	render(){
		return (
			<form onSubmit={this.onSubmitOTP} className="py-7">
			  <h4 className="text-center">Verify OTP</h4>
			  { !this.state.error && !this.state.error.global && <p className="text-success text-center">OTP sent successfully.</p> }
			  { this.state.error && this.state.error.global ? <div className="alert alert-danger" role="alert">{this.state.error.global}</div> : <hr className="w-10" /> }
			  <div className="form-group">
			  	<input onChange={(e) => this.props.onChange(e.target.value)} className={"form-control" + (this.props.error ? " is-invalid" : "")} type="number" name="otp" value={this.props.otp} placeholder="6 digit OTP" />
			  	<div className="invalid-feedback">{this.props.error}</div>
			  </div>
			  <div className="row align-items-center pt-3 pb-5">
                <div className="col text-center">
                  <p className="mb-0 fw-300"><div onClick={this.handleResendOTP} style={{cursor:'pointer'}} className={ "" + (this.state.timer === 0 ? "text-success" : "text-danger" )}>resend otp {this.state.timer !== 0 && `(wait ${this.state.timer} sec)`}</div></p>
                </div>
              </div>
			  <button onClick={this.onSubmitOTP} className="btn btn-lg btn-block btn-primary">Verify</button>
			</form>
		);
	}
}

export default OTPVerify;