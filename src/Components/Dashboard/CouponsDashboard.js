import React, {Component} from 'react';

import CouponCard from '../Cards/Coupon/Card';

import {getCoupons} from '../../Api/Customer';

class CouponsDashboard extends Component {

	constructor(){
		super();
	
		this.state = {
			coupons:[]
		}
	}

	componentDidMount(){
		getCoupons()
		.then(({coupons}) => this.setState({coupons}))
		.catch(error => this.setState({error:'Something went wrong'}));
	}


	render(){
		return (
			<div className="tab-pane fade show active" id="tab-1">
                <div className="row">
                    <div className="col-md-12 mx-auto py-0 text-center text-md-left">
                        <h3>Your Coupons</h3>
                        <hr />
                        {
                        	this.state.coupons && this.state.coupons.map(coupon => 
                        		<CouponCard key={JSON.stringify(coupon)} code={coupon.code} expiry={coupon.expiry} />
                        	)
                        }
                    </div>
                  </div>
            </div>
		);
	}
}

export default CouponsDashboard;