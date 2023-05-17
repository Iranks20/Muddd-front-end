import React from 'react';
import { Link} from 'react-router-dom';

//images
import shape1 from './../assets/images/home-banner/shape2.png';
import bgimage from './../assets/images/background/bg1.jpg';
import logowhite from './../assets/images/logo-white.png';
// import flags from './../assets/images/footer/world-map-with-flags1.png';

function Footer(){
    return(
        <>
            <footer className="site-footer style-1" id="footer">
                <img className="bg-shape1" src={shape1} alt="" />
                <div className="footer-top background-luminosity" style={{backgroundImage: "url("+ bgimage +")"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12" >
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"/"}><img src={logowhite} alt="" /></Link>
                                    </div>
                                    {/* <p>Muda is launching a token to power our eco-system, in order to provide decentralised finance to the masses. The MUDA token will power various solutions such as loans for P2P traders who form the crypto liquidity backbone in many developing countries, allowing millions to access crypto. MUDA plans to supercharge the P2P marketplace with DeFi loans that will be secured using the token.</p> */}
                                    <div className="dz-social-icon transparent space-10">
                                        <ul>
                                            <li><a className="fab fa-google" href="mailto:info@muda.tech"></a></li>
                                            <li><a target="_blank" className="fab fa-instagram" href="https://instagram.com/muda_hq?igshid=YmMyMTA2M2Y="></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/mudatech_?t=9xUIcKAWXE2KFGl-wtrkrA&s=09"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-youtube" href="https://www.youtube.com/@mudatech"></a></li>
                                            <li><a target="_" className="fab fa-google-play"href="https://play.google.com/store/apps/details?id=com.muda.exchange&hl=en_US&gl=US&pli=1"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6" >
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Other Links</h4>
                                    <ul>
                                        <li><Link to={"/otc-room"}>OTC Desk</Link></li>
                                        {/* <li><Link to={"/cash-link"}>CashLink</Link></li> */}
                                        {/* <li><Link to={"/blog"}>blog</Link></li> */}
                                        <li><Link to={"/blog"}>Our Blogs</Link></li>
                                        <li><Link to={"/blog"}>Products</Link></li>
                                        {/* <li><Link to={"/contact-us"}>Contact Us</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6" >
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Blog Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog"}>Introducing Muda Africa!</Link></h6>
                                                <span className="post-date"> March 6th, 2023</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog"}>The role of AI in the blockchain technology industry</Link></h6>
                                                <span className="post-date"> March 22, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-12" >
                                <div className="widget widget_locations">
                                    <h4 className="widget-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6 className="title">UGANDA</h6>
                                        <p>Top House, Plot 65, Kampala Road, Uganda</p>
                                        {/* <img src={flags} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">© 2023 Muda Tech. Proudly powered by MUDA</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;