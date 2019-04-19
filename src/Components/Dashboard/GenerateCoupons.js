import React, {Component} from 'react';
import swal from 'sweetalert';

import {assignCouponToCustomer} from '../../Api/Customer';

class GenerateCoupons extends Component {

  constructor(){
    super();
  
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      data:{
        saleAmount:0,
        mobileNumber:''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      data:{
        ...this.state.data, 
        [e.target.name]:e.target.value
      }, 
      error:{
        ...this.state.error, 
        [e.target.name]:null, 
        global:null
      }
    });
  }

  onAllotCoupon = () => {
    let noOfCoupon = parseInt(parseInt(this.state.data.saleAmount) / 10000);

    if(noOfCoupon > 0){
      assignCouponToCustomer(this.state.data)
      .then(response => {
        this.setState(this.getInitialState());
        swal('Success', 'Coupons generated for customer', 'success')
      })
      .catch(error => swal('Error', 'Something went wrong!', 'error'));
    }
    else {
      swal('Error', 'Insufficient sales amount. Min 10000 INR is required.', 'error');
    }
  }

	render(){
    let noOfCoupon = parseInt(parseInt(this.state.data.saleAmount) / 10000);

		return (
			<div className="tab-pane fade" id="tab-3">
        <div className="row">
        	<div className="col-md-12 mx-auto py-0 text-center text-md-left">
        		<h3>Generate Coupons</h3><hr/>
		        <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Sale Amount (INR)</label>
                  <input className="form-control form-control-sm" type="number" name="saleAmount" onChange={this.handleChange} value={this.state.data.saleAmount} placeholder="Eg. 60,000" />
                </div>
                <div className="form-group">
                  <label>Customer Mobile Number</label>
                  <input className="form-control form-control-sm" name="mobileNumber" onChange={this.handleChange} value={this.state.data.mobileNumber} type="text" placeholder="Mobile Number" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Coupons Generated</label>
                  <h3>{noOfCoupon ? noOfCoupon : 0}</h3>
                </div>
                <div className="mt-3">
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

export default GenerateCoupons;