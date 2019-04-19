import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CouponsDashboard from '../../Components/Dashboard/CouponsDashboard';
import CustomerProfile from '../../Components/Dashboard/CustomerProfile';

import $ from 'jquery';


class Customer extends Component {

	componentDidMount(){
		let query = new URLSearchParams(this.props.location.search);
		if(query.get('tab') && query.get('tab') === 'buy'){
			this.openBuyCoupon();
			this.props.history.replace('?');
		}
	}

	componentDidUpdate(){
		let query = new URLSearchParams(this.props.location.search);
		if(query.get('tab') && query.get('tab') === 'buy'){
			this.openBuyCoupon();
			this.props.history.replace('?');
		}
	}

	openBuyCoupon = () => {
		$('a[href*=tab-3]').click();
	}

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
	                            <h6 className="fw-700">Coupons</h6>
	                            <p className="small mb-0">View your purchased coupons </p>
	                          </a>
	                        </li>
	                        <li className="nav-item">
	                          <a className="nav-link" data-toggle="tab" href="#tab-2">
	                            <h6 className="fw-700">Profile</h6>
	                            <p className="small mb-0">View and edit your profile information </p>
	                          </a>
	                        </li>
	                      </ul>
	                    </div>
		                <div className="col-md-8 ml-auto align-self-center">
		                  <div className="tab-content text-center">
		                    <CouponsDashboard />
		                    <CustomerProfile />
		                  </div>
		                </div>
		              </div>
		            </div>
		        </section>
			</main>
		);
	}
}

export default withRouter(Customer);