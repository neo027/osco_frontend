import React, { Component } from "react";
import moment from "moment";

class Card extends Component {
	render() {
		return (
			<div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5 bg-coupon coupon">
				<div className="row">
					<div className="col-md-4">
						<a href="#coupon">
							<img
								className="position-absolute h-40"
								src="/img/logo-dark.png"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-md-8">
						<div className="p-0">
							<h2>1 Coupon / ₹ 20</h2>
							<div className="row">
								<div className="col-md-4">
									<a
										className="btn btn-danger px-6"
										href="#coupon"
									>
										Code: {this.props.code}
									</a>
								</div>
							</div>
							<div className="col-md-12 mt-2">
								<div className="row">
									<div className="col-md-12">
										<i className="fa fa-info-circle text-white" />{" "}
										This coupon is valid till the{" "}
										{moment(this.props.expiry).format(
											"Do of MMMM, YYYY"
										)}
										.
									</div>
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
