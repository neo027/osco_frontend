import React, {Component} from 'react';


class ContactUs extends Component {

	render(){
		return (
			<React.Fragment>
				<header className="header p-0">
			      <iframe src="https://www.google.com/maps/d/embed?mid=1tvI_HVwsjF0nXr-1gXlhQbBMdmUv8ryn" width="100%" height="480" style={{marginTop:'-50px'}}></iframe>
			    </header>
			    <main className="main-content">
			      <section className="section">
			        <div className="container">

			          <form className="row gap-y" onSubmit={e => e.preventDefault()}>
			            <div className="col-lg-7">
			              <h3>Contact Us</h3>
			              <br />
			              <div className="alert alert-success d-on-success">We received your message and will contact you back soon.</div>
			              <div className="form-row">
			                <div className="form-group col-md-6">
			                  <input className="form-control form-control-lg" type="text" name="name" placeholder="Name"/>
			                </div>

			                <div className="form-group col-md-6">
			                  <input className="form-control form-control-lg" type="text" name="city" placeholder="City"/>
			                </div>
			                
			                <div className="form-group col-md-6">
			                  <input className="form-control form-control-lg" type="email" name="email" placeholder="Email"/>
			                </div>
			                <div className="form-group col-md-6">
			                  <input className="form-control form-control-lg" type="tel" name="phone" placeholder="Phone"/>
			                </div>
			              </div>

			              <div className="form-group">
			                <textarea className="form-control form-control-lg" rows="4" placeholder="Message" name="message"></textarea>
			              </div>

			              <button className="btn btn-lg btn-primary" type="submit">Send message</button>

			            </div>
			            <div className="col-lg-4 ml-auto text-center text-lg-left">
			              <hr className="d-lg-none" />
			              <h3>Find Us</h3>
			              <br />
			              <p>123 Main Street, Suit 124<br />Amritsar, Punjab, India</p>
			              <p>+1 (321) 654 9870<br />+1 (987) 123 6548</p>
			              <p>hello@oscojewells.com</p>
			              <div className="fw-400">Follow Us</div>
			              <div className="social social-sm social-inline">
			                <a className="social-twitter" href="#"><i className="fa fa-twitter"></i></a>
			                <a className="social-facebook" href="#"><i className="fa fa-facebook"></i></a>
			                <a className="social-instagram" href="#"><i className="fa fa-instagram"></i></a>
			                <a className="social-dribbble" href="#"><i className="fa fa-dribbble"></i></a>
			              </div>
			            </div>
			          </form>
			        </div>
			      </section>
			    </main>
			</React.Fragment>
		);
	}
}

export default ContactUs;