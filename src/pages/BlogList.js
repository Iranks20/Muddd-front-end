import React from 'react';
import {Link} from 'react-router-dom';

import PageLayout from './../layouts/PageLayout';
import BlogSidebar from './../components/Blog/BlogSidebar';
//images
import blog1 from './../assets/images/blog/pic1.jpg';
import blog2 from './../assets/images/blog/pic2.jpg';
import blog3 from './../assets/images/blog/pic3.jpg';
import blog4 from './../assets/images/blog/pic4.jpg';
import avatar1 from './../assets/images/avatar/avatar1.jpg';
import avatar2 from './../assets/images/avatar/avatar2.jpg';
import avatar3 from './../assets/images/avatar/avatar3.jpg';

// 
import pic1  from './../assets/images/blog/blog-4.png';
import pic2  from './../assets/images/blog/blog_1.png';
import pic3  from './../assets/images/blog/blog-5.png';
import pic4  from './../assets/images/blog/blog-3.png';

const blocardList = [
    {image: pic1, path: '/blog-muda', image2: avatar1, title:'Introducing Muda Africa!', date:'Mar 6, 2023', owner:'UNCATEGORISED', description: 'There is a good chance that in the future, physical wallets will die out and you will be storing money on your smartphones, and that money will be crypto! So ask you’re self, what coin can I buy now, to make it big in the near future? Get access to the best crypto currencies in the world on Muda.'},
    {image: pic2, path: '/blog-technology', image2: avatar2, title:'The role of AI in the blockchain technology industry', date: 'MAR 22 2023', owner: 'ARTIFICIAL INTELLIGENCE, OPEN AI, TECHNOLOGY', description: 'AI has been one of the most transformative innovations of our generation.'},
    {image: pic3, path: '/blog-launch', image2: avatar3, title:'MUDA Launch of ‘The Deal Room’ a Pan-continental OTC desk', date: 'Jan 12th 2022', owner: 'DESIGN', description: 'MUDA, an established cryptocurrency OTC desk, is announcing the launch of The Deal Room; Pan-continental OTC desk. MUDA has been in operation in East Africa since 2019 and this development will give clients the ability to transact....' },
    {image: pic4, path: '/blog-otc', image2: avatar2, title:'How OTC Platforms are democratising access to investments', date: 'MARCH 31, 2023', owner: 'UNCATEGORISED', description: 'Over-the-counter (OTC) trading is a popular way of buying and selling digital assets without relying on an intermediary. OTC trading allows traders to negotiate directly with each other, avoid price slippage, and access higher liquidity.'},
    // {image1: pic5, image2: avatar1, title:'Five Easy Rules Of bitcoin.'},
    // {image1: pic6, image2: avatar3, title:'14 Days To A Better Crypto Currency.'},
];

// const blocardList = [
//     {image: blog1, image2: avatar1, title:'Five Things To Avoid In Cryptocurrency'},
//     {image: blog2, image2: avatar2, title:'Things That Make You Love Cryptocurrency'},
//     {image: blog3, image2: avatar3, title:'Why You Should Not Go To crypto currency.'},
//     {image: blog4, image2: avatar1, title:'14 Days To A Better Crypto Currency.'},
// ];

function BlogList(){
    return(
        <>
            <div className="page-content">
                <PageLayout pageTitle="Our Blogs" />
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="row">
                                    {blocardList.map((item, index)=>(
                                        <div className="col-lg-12 m-b40" key={index}>
                                            <div className="dz-card style-1 blog-half">
                                                <div className="dz-media">
                                                    <Link to={"/otc-room"}><img src={item.image} alt="" /></Link>
                                                    <ul className="dz-badge-list">
                                                        <li><Link to={"#"} className="dz-badge">{item.date}</Link></li>
                                                    </ul>
                                                    <Link to={item.path} className="btn btn-secondary">Read More</Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link to={"#"}>
                                                                    <img src={item.image2} alt="" className="me-2"/>
                                                                    <span>{item.owner}</span>
                                                                </Link>
                                                            </li>
                                                            {/* <li className="post-date"><Link to={"#"}>{item.date}</Link></li> */}
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={item.path}>{item.title}</Link></h4>
                                                    <p className="m-b0">{item.description}</p>
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
export default BlogList;