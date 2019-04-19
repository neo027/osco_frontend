import React, {Component} from 'react';


class AboutUs extends Component {

	render(){
		return (
			<React.Fragment>
				<header className="header p-0 text-white" data-overlay="1">
			        <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/video/Diamonds-about.mp4" type="video/mp4" />
			        </video>
			      <div className="container mt-10">
			        <div className="row align-items-center h-100">

			          <div className="col-md-5 mx-auto pb-7">
			            <h1 className="display-3">About Us</h1>
			            <p className="lead-4">Welcome to the Osco Jewels, where we present a collection of the best jewellery in exquisite designs.</p>
			          </div>

			          <div className="col-md-5 mx-auto text-center">
			          </div>

			        </div>
			      </div>
			    </header>
			    <main className="main-content">
			      <section className="section">
			        <div className="container">
			          <div className="row gap-y">

			            <div className="col-md-3 mr-md-auto">
			              <p className="lead-4 text-right">It's Your Chance To Win Big</p>
			            </div>

			            <div className="col-md-4">
			              <h6>Our Offer</h6>
			              <p>Purchase jewellery from any one of our network of partners and distributors. Our distributors will register you using your phone number. Get free coupons on the purchase of your jewellery. </p>
			            </div>

			            <div className="col-md-4">
			              <h6>You Can Win Too</h6>
			              <p>Wait for our monthly lucky draw which takes place every month. You will get intimation on your phone by SMS if you are one of the lucky winners. Chance to Win Jewellery worth INR 10,000 every month.</p>
			            </div>

			          </div>
			        </div>
			      </section>
			      <section className="section text-white p-0 about-section-1">
			        
			        <div className="container-wide">
			          <div className="row no-gutters">

			            <div className="col-md-4 bg-img" style={{backgroundImage: `url(/img/ear-ring.jpg)`, minHeight: '300px'}}></div>

			            <div className="col-md-8 p-6 p-md-8">
			              <h4>From The Founder</h4>
			              <p className="lead">Osco jewells has been founded on the lines that connect jewellery buyers with the right distributors and give them a chance to win big with every purchase..</p>
			              <p>Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an.</p>
			              <p>Written enquire painful ye to offices forming it. Then so does over sent dull on. Likewise offended humoured mrs fat trifling answered. On ye position greatest so desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush songs begin.</p>
			            </div>

			          </div>
			        </div>
			      </section>
			    </main>
			</React.Fragment>
		);
	}
}

export default AboutUs;