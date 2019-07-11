import React, { Component } from "react";

import { isEmpty, isNotEmail } from "../../Utilities";

import { createCustomer } from "../../Api/Customer";
import swal from "sweetalert";

class CreateCustomer extends Component {
	constructor() {
		super();

		this.state = this.getInitialState();
	}

	getInitialState = () => {
		return {
			data: {
				name: "",
				mobileNumber: "",
				email: ""
			},
			isLoading: false,
			error: {}
		};
	};

	handleChange = e => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			},
			error: {
				...this.state.error,
				[e.target.name]: null,
				global: null
			}
		});
	};

	validate = () => {
		let { name, mobileNumber, email } = this.state.data;

		let error = {};

		if (isEmpty(name)) {
			error.name = "*required";
		}
		if (isEmpty(mobileNumber)) {
			error.mobileNumber = "*required";
		}
		if (isNotEmail(email)) {
			error.email = "*required";
		}

		return error;
	};

	handleSubmit = e => {
		e.preventDefault();

		let error = this.validate();

		if (Object.keys(error).length === 0) {
			createCustomer(this.state.data)
				.then(res => {
					this.setState(this.getInitialState());
					swal(
						"Success!",
						"customer created successfully.",
						"success"
					);
				})
				.catch(error => {
					if (error && error.response && error.response.data) {
						this.setState({
							error: { global: error.response.data.message }
						});
					}
				});
		} else {
			this.setState({ error });
		}
	};

	render() {
		let { name, mobileNumber, email } = this.state.data;
		let { error } = this.state;

		return (
			<div className="tab-pane fade show active" id="tab-1">
				<div className="row">
					<form
						onSubmit={this.handleSubmit}
						className="col-md-12 mx-auto py-0 text-center text-md-left"
					>
						<h3>Create Customers</h3>
						<hr />
						{error.global && (
							<div
								className="col-md-12 alert alert-danger"
								role="alert"
							>
								{error.global}
							</div>
						)}
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<label>Name</label>
									<input
										className={
											"form-control form-control-sm" +
											(error.name ? " is-invalid" : "")
										}
										name="name"
										onChange={this.handleChange}
										value={name}
										type="text"
										placeholder="Full Name"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Email ID</label>
									<input
										className={
											"form-control form-control-sm" +
											(error.email ? " is-invalid" : "")
										}
										name="email"
										onChange={this.handleChange}
										value={email}
										type="email"
										placeholder="Email"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Mobile Number</label>
									<input
										className={
											"form-control form-control-sm" +
											(error.mobileNumber
												? " is-invalid"
												: "")
										}
										name="mobileNumber"
										onChange={this.handleChange}
										value={mobileNumber}
										type="text"
										placeholder="Mobile Number"
									/>
								</div>
							</div>
						</div>
						<div className="mt-3">
							<button className="btn btn-primary px-6">
								Create Customer
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateCustomer;
