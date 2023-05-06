import React from 'react';
import {Link} from 'react-router-dom'

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';

//images
import blog from './../assets/images/blog/blog-3.png';
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

function BlogOtc(){
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Blog Details " />
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
                                                <li className="post-date"><Link to={"#"}>March 31st 2023</Link></li>
                                                <li className="post-comment"><Link to={"#"}>UNCATEGORISED</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">How OTC Platforms are democratising access to investments</h3>
                                        <div className="dz-post-text">
                                            <p>Over-the-counter (OTC) trading is a popular way of buying and selling digital assets without relying on an intermediary. OTC trading allows traders to negotiate directly with each other, avoid price slippage, and access higher liquidity.</p>
                                            <p>Over the last few years, the digital asset market has tremendously grown, with many investors and traders eager to get a slice of the industry. This has led to the rise of OTC platforms like MUDA, which are democratizing access to digital asset investment for everyone.</p>
                                            <p> In this article, we explore how OTC trading platforms like MUDA are changing the digital asset landscape by making it easier for people to buy and sell their digital assets.</p>
                                            <p> One of the biggest perks of using an OTC trading platform is that it democratizes access to digital asset investments. In the past, trading digital assets required significant technical knowledge, as well as access to specialized trading platforms and liquidity pools. However, with the emergence of OTC trading platforms like MUDA, anyone can now buy and sell digital assets with ease.</p>
                                            <p> MUDA is one such platform that has made it easier for P2P traders and other retail investors and traders to access digital asset investments. With MUDA, users can buy and sell Bitcoin, Ethereum, and other stable coins like USDT, and fiat currencies from anywhere across the world without the need for an intermediary through a user-friendly interface. The platform offers competitive fees, fast transaction speeds, and a secure trading platform, making it an ideal option for both new and experienced traders.</p>
                                            <blockquote className="wp-block-quote">
                                                <p>“ There is a good chance that in the future, physical wallets will die out and you will be storing money on your smartphones, and that money will be crypto!”.</p>
                                                <cite>mudatech</cite>
                                            </blockquote>
                                            <p> In addition to democratizing access to digital assets investments, OTC trading platforms like MUDA offer several other benefits to end-users;</p>
                                            <ul className="m-b30">
                                                <li>Improved liquidity- OTC trading platforms offer access to a larger pool of liquidity than centralized exchanges. This means that users can execute larger trades without impacting the market price.</li>
                                                <li>Faster transaction times- OTC trading platforms like MUDA offer faster transaction times than centralized exchanges, which take several minutes or even hours to process trades during peak trading periods.</li>
                                                <li>Enhanced security- OTC trading platforms like MUDA use advanced security measures to protect user funds and transactions. This includes measures like 2FA and UNIFID, a 3rd party verification tool to ensure it’s the true owners of accounts who have access to funds.</li>
                                                <li>Lower fees- OTC trading platforms often charge lower fees than centralized exchanges which can help users save money on their trades.</li>
                                            </ul>
                                            <p>In conclusion, OTC trading platforms like MUDA are democratizing access to digital asset investments by making it easier for retail investors and traders to access the digital asset market. By offering competitive prices, fast transaction speeds, and enhanced security, these OTC trading platforms are changing the digital asset landscape and making it accessible to everyone.</p>
                                            <p>MUDA is currently in its beta phase and will launch its official version soon. Users who sign up now can enjoy discounts on fees for the first three months. MUDA also has a referral program that rewards users for inviting their friends to join the platform.</p>
                                            <p>If you are looking for a reliable, efficient, and innovative OTC platform, <a href='https://muda.exchange'>MUDA</a> is the one for you. Visit https://muda.tech to learn more and start trading today.</p>
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                            <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                                {/* <Link to={"#"}><span>OTC Deal Room</span></Link> */}
                                                <Link to={"#"}><span>MUDA</span></Link>
                                                <Link to={"#"}><span>OTC</span></Link>
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
export default BlogOtc;