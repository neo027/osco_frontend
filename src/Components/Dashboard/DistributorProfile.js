import React, { Component } from "react";
import { connect } from "react-redux";

class DistributorProfile extends Component {
	render() {
		return (
			<div className="tab-pane fade" id="tab-4">
				<div className="row">
					<div className="col-md-12 mx-auto py-0 text-center text-md-left">
						<h3>Distributor Profile</h3>
						<hr />
						<div className="row">
							<div className="col-md-12">
								<img
									className="h-50"
									src="/img/logo-dark.png"
									alt="..."
								/>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Business Name</label>
									<input
										className="form-control form-control-sm"
										type="text"
										placeholder="First Name"
										value={this.props.user.name}
										readonly
									/>
								</div>
								<div className="form-group">
									<label>Email ID</label>
									<input
										className="form-control form-control-sm"
										type="text"
										placeholder="Email ID"
										value={this.props.user.email}
										readonly
									/>
								</div>
								<div className="mt-3">
									<button className="btn btn-primary px-6">
										Edit Profile
									</button>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>GSTIN</label>
									<input
										className="form-control form-control-sm"
										type="text"
										placeholder="GSTIN"
										value={this.props.user.gstin}
										readonly
									/>
								</div>
								<div className="form-group">
									<label>Mobile Number</label>
									<input
										className="form-control form-control-sm"
										type="text"
										placeholder="Mobile Number"
										value={this.props.user.mobileNumber}
										readonly
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(DistributorProfile);
