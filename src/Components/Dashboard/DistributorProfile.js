import React, {Component} from 'react';


class DistributorProfile extends Component {

	render(){
		return (
			<div className="tab-pane fade" id="tab-4">
              	<div className="row">
                  	<div className="col-md-12 mx-auto py-0 text-center text-md-left">
              			<h3>Distributor Profile</h3><hr/>
		              	<div className="row">
		                  <div className="col-md-12">
		                      <img className="h-50" src="/img/logo-dark.png" alt="..." />
		                    </div>
		                  <div className="col-md-6">
		                    <div className="form-group">
		                      <label>Business Name</label>
		                      <input className="form-control form-control-sm" type="text" placeholder="First Name" readonly />
		                    </div>
		                    <div className="form-group">
		                      <label>Email ID</label>
		                      <input className="form-control form-control-sm" type="text" placeholder="Email ID" readonly />
		                    </div>
		                    <div className="form-group">
		                      <label>Password</label>
		                      <input className="form-control form-control-sm" type="text" placeholder="******" readonly />
		                    </div>
		                    <div className="mt-3">
		                        <a className="btn btn-primary px-6" href="#">Edit Profile</a>
		                        </div>
		                  </div>
		                  <div className="col-md-6">
		                    <div className="form-group">
		                      <label>GSTIN</label>
		                      <input className="form-control form-control-sm" type="text" placeholder="Last Name" readonly />
		                    </div>
		                    <div className="form-group">
		                      <label>Mobile Number</label>
		                      <input className="form-control form-control-sm" type="text" placeholder="Mobile Number" readonly />
		                    </div>
		                  </div>
		                </div>
		            </div>
              	</div>
            </div>
		);
	}
}

export default DistributorProfile;