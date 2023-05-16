import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import PageLayout from '../layouts/PageLayout';
import avatar1  from './../assets/images/avatar/avatar3.jpg';
import avatar2  from './../assets/images/avatar/avatar2.jpg';
import avatar3  from './../assets/images/avatar/avatar1.jpg';

const gridData = [
    { path: '/blog-muda', image2: avatar1, title:'Introducing Muda Africa!', date:'Mar 6, 2023', owner:'By Pacho Micho', description: 'There is a good chance that in the future, physical wallets will die out and you chance that in the future will be storing money on your smartphones, and that money will be crypto! So ask you’re self, what coin can I buy now, to make it big in the near future? Get access to the best crypto currencies in the world on Muda will give clients the .'},
    { path: '/blog-launch', image2: avatar3, title:'MUDA Launch of ‘The Deal Room’ a Pan-continental OTC desk', date: 'Jan 12th 2022', owner: 'By AAeesha', description: 'MUDA, an established cryptocurrency OTC desk, is announcing the launch of The Deal Room; Pan-continental OTC desk. MUDA has been in operation in East Africa since 2019 and this development will give clients the ability to transact.' },
    { path: '/blog-otc', image2: avatar2, title:'How OTC Platforms are democratising access to investments', date: 'MARCH 31, 2023', owner: 'By Sandra Johns', description: 'Over-the-counter (OTC) trading is a popular way of buying and selling digital assets without relying on an intermediary. OTC trading allows traders to negotiate directly with each other, avoid price slippage, and access higher liquidity.'}
];

function BlogDetails(){
    const formDetails = (e) => {
        e.preventDefault();
    };
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="OTC Deal Room" />
                <section className="bg-light content-inner" style={{background: "white"}}>
                    <section className="clearfix section-wrapper1 bg-primary-light">
                        <div className="container">
                            <div className="form-wrapper-box style-1 text-center">
                                <div className="section-head " >
                                <p>Businesses use our otc to access deep liquidity and make payments accross several currencies using our trusted OTC service <a href="https://www.muda.exchange/">sign up</a> and start trading today! Reach Us on <a href="https://wa.me/25677129654">Whatsapp here</a></p>
                                    <h4 className="title m-t0">Rates</h4>
                                </div>
                                <table className="table dz-table">
                                <thead>
                                    <tr>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>USD</td>
                                    <td>3750</td>
                                    <td>1,000,000</td>
                                    <td>
                                      <a href="https://otc.muda.exchange/market" className="btn btn-lg btn-gradient btn-primary btn-shadow">Buy</a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>EUR</td>
                                    <td>4200</td>
                                    <td>500,000</td>
                                    <td>
                                      <a href="https://otc.muda.exchange/market" className="btn btn-lg btn-gradient btn-primary btn-shadow">Buy</a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>GBP</td>
                                    <td>3100</td>
                                    <td>750,000</td>
                                    <td>
                                      <a href="https://otc.muda.exchange/market" className="btn btn-lg btn-gradient btn-primary btn-shadow">Buy</a>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <br></br>
                    <div className="container">
                        <div className="widget-title">
                            <h4 className="title">Testimonials</h4>
                        </div>
                        <div className="row">
                            {gridData.map((item, ind)=>(
                                <div className="col-md-6 col-xl-4 m-b30" key={ind}>
                                    <div className="dz-card style-1 blog-lg overlay-shine">
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
                                            <h4 className="dz-title"><Link to={"/otc-room"}>{item.title}</Link></h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default BlogDetails;
