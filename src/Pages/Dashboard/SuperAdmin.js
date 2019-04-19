import React, {Component} from 'react';

import ViewDistributor from '../../Components/Dashboard/ViewDistributor';
import CreateDistributor from '../../Components/Dashboard/CreateDistributor';
import AdminProfile from '../../Components/Dashboard/AdminProfile';


class SuperAdmin extends Component {
	
	render(){
		return (
			<main className="main-content">
		        <section className="section bg-gray" id="features">
		            <div className="container">
		                <div className="row gap-y">
			                <div className="col-md-4">
			                    <ul className="nav nav-tabs-shadow nav-tabs-border">
			                        <li className="nav-item">
			                          <a className="nav-link active" data-toggle="tab" href="#tab-1">
			                            <h6 className="fw-700">Create Distrubutor</h6>
			                            <p className="small mb-0">Create distributor accounts </p>
			                          </a>
			                        </li>
			                        <li className="nav-item">
			                          <a className="nav-link" data-toggle="tab" href="#tab-2">
			                            <h6 className="fw-700">View Distributors</h6>
			                            <p className="small mb-0">View and edit your distributor information </p>
			                          </a>
			                        </li>
			                        <li className="nav-item">
			                          <a className="nav-link" data-toggle="tab" href="#tab-3">
			                            <h6 className="fw-700">Admin Profile</h6>
			                            <p className="small mb-0">View your profile </p>
			                          </a>
			                        </li>
			                    </ul>
			                </div>
			                <div className="col-md-8 ml-auto align-self-center">
			                  <div className="tab-content text-center">
			                  	<ViewDistributor />
			                  	<CreateDistributor />
			                  	<AdminProfile />
			                  </div>
			                </div>
		                </div>
		            </div>
		        </section>
		    </main>
		);
	}
}

export default SuperAdmin;