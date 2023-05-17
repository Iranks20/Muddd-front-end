import React from 'react';
import {Link} from 'react-router-dom'

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';

//images
import blog from './../assets/images/blog/blog_1.png';
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

function BlogTechnology(){
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="AI in the blockchain technology" />
                <section className="bg-light content-inner">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="bg-light blog-single dz-card sidebar">
                                    <div className="dz-media dz-media-rounded">
                                        <img src={blog} alt="" />
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={avat3} alt="" /> 
                                                        <span>BY MUDATECH</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}>March 22 2023</Link></li>
                                                <li className="post-comment"><Link to={"#"}>ARTIFICIAL INTELLIGENCE, OPEN A.I, TECHNOLOGY</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">The role of AI in the blockchain technology industry</h3>
                                        <div className="dz-post-text">
                                            <p>AI has been one of the most transformative innovations of our generation. The technology is so robust that AI tools like Open AI’s Chat GPT are being alleged to potentially replace human jobs. However, the truth is that AI will only replace those who do not know how to use it and can be crucial to the success of various industries, including the blockchain industry.</p>
                                            <p>Blockchain technology is a distributed ledger system that allows for secure, transparent, and immutable transactions. However, scalability remains a significant challenge in the industry. AI can improve scalability by optimising the consensus mechanism, which allows nodes on the network to agree on the validity of transactions.</p>
                                            <p>It can also enhance security by detecting and preventing fraudulent activities (through its ability to analyze large volumes of data and identify patterns that are emblematic of suspicious behavior), which is important because security is critical in the blockchain industry.</p>
                                            <blockquote className="wp-block-quote">
                                                <p>"AI is not about replacing humans, it's about amplifying human potential."</p>
                                                <cite>- Kai-Fu Lee</cite>
                                            </blockquote>
                                            <p>AI can also improve efficiency by automating certain processes, hence reducing the time it takes to process transactions. This will make the technology more attractive to businesses and individuals who require faster and more reliable transactions.</p>
                                            <p>Additionally, AI can aid decision-making by analyzing data and providing insights, which is essential in the blockchain industry because decisions made on the network can have far-reaching consequences.</p>
                                            <p>In conclusion, AI palys a significant role in improving the scalability, security, efficiency, and decision-making processes in the blockchain industry. As the blockchain industry continues to grow, the integration of AI is likely to become increasingly important in ensuring its success and sustainability.</p>
                                            {/* <ul className="m-b30">
                                                <li>MUDA is committed to growing financial inclusion through digital assets.</li>
                                            </ul> */}
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                            <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                                <Link to={"#"}><span>AI</span></Link>
                                                <Link to={"#"}><span>OPEN AI</span></Link>
                                                <Link to={"#"}><span>TECHNOLOGY</span></Link>
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
export default BlogTechnology;