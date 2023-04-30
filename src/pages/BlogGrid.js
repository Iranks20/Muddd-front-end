import React from 'react';
import {Link} from 'react-router-dom';

import PageLayout from './../layouts/PageLayout';
//images
import pic1  from './../assets/images/blog/blog-4.png';
import pic2  from './../assets/images/blog/pic2.jpg';
import pic3  from './../assets/images/blog/pic3.jpg';
import pic4  from './../assets/images/blog/pic4.jpg';
import pic5  from './../assets/images/blog/pic5.jpg';
import pic6  from './../assets/images/blog/pic6.jpg';
import avatar1  from './../assets/images/avatar/avatar6.png';
import avatar2  from './../assets/images/avatar/avatar2.jpg';
import avatar3  from './../assets/images/avatar/avatar3.jpg';

const gridData = [
    {image1: pic1, image2: avatar1, title:'Introducing Muda Africa!', date:'Marcg 6, 2023', owner:'UNCATEGORISED', description: 'There is a good chance that in the future, physical wallets will die out and you will be storing money on your smartphones, and that money will be crypto! So ask you’re self, what coin can I buy now, to make it big in the near future? Get access to the best crypto currencies in the world on Muda.'},
    {image1: pic2, image2: avatar2, title:'7 Ingenious Ways You Can Do With Crypto'},
    {image1: pic3, image2: avatar3, title:'14 Days To A Better Crypto Currency'},
    {image1: pic4, image2: avatar2, title:'Why You Should Not Go To Cryptocurrency.'},
    {image1: pic5, image2: avatar1, title:'Five Easy Rules Of bitcoin.'},
    {image1: pic6, image2: avatar3, title:'14 Days To A Better Crypto Currency.'},
];

function BlogGrid(){
    return(
        <>
            <div className="page-content">
                <PageLayout pageTitle="Blog Grid" />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {gridData.map((item, ind)=>(
                                <div className="col-md-6 col-xl-4 m-b30" key={ind}>
                                    <div className="dz-card style-1 blog-lg overlay-shine">
                                        <div className="dz-media">
                                            <Link to={"/blog-details"}><img src={item.image1} alt="" /></Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-author">
                                                        <Link to={"#"}>
                                                            <img src={item.image2} alt="" />
                                                            <span>{item.owner}</span>
                                                        </Link>
                                                    </li>
                                                    <li className="post-date"><Link to={"#"}>{item.date}</Link></li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                            <p>{item.description}</p>
                                            <Link to={"/blog-details1"} className="btn btn-primary">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination style-1 text-center">
                                        <li className="page-item"><Link to={"#"} className="page-link prev" ><i className="fas fa-chevron-left"></i></Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link active" >1</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link next" ><i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default BlogGrid;