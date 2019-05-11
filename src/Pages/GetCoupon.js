import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getToken} from '../Utilities';

import CouponCard from '../Components/Cards/Coupon/Card';

import {openLoginModal, openSignupModal} from '../Actions/Auth';

class component extends Component {

	state = {
		qty:1
	}

	render(){
		let amt = parseFloat(this.state.qty * 20);
		let gst = parseFloat(amt  * 0.28);
		let total = amt + gst;

		return (
			<React.Fragment>
				<header className="header p-0 text-white">
			        <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/Dimonds-4.webm" type="video/webm" />
			          <source src="/img/video/Dimonds-4.mp4" type="video/mp4" />
			        </video>
			      <div className="container">
			        <h1 className="display-4 mt-10">Buy Coupon</h1>
			        <p className="lead-2 mt-6">Be eligible for lucky draw.</p>
			        <div className="row mt-6 mb-6">
			          <div className="col-md-8 col-xl-6 input-glass input-round mx-auto">
			          </div>
			        </div>
			      </div>
			    </header>
				<main className="main-content">
				    <section className="section bg-gray">
				        <div className="container">
							<div className="row">
				                <div className="col-md-12 mx-auto py-0 text-center text-md-left">
				                    <section>
				                    	<div className="container">
				                    		<CouponCard code="DEMOCODE" expiry="2019-04-02" />
					                        <div className="row gap-y">
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
																<p>₹{amt.toFixed(2)}</p>
															</div>
														</div>
						                              	<hr />
						                              	<div className="flexbox">
															<div>
															  	<p><strong>GST:</strong></p>
															</div>
															<div>
																<p>₹{gst.toFixed(2)}</p>
															</div>
														</div>
						                              	<hr />
						                              	<div className="flexbox">
						                                	<div>
						                                  		<p><strong>Total:</strong></p>
						                                	</div>
						                                	<div>
						                                  		<p className="fw-600">₹{total.toFixed(2)}</p>
						                                	</div>
						                              	</div>
						                            </div>
						                            <div className="row">
						                            	<div className="col-12">
						                                	{!this.props.isLoggedIn ? 
						                                		<button onClick={this.props.showLogin} className="btn btn-block btn-primary">Proceed To Pay <i className="fa fa-arrow-right fs-9"></i></button>
						                                		:
							                                		this.state.qty > 0 ? 
								                                		<a className="btn btn-block btn-primary" href={`/buy-coupon?qty=${this.state.qty}&token=${getToken()}`}>Proceed To Pay <i className="fa fa-arrow-right fs-9"></i></a> 
								                                			: <button className="btn btn-block btn-primary" disabled>Proceed To Pay <i className="fa fa-arrow-right fs-9"></i></button>}
						                              	</div>
						                            </div>
					                        	</div>
					                        </div>
				                  		</div>
				                	</section>
				            	</div>
				            </div>
				        </div>
				    </section>
				</main>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn:state.auth.isLoggedIn
	}
}

const mapDispatchToProps = {
	showLogin:openLoginModal
}

export default connect(mapStateToProps, mapDispatchToProps)(component);



