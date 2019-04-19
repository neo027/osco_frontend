import React, {Component} from 'react';

import {getToken} from '../../Utilities';

class BuyCoupon extends Component {

	state = {
		qty:0
	}

	render(){
		return (
			<div className="tab-pane fade" id="tab-3">
		        <div className="row">
                    <div className="col-md-12 mx-auto py-0 text-center text-md-left">
	                    <h3>Buy Coupons</h3><hr />
	                    <section>
	                    	<div className="container">
		                        <form className="row gap-y">
		                        	<div className="col-lg-8">
			                            <table className="table table-cart">
			                              <tbody valign="middle">
			                                <tr className="bg-white">
			                                  <td>
			                                    <a href="item.html">
			                                      <img className="rounded" src="/img/logo-dark.png" alt="..." />
			                                    </a>
			                                  </td>
			                                  <td>
			                                    <h5>Coupon</h5>
			                                    <p>₹ 20 / Coupon</p>
			                                  </td>
			                                  <td>
			                                    <label>Quantity</label>
			                                    <input className="form-control form-control-sm" min="1" type="number" onChange={e => this.setState({qty:e.target.value})} placeholder="Quantity" value={this.state.qty} />
			                                  </td>
			                                  <td>
			                                    <h4 className="price">₹{this.state.qty * 20}</h4>
			                                  </td>
			                                </tr>
			                              </tbody>
			                            </table>
		                          	</div>
		                          	<div className="col-lg-4">
			                            <div className="cart-price">
											<div className="flexbox">
												<div>
												  	<p><strong>Subtotal:</strong></p>
												</div>
												<div>
													<p>₹{this.state.qty * 20}</p>
												</div>
											</div>
			                              	<hr />
			                              	<div className="flexbox">
			                                	<div>
			                                  		<p><strong>Total:</strong></p>
			                                	</div>
			                                	<div>
			                                  		<p className="fw-600">₹{this.state.qty * 20}</p>
			                                	</div>
			                              	</div>
			                            </div>
			                            <div className="row">
			                            	<div className="col-12">
			                                	{this.state.qty > 0 ? 
			                                		<a className="btn btn-block btn-primary" href={`/buy-coupon?qty=${this.state.qty}&token=${getToken()}`}>Proceed To Pay <i className="fa fa-arrow-right fs-9"></i></a> 
			                                			: <button className="btn btn-block btn-primary" disabled>Proceed To Pay <i className="fa fa-arrow-right fs-9"></i></button>}
			                              	</div>
			                            </div>
		                        	</div>
		                        </form>
                      		</div>
                    	</section>
                	</div>
                </div>
		    </div>
		);
	}
}

export default BuyCoupon;