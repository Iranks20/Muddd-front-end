import React from 'react';
import { HashRouter, Route, Routes  } from 'react-router-dom';

import ScrollToTop from './../layouts/ScrollToTop';
import Header from './../layouts/Header';
import Footer from './../layouts/Footer';
import Home from './Home';
import CashLink from './CashLink';
import Pricing from './Pricing';
import BlogList from './BlogList';
import Blog from './Blog';
import OtcRoom from './OtcRoom';
import BlogDetails1 from './BlogDetails1';
import ContactUs from './ContactUs';
import BlogTechnology from './BlogTechnology';
import BlogLaunch from './BlogLaunch';
import BlogOtc from './BlogOtc';

function Index(){
	return(
		<HashRouter basename="/">
			<div className="page-wraper">
					<Header />
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/cash-link' exact element={<CashLink />} />
						<Route path='/pricing' exact element={<Pricing />} />
						<Route path='/blog-list' exact element={<BlogList />} />
						<Route path='/blog' exact element={<Blog />} />
						<Route path='/otc-room' exact element={<OtcRoom />} />
						<Route path='/blog-details1' exact element={<BlogDetails1 />} />
						<Route path='/contact-us' exact element={<ContactUs />} />
						<Route path='/blog-technology' exact element={<BlogTechnology />} />
						<Route path='/blog-launch' exact element={<BlogLaunch />} />
						<Route path='/blog-otc' exact element={<BlogOtc />} />
					</Routes>
					<Footer />
				<ScrollToTop />
			</div>
		 </HashRouter>		
	)
} 
export default Index;