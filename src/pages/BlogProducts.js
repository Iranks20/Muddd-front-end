import React from 'react';
import {Link, useLocation} from 'react-router-dom'

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';

import blog from './../assets/images/blog/blog-4.png';
import avat3 from './../assets/images/avatar/avatar6.png';


function BlogProducts(){
    const location = useLocation();
    const { state } = location;
    // Access the title and description from the previous page
    const { title, description, image } = state;
    console.log(title)
    // console.log(image1)
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle={title} />
                <section className="bg-light content-inner">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="bg-light blog-single dz-card sidebar">
                                    {/* <div className="dz-media dz-media-rounded">
                                        <img src={image} alt="" />
                                    </div> */}
                                    <div className="dz-info m-b30">
                                        {/* <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={avat3} alt="" /> 
                                                        <span>BY MUDATECH</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}>March 6th 2023</Link></li>
                                                <li className="post-comment"><Link to={"#"}>UNCATEGORISED</Link></li>
                                            </ul>
                                        </div> */}
                                        <h3 className="dz-title">{title}</h3>
                                        <div className="dz-post-text">
                                            <p>{description}</p>
                                            {/* <p>So ask you’re self, what coin can I buy now, to make it big in the near future? Get access to the best crypto currencies in the world on Muda. From the flexibility of swapping and trading cryptocurrencies, to DeFi and NFT applications on a secure website and smartphone App. Muda makes decentralised finance accessible to anyone, anywhere, anytime!</p>
                                            <blockquote className="wp-block-quote">
                                                <p>“ There is a good chance that in the future, physical wallets will die out and you will be storing money on your smartphones, and that money will be crypto!”.</p>
                                                <cite>mudatech</cite>
                                            </blockquote>
                                            <p>Muda is launching a token to power our eco-system, in order to provide decentralised finance to the masses. The MUDA token will power various solutions such as loans for P2P traders who form the crypto liquidity backbone in many developing countries, allowing millions to access crypto. MUDA plans to supercharge the P2P marketplace with DeFi loans that will be secured using the token.</p>
                                            <p>The token eco-system will consist of anchors will act to ensure network trust is maintained by locking the holdings into a liquidity pool that is then used to endorse the loan request from P2P sellers who would like to increase their operating capital. The issued loans will be used to process transactions and the generated fees will be sent to the liquidity pool as a profit for the anchors and other liquidity providers from the token holders. The MUDA token will be used to pay for fees, secure bonds, mint NFTs and much more.</p>
                                            <ul className="m-b30">
                                                <li>MUDA is committed to growing financial inclusion through digital assets.</li>
                                            </ul> */}
                                        </div>
                                        {/* <div className="dz-share-post">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-4">
                                <BlogSidebar />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default BlogProducts;