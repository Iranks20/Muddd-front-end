import React from 'react';
import { HashRouter, Route, Routes  } from 'react-router-dom';

import ScrollToTop from './../layouts/ScrollToTop';
import Header from './../layouts/Header';
import Footer from './../layouts/Footer';
import Home from './Home';
// import CashLink from './CashLink';
import Pricing from './Pricing';
// import BlogList from './BlogList';
import Blog from './BlogList';
import OtcRoom from './OtcRoom';
import BlogMuda from './BlogMuda';
import ContactUs from './ContactUs';
import BlogTechnology from './BlogTechnology';
import BlogLaunch from './BlogLaunch';
import BlogOtc from './BlogOtc';
import BlogProducts from './BlogProducts';
// import BlogList from './BlogList';
import Products from './products';

function Index(){
	return(
		<HashRouter basename="/">
			<div className="page-wraper">
					<Header />
					<Routes>
						<Route path='/' exact element={<Home />} />
						{/* <Route path='/cash-link' exact element={<CashLink />} /> */}
						<Route path='/pricing' exact element={<Pricing />} />
						{/* <Route path='/blog-list' exact element={<BlogList />} /> */}
						<Route path='/blog' exact element={<Blog />} />
						<Route path='/otc-room' exact element={<OtcRoom />} />
						<Route path='/blog-muda' exact element={<BlogMuda />} />
						<Route path='/contact-us' exact element={<ContactUs />} />
						<Route path='/blog-technology' exact element={<BlogTechnology />} />
						<Route path='/blog-launch' exact element={<BlogLaunch />} />
						<Route path='/blog-otc' exact element={<BlogOtc />} />
						<Route path='/products' exact element={<Products />} />
						<Route path='/product-details' exact element={<BlogProducts />} />
						{/* <Route path='/blog-list' exact element={<BlogList />} /> */}
					</Routes>
					<Footer />
				<ScrollToTop />
			</div>
		 </HashRouter>		
	)
} 
export default Index;