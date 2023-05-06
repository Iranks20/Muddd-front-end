import React from 'react';
import {Link} from 'react-router-dom'

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';

//images
import blog from './../assets/images/blog/blog-5.png';
import avat3 from './../assets/images/avatar/avatar6.png';
import avat2 from './../assets/images/avatar/avatar6.png';
import avat1 from './../assets/images/avatar/avatar1.jpg';
import pic4 from './../assets/images/blog/blog-3.png';
import pic5 from './../assets/images/blog/pic5.jpg';

const relatedBlog = [
    { image1: pic4, image2: avat2, title:'Trade Instantly At The Best Rates', description: 'Our OTC desk processes over $2million in daily volume, providing users with access to deep liquidity in crypto using their local currency, such as  NGN, UGX, KSHS, GSH, TSHS among others. We support local payment methods such as Mobile Money and bank transfers at affordable rates. Join millions of people using our OTC desk to transfer money worldwide!'},
    { image1: pic5, image2: avat3, title:'Enjoy The Best OTC Trading Rates', description: 'MUDA has a pan-continental established OTC desk that aims to give its clients the ability to transact across several African and international locations.'},
];

const CommentBlog = ({image, title}) =>{
    return(
        <>
            <div className="comment-body">
                <div className="comment-author vcard"> 
                    <img className="avatar photo" src={image} alt="" /> 
                </div>
                <div className="comment-info">
                    <div className="title">
                        <cite className="fn">{title}</cite>
                        <span>07 March, 2022</span>
                    </div>
                    <p>Integer consectetur diam vitae imperdiet iaculis. In faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo.</p>
                    <div className="reply"> 
                        <Link to={"#"} className="comment-reply-link"><span><i className="fa-solid fa-share"></i>REPLY</span></Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

function BlogLaunch(){
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Blog Details " />
                <section className="bg-light content-inner">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="blog-single dz-card sidebar">
                                    <div className="dz-media dz-media-rounded">
                                        <img src={blog} alt="" />
                                    </div>
                                    <div className="bg-light dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={avat3} alt="" /> 
                                                        <span>BY MUDATECH</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}>January 12th 2022</Link></li>
                                                <li className="post-comment"><Link to={"#"}>DESIGN</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">MUDA Launch of ‘The Deal Room’ a Pan-continental OTC desk</h3>
                                        <div className="dz-post-text">
                                            <p>MUDA, an established cryptocurrency OTC desk, is announcing the launch of The Deal Room; Pan-continental OTC desk. MUDA has been in operation in East Africa since 2019 and this development will give clients the ability to transact across several African and international locations and currencies. The Deal room has been designed to help its B2B clients that mainly consist of P2P traders and businesses that carry out cross border trade with access to quick and easy transactions. Customers will gain access to the service through the website and get served by a dedicated desk operator who will set them up with their own Deal Room for transactions.</p>
                                            <p>The OTC desk is currently processing over $2million in daily volume, providing users with access to deep liquidity across multiple African currencies in order to enable them to easily access large amounts of crypto using local currencies and payment methods such as mobile money, cash and bank transfers at affordable rates. Some of the already active locations include Kenya, Uganda, Tanzania, Nigeria, Ghana, Burundi, South Africa, Dubai, Ivory coast, Zambia and Congo.</p>
                                            <p>The expansion of the pan-continental OTC desk comes weeks ahead of the launch of the up coming online exchange and token sale. The Managing Director of MUDA Suleiman said;</p>
                                            <blockquote className="wp-block-quote">
                                                <p>“We have been working very hard in the background trying to push the crypto space forward because we strongly believe that it will generate a lot of opportunities for the youth to generate sustainable incomes and wealth .” He added, “We are glad to see the community right behind us on this journey as we continue to expand our reach.”</p>
                                                <cite>mudatech</cite>
                                            </blockquote>
                                            <p>Muda’s mission is to empower its users through decentralised assets by providing the tools to enable them to leverage blockchain technologies to their advantage.</p>
                                            <ul className="m-b30">
                                            <li>Interested traders can access our <a href="https://chatwith.io/s/muda">deal room here</a> and get started in minutes.</li>
                                            </ul>
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                            <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                                <Link to={"#"}><span>OTC Deal Room</span></Link>
                                                <Link to={"#"}><span>CashLink</span></Link>
                                                <Link to={"#"}><span>Trading Desk</span></Link>
                                            </div>
                                            <div className="dz-social-icon dark">
                                                <ul>
                                                    <li><a className="fab fa-google" href="mailto:info@muda.tech"></a></li>
                                                    <li><a target="_blank" className="fab fa-instagram" href="https://instagram.com/muda_hq?igshid=YmMyMTA2M2Y="></a></li>
                                                    <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/mudatech_?t=9xUIcKAWXE2KFGl-wtrkrA&s=09"></a></li>
                                                    <li><a target="_blank" className="fab fa-youtube" href="https://www.youtube.com/@mudatech"></a></li>
                                                </ul>
                                            </div>									
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-title">
                                    <h4 className="title">Related Blog</h4>
                                </div>
                                <div className="row m-b30 m-sm-b10">
                                    {relatedBlog.map((item, ind)=>(
                                        <div className="col-md-6 m-b30" key={ind}>
                                            <div className="dz-card style-1  blog-lg overlay-shine ">
                                                <div className="dz-media ">
                                                    <Link to={"/otc-room"}><img src={item.image1} alt="" /></Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            {/* <li className="post-author"> */}
                                                                {/* <Link to={"#"}> */}
                                                                    {/* <img src={item.image2} alt="" /> */}
                                                                    {/* <span>By Jemmy</span> */}
                                                                {/* </Link> */}
                                                            {/* </li> */}
                                                            {/* <li className="post-date"><Link to={"#"}> 24 May 2022</Link></li> */}
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={"/otc-room"}>{item.title}</Link></h4>
                                                    <p>{item.description}</p>
                                                    <Link to={"/otc-room"} className="btn btn-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}                                   
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area style-1 clearfix" id="comments">
                                        <div className="widget-title">
                                            <h4 className="title">Comments</h4>
                                        </div>
                                        <div className="clearfix">
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <CommentBlog image={avat1} title="Lillian Walsh"/>
                                                    <ol className="children">
                                                        <li className="comment">
                                                            <CommentBlog image={avat2} title="Walsh Nehan"/>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <CommentBlog image={avat3} title="Boni Joye"/>
                                                </li>
                                            </ol>                                            
                                        </div>
                                        
                                        <div className="widget-title">
                                            <h4 className="title">Leave A Reply</h4>
                                        </div>
                                        <div className="clearfix">
                                            
                                            <div className="default-form comment-respond style-1" id="respond">
                                                <form className="comment-form" id="commentform" method="post">
                                                    <p className="">
                                                        <label>Name <span className="required">*</span></label>
                                                        <input type="text" name="FirstName" placeholder="First Name" id="FirstName" className="form-control" />
                                                    </p>
                                                    <p className="">
                                                        <label>Email <span className="required">*</span></label>
                                                        <input type="text" placeholder="Email" name="email" id="email" className="form-control" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label>Message</label>
                                                        <textarea rows="8" name="Message" placeholder="Message" id="Message" className="form-control"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn btn-primary btn-skew btn-icon" id="submit"><span>Submit Now</span></button>
                                                    </p>
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default BlogLaunch;