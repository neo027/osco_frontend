import React, {Component} from 'react';
import swal from 'sweetalert';
import * as ReactDOM from 'react-dom';

import {allotCoupon} from '../../../Api/Distributor';

class Card extends Component {

	onAllotCoupon = () => {
		let wrapper = document.createElement('div');
		ReactDOM.render(<input placeholder="no of coupons to allot" className="form-control" onChange={e => swal.setActionValue(e.target.value)}/>, wrapper);
		let el = wrapper.firstChild;

		swal({
		  text: 'Allot Coupons',
		  content: el,
		  buttons: {
		    confirm: {
		      text:'Allot',
		      value: '',
		    },
		  },
		})
		.then((value) => {
			console.log(value);
			if(parseInt(value) > 0){
				allotCoupon({userId:this.props.distributorId, noOfCoupons:parseInt(value)})
				.then(data => {
					this.props.handleCouponAllotment(this.props.distributorId, parseInt(value));
					swal('Success', 'alloted successfully.', 'success');
				})
				.catch(error => swal('Error', 'Something went wrong', 'error'));
			}
			else {

			}
		});
	}

	render(){
		return (
			<div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="p-0">
                      <h2>{this.props.name}</h2>
                      <div className="row">
	                      <div className="col-md-4">
	                          <div className="row">
	                          <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
	                          <div className="col-md-10"><p>{this.props.addressLine1},<br />{this.props.addressLine2}{this.props.addressLine2 && <br />}{this.props.city}, {this.props.state} - {this.props.pincode}</p></div>   
	                          </div> 
		                  </div>
		                  <div className="col-md-4">
		                    <div className="row">
		                        <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
		                          <div className="col-md-10"><p>{this.props.mobileNumber}</p></div>   
		                        </div> 
		                        <div className="row">
		                            <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
		                            <div className="col-md-10"><p>{this.props.email}</p></div>   
		                        </div> 
		                  </div>
		                  <div className="col-md-4">
		                        <div className="row">
		                            <div className="col-md-10">
		                                <img style={{maxWidth:'150px', maxHeight:'120px'}} className="h-50" src={this.props.logo} alt="..." />
		                            </div>
		                            <div className="col-md-10"><h3>Coupons: {this.props.noOfCoupons}</h3></div>   
		                        </div> 
		                  </div>
		                  <div className="col-md-12">
		                        {/*<a className="btn btn-warning px-6 mr-1" href="#">Edit Distributor</a>*/}
		                     	<button onClick={this.onAllotCoupon} className="btn btn-success px-6">Allot Coupons</button>
		                  </div>
	                  </div>
                    </div>
                  </div>
                </div>
            </div>
		);
	}
}

export default Card;