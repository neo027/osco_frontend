import React, {Component} from 'react';

import {getAllDistributors} from '../../Api/Distributor';

import DistributorCard from '../Cards/Distributor/Card';

class ViewDistributor extends Component {

	constructor(){
		super();
	
		this.state = {
			distributors:[],
			filter:''
		}
	}

	componentDidMount(){
		getAllDistributors()
		.then(({distributors}) => this.setState({distributors}))
		.catch(error => this.setState({error:'something went wrong'}));
	}

	handleCouponAllotment = (distributorId, noOfCoupons) => {
		let distributors = [...this.state.distributors];

		let idx = distributors.findIndex(dist => dist.id === distributorId);

		if(idx > -1){
			distributors[idx].noOfCoupons += noOfCoupons;
		}

		this.setState({distributors});
	}


	render(){
		let distributors = [...this.state.distributors];

		if(this.state.filter && this.state.filter.length >= 3){
			distributors = distributors.filter(value => {
				return value.name.toLowerCase().includes(this.state.filter.toLowerCase())
			});
		}

		return (
			<div className="tab-pane fade" id="tab-2">
	            <div className="row">
	                <div className="col-md-12 mx-auto py-0 text-center text-md-left">
	            		<h3>View Distributors</h3>
			            <div className="col-md-12 col-xl-12 mx-auto mb-5">
			              <div className="input-group input-group-lg">
			                <div className="input-group-prepend">
			                  <span className="input-group-text"><i className="fa fa-search"></i></span>
			                </div>
			                <input type="text" name="filter" onChange={e => this.setState({filter:e.target.value})} className="form-control" placeholder="Search Distributor by name..." />
			              </div>
			            </div>
			            <div className="row">
				            <div className="col-md-12">
				            {
				            	distributors.map(distributor => 
				            		<DistributorCard 
				            			key={JSON.stringify(distributor)}
				            			distributorId={distributor.id}
				            			name={distributor.name} 
				            			mobileNumber={distributor.mobileNumber} 
				            			email={distributor.email}
				            			addressLine1={distributor.UserAddress.addressLine1}
				            			addressLine2={distributor.UserAddress.addressLine2}
				            			city={distributor.UserAddress.city}
				            			state={distributor.UserAddress.state}
				            			pincode={distributor.UserAddress.pincode}
				            			noOfCoupons={distributor.noOfCoupons}
				            			handleCouponAllotment={this.handleCouponAllotment}
				            			logo={distributor.profilePicURL}
				            			/>
				            	)
				            }
				            {
				            	distributors.length === 0 && <div>No distributor to show.</div>
				            }
		          	 		</div>
	            		</div>
	         		</div>
	        	</div>
	      </div>
		);
	}
}

export default ViewDistributor;