import React, {Component} from 'react';

import CreateCustomer from '../../Components/Dashboard/CreateCustomer';
import GenerateCoupons from '../../Components/Dashboard/GenerateCoupons';
import DistributorProfile from '../../Components/Dashboard/DistributorProfile';

class Distributor extends Component {

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
                      <h6 className="fw-700">Create Customer</h6>
                      <p className="small mb-0">Create customer accounts </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-3">
                      <h6 className="fw-700">Generate Coupons</h6>
                      <p className="small mb-0">Generate & allot coupons </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-4">
                      <h6 className="fw-700">Distributor Profile</h6>
                      <p className="small mb-0">View your profile </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 ml-auto align-self-center">
                <div className="tab-content text-center">
                  <CreateCustomer />
                  <GenerateCoupons />
                  <DistributorProfile />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
		);
	}
}

export default Distributor;