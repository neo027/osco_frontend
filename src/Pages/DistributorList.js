import React, {Component} from 'react';

import DistributorCard from '../Components/Cards/Distributor';

import {getAllDistributors} from '../Api/Distributor';

class DistributorList extends Component {

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

	render(){

		let distributors = [...this.state.distributors];

		if(this.state.filter && this.state.filter.length >= 3){
			distributors = distributors.filter(value => {
				return (
					value.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
					value.UserAddress.city.toLowerCase().includes(this.state.filter.toLowerCase()) ||
					value.UserAddress.state.toLowerCase().includes(this.state.filter.toLowerCase())
				);
			});
		}
		
		return (
			<React.Fragment>	    
			    <header className="header p-0 text-white">
			        <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/Dimonds-4.webm" type="video/webm" />
			          <source src="/img/video/Dimonds-4.mp4" type="video/mp4" />
			        </video>
			      <div className="container">
			        <h1 className="display-4 mt-10">Distributors</h1>
			        <p className="lead-2 mt-6">Find a Distributor near you.</p>
			        <div className="row mt-6 mb-6">
			          <div className="col-md-8 col-xl-6 input-glass input-round mx-auto">
			            <div className="input-group input-group-lg bg primary">
			              <div className="input-group-prepend">
			                <span className="input-group-text"><i className="fa fa-search"></i></span>
			              </div>
			              <input type="text" name="filter" onChange={e => this.setState({filter:e.target.value})} className="form-control" placeholder="Search by Name, City, State..." />
			            </div>
			          </div>
			        </div>
			      </div>
			    </header>

			    <main className="main-content">
			      <section className="section bg-gray">
			        <div className="container">
			            {
			            	distributors && distributors.map(distributor => 
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
			            			website={distributor.UserAddress.website}
			            			logo={distributor.profilePicURL}
			            			/>
			            	)
			            }
			            {
			            	distributors && distributors.length === 0 && <div>No distributor to show.</div>
			            }
			        </div>
			      </section>
			    </main>
			</React.Fragment>
		);
	}
}

export default DistributorList;