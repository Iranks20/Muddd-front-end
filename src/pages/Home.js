import React,{useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

//components
import BannerCard from './../components/Home/BannerCard';
import BannerCard2 from '../components/Home/BannerCard2';
import OneStop from './../components/Home/OneStop';
import RecentNews from './../components/Home/RecentNews';

//images
import baner1 from './../assets/images/home-banner/img1.png';
import baner2 from './../assets/images/home-banner/blog-9.png';
import Shape5 from './../assets/images/home-banner/google-pay2.png';
import Shape6 from './../assets/images/home-banner/apple9.png';
import Shape1 from './../assets/images/home-banner/shape2.png';
import Shape3 from './../assets/images/home-banner/shape4.png';
import wallet from './../assets/images/icons/friendz.jpg';
import friend from './../assets/images/icons/friend.png';

import coin1 from './../assets/images/coins/coin1.png';
import coin3 from './../assets/images/coins/coin3.png';
import coin4 from './../assets/images/coins/coin4.png';
import coin8 from './../assets/images/coins/coin8.jpeg';
import coin9 from './../assets/images/coins/coin9.jpeg';
import coin10 from './../assets/images/coins/coin10.jpeg';
// import google from './../assets/images/coins/google2.png';
import pic2 from './../assets/images/coins/pic2.jpg';
import pic3 from './../assets/images/coins/pic3.jpg';

import bloglg from './../assets/images/blog/blog-ig.png';
import avatar3 from './../assets/images/avatar/avatar7.svg';


const trustBlog = [
	{image: wallet, title:' Sandra Johns', text:'“ I started using the Muda OTC desk this year and i really love how fast and instant my transactions are executed'}, 
	{image: friend, title:'Pacho Micho', text:'"The ability to send large transactions to Ghana for my business without any delay is what made me a long time client"'}, 
];

function Home(){
	const nav = useNavigate();
    const formDetails = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
	const [selecttext, setSelectText] = useState([coin4, 'Bitcoin']);
	const [selectedtext, setSelectedText] = useState('Sell');
	return(
		<>
			<div className="page-content">				
				<div className="main-bnr style-1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 text-center">
								<h1 className="" >Move Money To All Corners <br />Of The World!​</h1>
								<p className="text text-primary " >Buy, Sell, trade and send different currencies with us today access the deposit liquidity on the continent today</p>
								<a href="https://www.muda.exchange" className="btn space-lg btn-gradient btn-shadow btn-primary " >Get Started</a>
								<ul className="image-before">
									<li className="left-img"><img src={baner1} alt="" /></li>
									<li className="right-img"><img src={baner2} alt="" /></li>
								</ul>
							</div>
						</div>
					</div>
					<img className="bg-shape1" src={Shape1} alt="" />
					<img className="bg-shape2" src={Shape1} alt="" />
					<img className="bg-shape3" src={Shape3} alt="" />
					<img className="bg-shape4" src={Shape3} alt="" />
				</div>
				<div className="clearfix bg-primary-light">
					<div className="container">
						<div className="currancy-wrapper">
							<div className="row justify-content-center">
								<BannerCard />
							</div>
						</div>
					</div>
				</div>
				<section className="clearfix section-wrapper1 bg-primary-light">
				    <div className="container">
						<div className="form-wrapper-box style-1 text-center">
							<div className="section-head " >
								<h4 className="title m-t0">Trade Now</h4>
							</div>
							<form  className="dz-form"  onSubmit={(e) => formDetails(e)}>
								<div className="form-wrapper">
									<div className="flex-1">
										<div className="row g-3">
											<div className="col-xl-3 col-md-6 " >
												<Dropdown className="select-drop">
													<Dropdown.Toggle as="div" className="i-false select-drop-toggle">
														<img src={selecttext[0]} alt=""/> {selecttext[1]} <i className="fa-sharp fa-solid fa-angle-down" />
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item onClick={()=>setSelectText([coin4,"Bitcoin"])}><img src={coin4} alt=""/> Bitcoin</Dropdown.Item>
														<Dropdown.Item onClick={()=>setSelectText([coin3, "Ethereum"])}><img src={coin3} alt=""/> Ethereum</Dropdown.Item>
														<Dropdown.Item onClick={()=>setSelectText([coin1, "Tether"])}><img src={coin1} alt=""/> Tether</Dropdown.Item>
													</Dropdown.Menu>

												</Dropdown>
											</div>
											<div className="col-xl-3 col-md-6 " >
												<input name="dzName" type="text" required="" placeholder="How much worth in $?" className="form-control" />
											</div>
											<div className="col-xl-3 col-md-6 ">
												<input name="dzName" type="text" required="" placeholder="Email Address" className="form-control" />
											</div>
											<div className="col-xl-3 col-md-6 " >
											<Dropdown className="select-drop">
											<Dropdown.Toggle as="div" className="i-false select-drop-toggle">
												{selectedtext === 'Sell' ? 'Sell' : 'Buy'} <i className="fa-sharp fa-solid fa-angle-down" />
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item onClick={() => setSelectedText('Sell')}>Sell</Dropdown.Item>
												<Dropdown.Item onClick={() => setSelectedText('Buy')}>Buy</Dropdown.Item>
											</Dropdown.Menu>
											</Dropdown>
											</div>
										</div>
									</div>
									<a href="https://otc.muda.exchange" className="btn btn-lg btn-gradient btn-primary btn-shadow">Get Price</a>
								</div>
							</form>
						</div>
					</div>
					<div className="container">
						<div className="content-inner-1">
							<div className="section-head text-center">
								<h2 className="title">Why Trust Us?</h2>
								<p>Discover why businesses choose MUDA to send money across borders.</p>
							</div>
							<div className="widget-title">
								<h4 className="title">Testimonials</h4>
							</div>
							<div className="row">
								{trustBlog.map((data, ind)=>(
									<div className="col-lg-6 m-b30"  key={ind}>
										<div className="icon-bx-wraper style-2">
											<div className="icon-media">
												<img src={data.image} alt="" />
											</div>
											<div className="icon-content">
												<h4 className="title">{data.title}</h4>
												<p>{data.text}</p>
												{/* <a  className="btn btn-primary btn-gradient btn-shadow" href="https://www.muda.exchange/">Read More</a> */}
											</div>
										</div>
									</div>
								))}	
								
							</div>
						</div>
					</div>
					<img className="bg-shape1" src={Shape1} alt="" />
					</section>
					<section className="content-inner bg-light icon-section section-wrapper2">
					<div className="container">
						<div className="section-head text-center">
							<h2 className="title">One stop liquidity solution for currency trading in Africa</h2>
						</div>
						<div className="row sp60">
							<OneStop />
						</div>
					</div>
					<img className="bg-shape1" src={Shape1} alt="" />
					<div className="container">
						<div className="form-wrapper-box text-center">
							<div className="section-head">
							<h4 className="title m-t0">Our Sponsors</h4>
							</div>
							<div
							className="sponsor-iconz"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							>
							<img
								src={coin8}
								alt="Peagusus"
								style={{
								width: "200px",
								height: "100px",
								objectFit: "contain",
								margin: "10px",
								}}
							/>
							<img
								src={coin9}
								alt="Fire blocks"
								style={{
								width: "200px",
								height: "100px",
								objectFit: "contain",
								margin: "10px",
								}}
							/>
							<img
								src={coin10}
								alt="Celo"
								style={{
								width: "200px",
								height: "100px",
								objectFit: "contain",
								margin: "10px",
								}}
							/>
							</div>
						</div>
					</div>
					<br></br>
				</section>
				<div className="container">
				<div className="text-center">
					<div className="section-head text-center">
					<p>Get the Muda mobile app</p>
					<h4 className="title m-t0">We’ve created the mobile app you need for trading Crypto on the go.</h4>
					</div>
					<style>
					{`
						.sponsor-icons {
						display: flex;
						justify-content: center;
						align-items: center;
						}
					`}
					</style>
					<div className="sponsor-icons">
					<a href="https://play.google.com/store/apps/details?id=com.muda.exchange&hl=en_US&gl=US&pli=1">
						<img src={Shape5} alt="click me to download our app" />
					</a>
					<a href="#">
						<img src={Shape6} alt="click me to download our app" />
					</a>
					</div>
					<br></br>
					<div className="section-head text-center">
					<p>Buy, Sell, Send, Receive and Manage your crypto securely on your mobile devices – No stress, No hustle.</p>
					</div>
				</div>
				</div>

				<br></br>
				{/* <section className="content-inner bg-white blog-wrapper">
					<img className="bg-shape1" src={Shape1} alt="" />

					<div className="container">
						<div className="row">
							<div className="col-xl-7 col-lg-12">
								<div className="section-head " >
									<h6 className="sub-title text-primary">FROM OUR BLOG</h6>
									<h2 className="title">Get Great News And Insight From Our Expert Team.</h2>
								</div>
								<RecentNews />
							</div>
							<div className="col-xl-5 col-lg-12 m-b30 " >
								<div className="dz-card style-2" style={{backgroundImage: "url("+ bloglg +")"}}>
									<div className="dz-category">
										<ul className="dz-badge-list">
											<li><Link to={"#"} className="dz-badge">31st MARCH 2023</Link></li>
										</ul>
									</div>
									<div className="dz-info">
										<h2 className="dz-title"><Link to={"/otc-room"} className="text-white">Over-The-Counter(OTC)</Link></h2>
										<div className="dz-meta">
											<ul>
												<li className="post-date"><img src={avatar3} alt=""  className="me-2"/></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			</div>		
		</>
	)
} 
export default Home;