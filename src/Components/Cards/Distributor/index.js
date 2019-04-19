import React, {Component} from 'react';


const Card = (props) => {
	return (
		<div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
            <div className="row">
              <div className="col-md-4">
                <img className="position-absolute h-50" src={props.logo} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="p-0">
                  <h2>{props.name}</h2>
                  <div className="row">
                  <div className="col-md-4">
                      <div className="row">
                      <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
                      <div className="col-md-10"><p>{props.addressLine1},<br />{props.addressLine2}{props.addressLine2 && <br />}{props.city}, {props.state} - {props.pincode}</p></div>   
                      </div> 
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
                        <div className="col-md-10"><p>{props.mobileNumber}</p></div>   
                        </div> 
                        <div className="row">
                            <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
                            <div className="col-md-10"><p>{props.email}</p></div>   
                            </div> 
                  </div>
                  <div className="col-md-4">
                      {props.website ? <a className="btn btn-round btn-warning px-6" target="_blank" href={props.website}>Visit Website</a> : <div className="btn btn-round btn-warning px-6">Visit Website</div>}
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
	);
}

export default Card;