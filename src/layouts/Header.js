import React, {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

import Logo from './../assets/images/logo.png';
import LogoWhite from './../assets/images/logozz.svg';

function Header(){

    /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 

    const [sidebarOpen, setSidebarOpen] = useState(false);	
    // const [showMenu, setShowMenu] = useState(false);	   
    return(
        <>
            <header className="site-header mo-left header header-transparent style-1">
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <Link to={"/"} className="logo-dark"><img src={Logo} alt="" /></Link>
                                <Link to={"/"} className="logo-light"><img src={LogoWhite}  alt="" /></Link>
                            </div>
                            
                            <button  type="button"
                                className={`navbar-toggler  navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed' }`} 
                                onClick={()=>setSidebarOpen(!sidebarOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>                            
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <a className="btn btn-outline-primary text-white" target="_blank" rel="noreferrer" href="https://www.muda.exchange/">Exchange</a>
                                    <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://otc.muda.exchange/">Trading Desk</a>
                                </div>
                            </div>                           
                                
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? "show" : ""}`} id="navbarNavDropdown" >
                                <div className="logo-header mostion">
                                    <NavLink to={"#"} className="logo-dark"><img src={Logo} alt="" /></NavLink>
                                </div>                            
                                <ul className="nav navbar-nav navbar">
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/otc-room"}>OTC Desk</NavLink></li>
                                    {/* <li><NavLink to={"/cash-link"}>CashLink</NavLink></li> */}
                                    <li><NavLink to={"/blog"}>Blog</NavLink></li>
                                    <li><NavLink to={"/products"}>Products</NavLink></li>
                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                    {/* <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}
                                      
                                    ><Link to={"#"}>Blog</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"/blog-list"}>Blog list</NavLink></li>
                                            <li><NavLink to={"/blog"}>Blog grid</NavLink></li>
                                            <li><NavLink to={"/otc-room"}>OTC Deal Room</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li> */}
                                </ul>                               
                            
                                <div className="header-bottom">
                                    <div className="dz-social-icon">
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
                            
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header;