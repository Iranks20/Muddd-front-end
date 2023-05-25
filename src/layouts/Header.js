import React, {useEffect, useState} from 'react';
import {NavLink, Link, useNavigate, useLocation} from 'react-router-dom';

import Logo from './../assets/images/logo.png';
import LogoWhite from './../assets/images/logozz.svg';

const data0 = [
    {title:'Digital Assets Exchange', description: 'Muda operates a digital asset exchange that enables our users to easily buy and sell digital assets and virtual gift cards using our secure wallets. The wallets enable users to safely store their assets and instantly exchange them for fiat currency at affordable rates using local payment methods.'},   
];
const data1 = [
    {title:'Exchange Api', description: 'We have developed an API that can enables our partners to easily utilize use our infrastructure to scale their businesses. The API gives them access to our deep liquidity across several asset classes.' },
]
const data2 = [
    {title:'Fiat Connect', description: 'AS part of MUDA’s partnership with the CELO foundation, MUDA has launched a fiat connect API as that enables users to easily convert Celo assets into local currency starting with UGX.' },  
]
const data3 = [
    { title:'Currency OTC Desk', description: 'Our OTC desk is designed to enable businesses to easily access deep liquidity in any currency of their choice at the best rates. We are able to serve businesses with access to various currencies which include USD, USDT, USDC, EURO, KES, UGX, NGN, ZAR, XAF, GHS, TZS, RMB,among others. We enable businesses to access up to $10 million worth of liquidity on a daly basis. Businesses can use our online OTC desk to easily make a request and carryout the transaction. Alternatively, they can make the order through our WhatsApp channel. Get in touch to start trading today!'},
]
const data4 = [
    {title:'OTC Agents', description: 'We have developed a wallet that can enable users to tap into our liquidity to boost their businesses and added digital asset trading to their operations. Various businesses like mobile money agents, FX bureaus and merchant shops can easily use the MUDA wallet to add digital asset buying and selling to their operations in order to enable customers to easily trade their assets using local currency. Our wallet gives the agent access to deep liquidity and reliable real-time settlement. Agents can set up in minutes and get access to various assets such as gift cards, USDT, cUSD and other digital assets. Get in touch to become an Agent today!'}, 
]
const data5 = [
    {title:'Liquidity Rail', description: 'The MUDA liquidity rail is a solution designed to enable fintechs to transact with each other without the need for direct integrations and pre-funding. This is achieved by using blockchain technology as a bridge between the counter-parties. The liquidity rail enables fintechs to realise reduced costs of operation and increased levels of security. Read more Get in touch today!' },
]
const data6 = [
    {title:'MUDA X CASHLINK', description: 'MUDA and Cashlink are getting into a collaboration to make peer to peer payments easy, fast and trustworthy through empowering merchants with an opportunity to be their own bosses and earn more.' },
]

function Header(){
    const navigate = useNavigate();

    
    const handleDropdownItemClick = (data) => {
        
        const { title, description } = data;

        // Navigate to the next page and pass the details as query parameters
        navigate('/product-details', {
        state: {title, description }
        });
      };

    /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 

    const [sidebarOpen, setSidebarOpen] = useState(false);	
    const [showMenu, setShowMenu] = useState(false);   
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
                                    <a className="btn btn-outline-primary text-white" target="_blank" rel="noreferrer" href="https://web.muda.exchange/">Exchange</a>
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
                                    {/* <li><NavLink to={"/products"}>Products</NavLink></li> */}
                                    
                                    <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}
                                      
                                    ><Link to={"/products"}>Products</Link>
                                        <ul className="sub-menu">
                                            <li><a onClick={() => handleDropdownItemClick(data0[0])}> Digital Assets</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data1[0])}>Exchange Api</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data2[0])}>Fiat Connect</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data3[0])}>Currency OTC Desk</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data4[0])}>OTC Agents</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data5[0])}>Liquidity Rail</a></li>
                                            <li><a onClick={() => handleDropdownItemClick(data6[0])}>MUDA X CashLink</a></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                    {/* <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li> */}
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