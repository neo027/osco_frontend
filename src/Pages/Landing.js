import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {

	render(){
		return (
			<React.Fragment>
				<header className="header h-fullscreen header p-0 text-white">
			      <video className="bg-video" poster="/img/video/Dimonds-4.jpg" muted autoPlay loop>
			          <source src="/img/Dimonds-4.webm" type="video/webm" />
			          <source src="/img/video/Dimonds-4.mp4" type="video/mp4" />
			      </video>
			      <div className="container">
		            <div className="row align-items-center h-100">
		              <div className="col-md-5 mr-auto mt-7">
		                <h1 className="fw-700 text-white">Modern and classic designs to suit every style.</h1>
		                <br />
		                <p className="fw-700 lead-2 text-white">Welcome to the Osco Jewels, where we present a collection of the best jewellery in exquisite designs.</p>
		                <br /> <a className="btn btn-xl btn-round btn-info" href="#intro">Explore Osco Jewels</a>
		              </div>
		              <div className="col-md-7 col-sm-3" style={{marginTop:'50px'}}> <img src="/img/oj-banner.png" className="animated zoomIn" alt="..." /></div>
		            </div>
		          </div>
			    </header>
		        <main className="main-content">
			      <header className="header text-white h-fullscreen text-center text-lg-left" id="intro" style={{backgroundImage: `linear-gradient(135deg, #B24592 0%, #F15F79 100%)`}}>
			        <div className="container">
			          <div className="row align-items-center h-100">
			            <div className="col-lg-5">
			              <h1 className="display-4"><strong>Diamond</strong><br />Ring Collection</h1>
			              <p className="lead mt-5">They say 'Diamonds are forever'. You will believe this when you set eyes on our new diamond ring collection. Hand made to precesion in Platinum, Yellow Gold or Rose Gold, and diamonds cut to perfection.</p>
			              <hr className="w-10 ml-0 my-7"/>
			              <div className="gap-xy"> <Link className="btn btn-round btn-warning px-6" to="/buycoupon">Buy Now</Link></div>
			            </div>
			            <div className="col-lg-6 ml-auto">
			              <div className="mt-3 mt-lg-0 align-self-end" style={{marginBottom:'-170px'}}> <img src="/img/oj-2.png"  className="animated slideInUp" alt="..." /></div>
			            </div>
			          </div>
			        </div>
			      </header>
			      <header className="header h-fullscreen text-center text-lg-left" style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
			        <div className="container">
			          <div className="row align-items-center h-100">
			            <div className="col-lg-7 ml-auto">
			              <div className="ratio-16x9 rounded mt-8 mt-lg-0"> <img src="/img/necklace.png" className="animated slideInLeft" alt="..."/></div>
			            </div>
			            <div className="col-lg-5">
			              <h1 className="display-4"><strong>Ethnic</strong><br />Jewellery Collection</h1>
			              <p className="lead mt-5">Relive the times with the Ethnic Collection which brings old traditional charm in todays times. Perfect for weddings and traditional functions.</p>
			              <hr className="w-10 ml-0 my-7"/>
			              <div className="gap-xy"> <Link to="/buycoupon" className="btn btn-round btn-warning px-6">Buy Now</Link></div>
			            </div>
			          </div>
			        </div>
			      </header>
			      <header className="header h-fullscreen pb-50" style={{backgroundImage: 'linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)'}}>
			        <div className="container">
			          <div className="row align-items-center h-100">
			            <div className="col-lg-6">
			              <h1>The best <span className="text-warning">of stones</span><br /><span className="text-success">from sapphire</span> to emeralds.</h1>
			              <p className="lead mt-5 mb-8">Jewellery intricately set in precious stones with immaculate craftsmanship and attention to detail.</p>
			              <div className="gap-xy"> <Link to="/buycoupon" className="btn btn-round btn-primary">Buy Now</Link></div>
			            </div>
			            <div className="col-lg-5 ml-auto d-lg-block"> <img src="/img/green-neck.png" className="animated slideInRight" alt="img"/></div>
			          </div>
			        </div>
			      </header>
			      <section className="section bg-gray" style={{paddingBottom:'200px'}}>
			        <div className="container">
			          <h2>It's Your Chance To Win Big</h2>
			          <hr/>
			          <p className="lead">Be a part of the Osco Jewels promotion for a chance to win big.</p>
			          <div className="row h-100">
			            <div className="col-lg-12 mx-auto">
			              <ol className="timeline timeline-horizontal">
			                <li className="timeline-item">
			                  <p className="lead-9 fw-900 lh-1 opacity-10">01</p>
			                  <h3>Buy Jewellery From Our distributors</h3>
			                  <p><img src="/img/1.png" className="animated slideInLeft" alt="..."/></p>
			                  <p>Purchase jewellery from any one of our network of partners and distributors. Our distributors will register you using your phone number.</p>
			                </li>
			                <li className="timeline-item">
			                  <p className="lead-9 fw-900 lh-1 opacity-10">02</p>
			                  <h3>Get Free Coupons On Your Purchase</h3>
			                  <p><img src="/img/2.png" className="animated slideInLeft" alt="..."/></p>
			                  <p>Get free coupons on the purchase of your jewellery. The more you buy the more coupons you get and the higher your chance to win.</p>
			                </li>
			                <li className="timeline-item">
			                  <p className="lead-9 fw-900 lh-1 opacity-10">03</p>
			                  <h3>Wait For The Lucky Draw</h3>
			                  <p><img src="/img/3.png" className="animated slideInRight" alt="..."/></p>
			                  <p>Wait for our monthly lucky draw which takes place every month. You will get intimation on your phone by SMS if you are one of the lucky winners.</p>
			                </li>
			                <li className="timeline-item">
			                  <p className="lead-9 fw-900 lh-1 opacity-10">04</p>
			                  <h3>Win Gold Every Month!</h3>
			                  <p><img src="/img/4.png" className="animated slideInRight" alt="..."/></p>
			                  <p>Chance to Win Jewellery worth INR 10,000 every month.</p>
			                </li>
			              </ol>
			            </div>
			          </div>
			        </div>
			      </section>
			      <header className="header text-white h-fullscreen text-center text-lg-left" id="intro" style={{backgroundImage: 'linear-gradient(135deg, #EF3B36 0%, #764ba2 100%)'}}>
			        <div className="container">
			          <div className="row align-items-center h-100">
			            <div className="col-lg-6 align-self-center pb-lg-9">
			              <h1>Precious Stones Ring Collection</h1>
			              <p className="lead mt-5 mb-8">Elegant Gold & Platinum rings set in Ruby, Sapphire or Emeralds</p>
			              <div className="gap-xy"> <Link to="/buycoupon" className="btn btn-round btn-primary mw-150">Start Shopping</Link></div>
			            </div>
			            <div className="col-lg-5 col-sm-3 col-xs-3 ml-auto"> <img src="/img/ring.png"  className="animated slideInRight mt-10" alt="img"/></div>
			          </div>
			        </div>
			      </header>
			    </main>
			</React.Fragment>
		);
	}
}

export default Landing;