import React, {Component} from 'react';


class DistributorList extends Component {

	render(){
		return (
			<React.Fragment>	    
			    <header className="header p-0 text-white">
			        <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/Dimonds-4.webm" type="video/webm" />
			          <source src="/img/video/Dimonds-4.mp4" type="video/mp4" />
			        </video>
			      <div className="container">
			        <h1 className="display-4 mt-10">Distributors</h1>
			        <p className="lead-2 mt-6">Find a Distributor near you.</p>
			        <div className="row mt-6 mb-6">
			          <form className="col-md-8 col-xl-6 input-glass input-round mx-auto" action="" method="post" target="_blank">
			            <div className="input-group input-group-lg bg primary">
			              <div className="input-group-prepend">
			                <span className="input-group-text"><i className="fa fa-search"></i></span>
			              </div>
			              <input type="text" name="Distributor" className="form-control" placeholder="Search by Name, City, State..." />
			              <span className="input-group-append">
			                <button className="btn btn-light">Search</button>
			              </span>
			            </div>
			          </form>
			        </div>
			      </div>
			    </header>

			    <main className="main-content">
			      <section className="section bg-gray">
			        <div className="container">
			            <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                <div className="row">
			                  <div className="col-md-4">
			                    <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/1.png" alt="..." /></a>
			                  </div>
			                  <div className="col-md-8">
			                    <div className="p-0">
			                      <h2>XYZ Jewells, City, State</h2>
			                      <div className="row">
			                      <div className="col-md-4">
			                          <div className="row">
			                          <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                          <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                          </div> 
			                    </div>
			                    <div className="col-md-4">
			                        <div className="row">
			                            <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                            <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                            </div> 
			                            <div className="row">
			                                <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                </div> 
			                      </div>
			                      <div className="col-md-4">
			                          <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                      </div>
			                    </div>
			                    </div>
			                  </div>
			                </div>
			              </div>


			              <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                  <div className="row">
			                    <div className="col-md-4">
			                      <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/1.png" alt="..." /></a>
			                    </div>
			                    <div className="col-md-8">
			                      <div className="p-0">
			                        <h2>XYZ Jewells, City, State</h2>
			                        <div className="row">
			                        <div className="col-md-4">
			                            <div className="row">
			                            <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                            <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                            </div> 
			                      </div>
			                      <div className="col-md-4">
			                          <div className="row">
			                              <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                              <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                              </div> 
			                              <div className="row">
			                                  <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                  <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                  </div> 
			                        </div>
			                        <div className="col-md-4">
			                            <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                        </div>
			                      </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>


			                <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                    <div className="row">
			                      <div className="col-md-4">
			                        <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/2.png" alt="..." /></a>
			                      </div>
			                      <div className="col-md-8">
			                        <div className="p-0">
			                          <h2>XYZ Jewells, City, State</h2>
			                          <div className="row">
			                          <div className="col-md-4">
			                              <div className="row">
			                              <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                              <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                              </div> 
			                        </div>
			                        <div className="col-md-4">
			                            <div className="row">
			                                <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                                <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                                </div> 
			                                <div className="row">
			                                    <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                    <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                    </div> 
			                          </div>
			                          <div className="col-md-4">
			                              <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                          </div>
			                        </div>
			                        </div>
			                      </div>
			                    </div>
			                  </div>


			                  <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                      <div className="row">
			                        <div className="col-md-4">
			                          <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/3.png" alt="..." /></a>
			                        </div>
			                        <div className="col-md-8">
			                          <div className="p-0">
			                            <h2>XYZ Jewells, City, State</h2>
			                            <div className="row">
			                            <div className="col-md-4">
			                                <div className="row">
			                                <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                                <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                                </div> 
			                          </div>
			                          <div className="col-md-4">
			                              <div className="row">
			                                  <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                                  <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                                  </div> 
			                                  <div className="row">
			                                      <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                      <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                      </div> 
			                            </div>
			                            <div className="col-md-4">
			                                <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                            </div>
			                          </div>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                        <div className="row">
			                          <div className="col-md-4">
			                            <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/4.png" alt="..." /></a>
			                          </div>
			                          <div className="col-md-8">
			                            <div className="p-0">
			                              <h2>XYZ Jewells, City, State</h2>
			                              <div className="row">
			                              <div className="col-md-4">
			                                  <div className="row">
			                                  <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                                  <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                                  </div> 
			                            </div>
			                            <div className="col-md-4">
			                                <div className="row">
			                                    <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                                    <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                                    </div> 
			                                    <div className="row">
			                                        <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                        <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                        </div> 
			                              </div>
			                              <div className="col-md-4">
			                                  <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                              </div>
			                            </div>
			                            </div>
			                          </div>
			                        </div>
			                      </div>

			                      <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                          <div className="row">
			                            <div className="col-md-4">
			                              <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/5.png" alt="..." /></a>
			                            </div>
			                            <div className="col-md-8">
			                              <div className="p-0">
			                                <h2>XYZ Jewells, City, State</h2>
			                                <div className="row">
			                                <div className="col-md-4">
			                                    <div className="row">
			                                    <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                                    <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                                    </div> 
			                              </div>
			                              <div className="col-md-4">
			                                  <div className="row">
			                                      <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                                      <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                                      </div> 
			                                      <div className="row">
			                                          <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                          <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                          </div> 
			                                </div>
			                                <div className="col-md-4">
			                                    <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                                </div>
			                              </div>
			                              </div>
			                            </div>
			                          </div>
			                        </div>

			                        <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
			                            <div className="row">
			                              <div className="col-md-4">
			                                <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/6.png" alt="..." /></a>
			                              </div>
			                              <div className="col-md-8">
			                                <div className="p-0">
			                                  <h2>XYZ Jewells, City, State</h2>
			                                  <div className="row">
			                                  <div className="col-md-4">
			                                      <div className="row">
			                                      <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
			                                      <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
			                                      </div> 
			                                </div>
			                                <div className="col-md-4">
			                                    <div className="row">
			                                        <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
			                                        <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
			                                        </div> 
			                                        <div className="row">
			                                            <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
			                                            <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
			                                            </div> 
			                                  </div>
			                                  <div className="col-md-4">
			                                      <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
			                                  </div>
			                                </div>
			                                </div>
			                              </div>
			                            </div>
			                          </div>

                      <div className="card shadow-1 hover-shadow-8 mb-5 rounded p-5">
                          <div className="row">
                            <div className="col-md-4">
                              <a href="blog-single.html"><img className="position-absolute h-50" src="/img/logos/7.png" alt="..." /></a>
                            </div>
                            <div className="col-md-8">
                              <div className="p-0">
                                <h2>XYZ Jewells, City, State</h2>
                                <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                    <div className="col-md-2"><i className="fa fa-map-marker text-danger"></i></div>
                                    <div className="col-md-10"><p>123 Main Street, Suit 124,<br />Bangalore, KA, 560001</p></div>   
                                    </div> 
                              </div>
                              <div className="col-md-4">
                                  <div className="row">
                                      <div className="col-md-2"><i className="fa fa-phone text-success"></i></div>
                                      <div className="col-md-10"><p>+1 (321) 654 9870</p></div>   
                                      </div> 
                                      <div className="row">
                                          <div className="col-md-2"><i className="fa fa-envelope text-primary"></i></div>
                                          <div className="col-md-10"><p>contact@xyazewells.com</p></div>   
                                          </div> 
                                </div>
                                <div className="col-md-4">
                                    <a className="btn btn-round btn-warning px-6" href="/">Visit Website</a>
                                </div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
			        </div>
			      </section>
			    </main>
			</React.Fragment>
		);
	}
}

export default DistributorList;