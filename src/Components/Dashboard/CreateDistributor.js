import React, {Component} from 'react';
import {isEmpty, isNotEmail} from '../../Utilities';

import {createDistributor} from '../../Api/Distributor';

import swal from 'sweetalert';

class CreateDistributor extends Component {

	constructor(){
		super();
	
		this.state = this.getInitialState()
	}

	getInitialState = () => {
		return {
			data:{
				name:'',
				addressLine1:'',
				addressLine2:'',
				city:'',
				state:'',
				mobileNumber:'',
				pincode:'',
				email:'',
				phone:'',
				gstin:'',
				logo:null,
				website:''
			},
			isLoading:false,
			error:{}
		}
	}

	handleChange = (e) => {
		this.setState({
			data:{
				...this.state.data, 
				[e.target.name]:e.target.value
			}, 
			error:{
				...this.state.error, 
				[e.target.name]:null, 
				global:null
			}
		});
	}

	validate = () => {
		let {name, logo, addressLine1, city, state, mobileNumber, email, pincode} = this.state.data;

		let error = {};

		if(isEmpty(name)){
			error.name = "*required";
		}
		if(isEmpty(addressLine1)){
			error.addressLine1 = "*required";
		}
		if(isEmpty(city)){
			error.city = "*required";
		}
		if(isEmpty(state)){
			error.state = "*required";
		}
		if(isEmpty(mobileNumber)){
			error.mobileNumber = "*required";
		}
		if(isEmpty(pincode)){
			error.pincode = "*required";
		}
		if(logo === null){
			error.logo = "*required";
		}
		if(isNotEmail(email)){
			error.email = "*required";
		}

		return error;
		
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let error = this.validate();

		if(Object.keys(error).length === 0){
			this.setState({isLoading:true});
			const formData = new FormData();

			Object.keys(this.state.data).forEach(key => {
				formData.append(key, this.state.data[key]);
			});

			createDistributor(formData)
			.then(res => {
				this.setState(this.getInitialState());
				swal('Success!', 'distributor created successfully.', 'success');
			})
			.catch(error => {
				if(error && error.response && error.response.data){
					this.setState({error:{global:error.response.data.message}, isLoading:false});
				}
				else {
					this.setState({error:{global:'something went wrong'}, isLoading:false});
				}
			});
		}
		else {
			this.setState({error})
		}
	}

	handleChangeFile = (e) => {
		this.setState({
			data:{
				...this.state.data, 
				logo:e.target.files[0]
			}, 
			error:{
				...this.state.error, 
				logo:null, 
				global:null
			}
		});
	}

	render(){

		let {name, addressLine2, addressLine1, city, state, phone, mobileNumber, email, pincode, gstin, website} = this.state.data;
		let {error, isLoading} = this.state;

		return (
			<div className="tab-pane fade show active" id="tab-1">
		        <div className="row">
		            <div className="col-md-12 mx-auto py-0 text-center text-md-left">
		                <h3>Create Distributors</h3>
		                <hr />
                        <form onSubmit={this.handleSubmit} className="row">
                            <div className="col-md-12">
                              <img className="h-50" src="/img/logo-dark.png" alt="..." />
                            </div>
                            {error.global && <div className="col-md-12 alert alert-danger" role="alert">{error.global}</div>}
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Business Name</label>
                                <input className={"form-control form-control-sm" + (error.name ? " is-invalid" : "")} name="name" onChange={this.handleChange} value={name} type="text" placeholder="Name"/>
                              </div>
                              <div className="form-group">
                                <label>Address Line 1</label>
                                <input className={"form-control form-control-sm" + (error.addressLine1 ? " is-invalid" : "")} type="text" name="addressLine1" onChange={this.handleChange} value={addressLine1} placeholder="Address Line 1"/>
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <input className={"form-control form-control-sm" + (error.city ? " is-invalid" : "")} type="text" name="city" onChange={this.handleChange} value={city} placeholder="City"/>
                              </div>
                              <div className="form-group">
                                <label>Pin Code</label>
                                <input className={"form-control form-control-sm" + (error.pincode ? " is-invalid" : "")} type="text" name="pincode" onChange={this.handleChange} value={pincode} placeholder="Pin Code"/>
                              </div>
                              <div className="form-group">
                                <label>Phone Number (Mobile)</label>
                                <input className={"form-control form-control-sm" + (error.mobileNumber ? " is-invalid" : "")} type="text" name="mobileNumber" onChange={this.handleChange} value={mobileNumber} placeholder="Phone Number (Mobile) 10 digit"/>
                              </div>
                              <div className="form-group">
	                              <label>Logo</label>
	                              <input onClick={e => { e.target.value = null }} className={"form-control form-control-sm p-1" + (error.logo ? " is-invalid" : "")} type="file" name="logo" onChange={this.handleChangeFile} placeholder="Select Logo"/>
	                          </div>
                              <div className="mt-3">
                                <button className="btn btn-primary px-6" disabled={isLoading}>Create Distributor</button>
                              </div>
                            </div>
	                        <div className="col-md-6">
	                          <div className="form-group">
	                            <label>GSTIN</label>
	                            <input className={"form-control form-control-sm"} type="text" name="gstin" onChange={this.handleChange} value={gstin} placeholder="GSTIN"/>
	                          </div>
	                          <div className="form-group">
	                              <label>Address Line 2</label>
	                              <input className="form-control form-control-sm" type="text" name="addressLine2" onChange={this.handleChange} value={addressLine2} placeholder="Address Line 2"/>
	                          </div>
	                          <div className="form-group">
	                              <label>State</label>
	                              <input className={"form-control form-control-sm" + (error.state ? " is-invalid" : "")} type="text" name="state" onChange={this.handleChange} value={state} placeholder="State"/>
	                          </div>
	                          <div className="form-group">
	                              <label>Email ID</label>
	                              <input className={"form-control form-control-sm" + (error.email ? " is-invalid" : "")} type="email" name="email" onChange={this.handleChange} value={email} placeholder="Email ID"/>
	                          </div>
	                          <div className="form-group">
	                              <label>Phone Number (Office)</label>
	                              <input className="form-control form-control-sm" type="text" name="phone" onChange={this.handleChange} value={phone} placeholder="Phone Number (Office) - With Area Code"/>
	                          </div>
	                          <div className="form-group">
	                              <label>Website</label>
	                              <input className="form-control form-control-sm" type="text" name="website" onChange={this.handleChange} value={website} placeholder="Website URL"/>
	                          </div>
		                    </div>
		                </form>
		            </div>
		        </div>
			</div>
		);
	}
}

export default CreateDistributor;