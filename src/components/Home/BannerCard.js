import React from 'react';

import coin1 from './../../assets/images/coins/coin11.png';
import coin3 from './../../assets/images/coins/coin5.png';
import coin4 from './../../assets/images/coins/coin2.png';
import coin5 from './../../assets/images/coins/ghana.png';
import coin6 from './../../assets/images/coins/naira.png';
import coin7 from './../../assets/images/coins/ugx.jpg';

const cardData = [
    {image: coin4, title:'US Dollar', subtitle:'USD', price:'1.00', percent:'0.999'},
    {image: coin1, title:'KENYAN SHS', subtitle:'KSHS', price:'0.0073', percent:'1.70'},
    {image: coin5, title:'GHANA Cedi', subtitle:'Cedi', price:'0.093', percent:'1.30'},
    // {image: coin6, title:'NIGERIAN NAIRA', subtitle:'Naira', price:'0.0022', percent:'0.70'},
    // {image: coin7, title:'UGANDAN SHS', subtitle:'UGX', price:'0.00027', percent:'0.010'},
];

function BannerCard(){
    return(
        <> 
            {cardData.map((data, index)=>(
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                    <div className="icon-bx-wraper style-1 box-hover">
                        <div className="icon-media">
                            <img src={data.image} alt="" />
                            <div className="icon-info">
                                <h5 className="title">{data.title}</h5>
                                <span>{data.subtitle}</span>
                            </div>
                        </div>
                        <div className="icon-content">
                            <ul className="price">
                                <li>
                                    <h6 className="mb-0 amount">${data.price}</h6>
                                    <span className= {`percentage ${index===2 ? "text-green" : "text-red"}`}>{data.percent}%</span>
                                </li>
                                <li>
                                    <span>Latest price</span>
                                    <span>24h change</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BannerCard;