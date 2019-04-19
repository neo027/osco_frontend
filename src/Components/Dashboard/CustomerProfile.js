import React, {Component} from 'react';
import {connect} from 'react-redux';

class CustomerProfile extends Component {

	render(){
		return (
			<div className="tab-pane fade" id="tab-2">
                <div className="row">
                    <div className="col-md-12 mx-auto py-0 text-center text-md-left">
		                <h3>User Profile</h3>
		                <div className="row">
			                <div className="col-md-12">
			                  <div className="form-group">
			                    <label>Full Name</label>
			                    <input className="form-control form-control-sm" type="text" value={this.props.user.name} placeholder="First Name" readOnly/>
			                  </div>
			                </div>
			                <div className="col-md-6">
			                  <div className="form-group">
			                    <label>Email ID</label>
			                    <input className="form-control form-control-sm" type="email" value={this.props.user.email} placeholder="Email Address" readOnly/>
			                  </div>
			                </div>
			                <div className="col-md-6">
			                  <div className="form-group">
			                    <label>Mobile Number</label>
			                    <input className="form-control form-control-sm" type="text" value={this.props.user.mobileNumber} placeholder="Mobile Number" readOnly/>
			                  </div>
			                </div>
		            	</div>
		                <div className="mt-3 d-none">
		                	<button className="btn btn-primary px-6">Edit Profile</button>
		                </div>
	              	</div>
	            </div>
        	</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user:state.auth.user
	}
}

export default connect(mapStateToProps)(CustomerProfile);


