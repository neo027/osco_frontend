import React, { Component } from "react";

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<header className="header p-0 text-white" data-overlay="1">
					<video
						className="bg-video"
						poster="/img/video/Dimonds-4.jpg"
						muted
						autoPlay
						loop
					>
						<source
							src="/img/video/Diamonds-about.mp4"
							type="video/mp4"
						/>
					</video>
					<div className="container mt-10">
						<div className="row align-items-center h-100">
							<div className="col-md-5 mx-auto pb-7">
								<h1 className="display-3">About Us</h1>
								<p className="lead-4">
									Welcome to the Osco Jewels, where we present
									a collection of the best jewellery in
									exquisite designs.
								</p>
							</div>

							<div className="col-md-5 mx-auto text-center" />
						</div>
					</div>
				</header>
				<main className="main-content">
					<section className="section">
						<div className="container">
							<p className="lead">
								With the establishment in the year 1990, Osco
								Jewells, have been instrumental in the
								manufacturing and supplying of high quality
								jewellery. Our jewellery is admired in wide
								swathes of India for its captivating designs
								which are mix of classic fusion, craftsmanship
								and elegance that will add grace to the
								personality.
							</p>
						</div>
					</section>
					<section className="section text-white p-0 about-section-1">
						<div className="container-wide">
							<div className="row no-gutters">
								<div
									className="col-md-4 bg-img"
									style={{
										backgroundImage: `url(/img/ear-ring.jpg)`,
										minHeight: "300px"
									}}
								/>

								<div className="col-md-8 p-6 p-md-8">
									<h4>Our Mission</h4>
									<p className="lead">
										Since the launch of our new venture,
										Osco Jewells Promotion pvt ltd has
										become one of India's largest jewellery
										promotion network with a large
										diversified distributor network across
										the country.
									</p>
									<p className="lead">
										We provide the alliance which goes
										beyond the traditional dealing
										agreements. We are strictly committed
										towards providing personalized support
										to our distributors to enhance their
										business like never before.
									</p>
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
