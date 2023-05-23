import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import PageLayout from './../layouts/PageLayout';
import BlogSidebar from './../components/Blog/BlogSidebar';
//images
import pic1  from './../assets/images/blog/blog-8.png';
import pic7  from './../assets/images/blog/pic2.jpg';
import pic8  from './../assets/images/blog/about-5.jpg';
import pic3  from './../assets/images/blog/blog-5.png';
import pic5  from './../assets/images/blog/pic4.jpg';
import pic6  from './../assets/images/blog/blog-9.png';
import pic4  from './../assets/images/blog/blog-3.png';
import avatar1  from './../assets/images/avatar/avatar6.png';
import avatar2  from './../assets/images/avatar/avatar6.png';
import avatar3  from './../assets/images/avatar/avatar6.png';

const blocardList = [
    {image1: pic1,  image2: avatar1, title:'Digital Assets Exchange', date:'Mar 6, 2023', owner:'UNCATEGORISED', description: 'Muda operates a digital asset exchange that enables our users to easily buy and sell digital assets and virtual gift cards using our secure wallets. The wallets enable users to safely store their assets and instantly exchange them for fiat currency at affordable rates using local payment methods.'},
    {image1: pic3,  image2: avatar3, title:'Exchange Api', date: 'Jan 12th 2022', owner: 'DESIGN', description: 'We have developed an API that can enables our partners to easily utilize use our infrastructure to scale their businesses. The API gives them access to our deep liquidity across several asset classes.' },
    {image1: pic5,  image2: avatar3, title:'Fiat Connect', date: 'Jan 12th 2022', owner: 'DESIGN', description: 'AS part of MUDA’s partnership with the CELO foundation, MUDA has launched a fiat connect API as that enables users to easily convert Celo assets into local currency starting with UGX.' },
    {image1: pic4,  image2: avatar2, title:'Currency OTC Desk', date: 'MAR 22 2023', owner: 'ARTIFICIAL INTELLIGENCE, OPEN AI, TECHNOLOGY', description: 'Our OTC desk is designed to enable business to easily access deep liquidity in any currency of their choice at the best rates. We are able to serve business with access to various currencies which include USD, USDT, USDC, EURO, KES, UGX, NGN, ZAR, XAF, GHS, TZS, RMB and others. We able business to access up to $10 million worth of liquidity on a daily basis. Businesses can use our online OTC desk to easily make a request and carry out the transaction, alternatively they can make the order through our WhatsApp channel. Get in touch to start trading today!'},
    {image1: pic7,  image2: avatar2, title:'OTC Agents', date: 'MARCH 31, 2023', owner: 'UNCATEGORISED', description: 'We have developed a wallet that can enable users to tap into our liquidity to boost their businesses and added digital asset trading to their operations. Various businesses like mobile money agents, FX bureaus and merchant shops can easily use the MUDA wallet to add digital asset buying and selling to their operations in order to enable customers to easily trade their assets using local currency. Our wallet gives the agent access to deep liquidity and reliable real-time settlement. Agents can set up in minutes and get access to various assets such as gift cards, USDT, cUSD and other digital assets. Get in touch to become an Agent today!'},
    {image1: pic6,  image2: avatar3, title:'Liquidity Rail', date: 'Jan 12th 2022', owner: 'DESIGN', description: 'The MUDA liquidity rail is a solution designed to enable fintechs to transact with each other without the need for direct integrations and pre-funding. This is achieved by using blockchain technology as a bridge between the counter-parties. The liquidity rail enables fintechs to realise reduced costs of operation and increased levels of security. Read more Get in touch today!' },
    {image1: pic8,  image2: avatar3, title:'MUDA X CASHLINK', date: 'Jan 12th 2022', owner: 'DESIGN', description: 'MUDA and Cashlink are getting into a collaboration to make peer to peer payments easy, fast and trustworthy through empowering merchants with an opportunity to be their own bosses and earn more.' },
];

function ProductList(){
    const navigate = useNavigate();

    const navigateToNextPage = (item) => {
        // Store the details of the clicked card (title and description)
        const { image1, title, description } = item;
        // Navigate to the next page and pass the details as query parameters
        navigate('/product-details', {
        state: { image: image1, title, description }
        });
    };

    const cardStyle = {
        height: '300px', // Set a fixed height for the card description container
        overflow: 'hidden'
      };
    
      const descriptionStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '6', // Number of lines to show
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      };
    return(
        <>
            <div className="page-content">
                <PageLayout pageTitle="Our Products" />
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="row">
                                    {blocardList.map((item, index)=>(
                                        <div className="col-lg-12 m-b40" key={index}>
                                            <div className="dz-card style-1 blog-half" style={cardStyle}>
                                                <div className="dz-media">
                                                    <Link><img src={item.image1} alt="" /></Link>
                                                    <a className="btn btn-secondary" onClick={() => navigateToNextPage(item)}>Read More</a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title"><Link to={item.path}>{item.title}</Link></h4>
                                                    <p className="m-b0" style={descriptionStyle}>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination style-1 text-center">
                                                <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                            </ul>
                                        </nav>
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
export default ProductList;