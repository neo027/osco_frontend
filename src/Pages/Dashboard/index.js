import React, {Component} from 'react';
import {connect} from 'react-redux';

import Customer from './Customer';
import SuperAdmin from './SuperAdmin';
import Distributor from './Distributor';

class DashBoard extends Component {

	render(){
		return (
			<React.Fragment>
				<header className="header p-0 text-white">
			        <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/Dimonds-4.webm" type="video/webm" />
			          <source src="/img/video/Dimonds-4.mp4" type="video/mp4" />
			        </video>
			      <div className="container">
			        <h1 className="display-4 mt-10">Welcome, {this.props.user.name}</h1>
			        <p className="lead-2 mt-6">{this.props.user.role === 'super' ? 'Super Admin Panel' : this.props.user.role === 'distributor' ? 'Distributor Panel' : 'Check how many coupons you have' }</p>
			        <div className="row mt-6 mb-6">
			          
			        </div>
			      </div>
			    </header>
			    {
			    	this.props.user.role === 'customer' ? 
			    		<Customer /> : 
			    	this.props.user.role === 'distributor' ? 
			    		<Distributor /> : 
			    	this.props.user.role === 'super' ? 
			    		<SuperAdmin /> : 'Something went wrong'
			    }
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		user:state.auth.user
	}
}

export default connect(mapStateToProps)(DashBoard);


