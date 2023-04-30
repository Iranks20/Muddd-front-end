import React from 'react';
import {Link} from 'react-router-dom';
//Images
import blog1 from './../../assets/images/blog/blog_1.png';
import blog2 from './../../assets/images/blog/blog-4.png';
import avatar1 from './../../assets/images/avatar/avatar6.png';
import avatar2 from './../../assets/images/avatar/avatar6.png';

const updatesBlog = [
    {image1: blog1, image2: avatar1, title:'The role of AI in the blockchain technology industry.', date1: 'MARCH 22nd 2023', heading: 'ARTIFICIAL INTELLIGENCE', description: 'AI has been one of the most transformative innovations of our generation. The technology is so robust that AI tools like Open AI’s Chat GPT are being alleged to potentially replace human jobs.'},
    {image1: blog2, image2: avatar2 , title:'Things That Make You Love Cryptocurrency.', date1: 'MARCH 6TH 2023', heading: 'INTRODUCING MUDA', description:'There is a good chance that in the future, physical wallets will die out and you will be storing money on your smartphones, and that money will be crypto! So ask you’re self, what coin can I buy now, to make it big in the near future? Get access to the best crypto currencies in the world on Muda.'},
    
];

function RecentNews(){
    return(
        <>
            {updatesBlog.map((data, ind)=>(
                <div className="dz-card style-1 blog-half m-b30" key={ind}>
                    <div className="dz-media">
                        <Link to={"/blog-details"}><img src={data.image1} alt="" /></Link>
                        <ul className="dz-badge-list">
                            <li><Link to={"#"} className="dz-badge">{data.date1}</Link></li>
                        </ul>
                        <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                    </div>
                    <div className="dz-info">
                        <div className="dz-meta">
                            <ul>
                                <li className="post-author">
                                    <Link to={"#"}>
                                        <img src={data.image2} alt=""  className="me-2"/>
                                        <span>{data.heading}</span>
                                    </Link>
                                </li>
                                {/* <li className="post-date"><Link to={"#"}> 12 May 2022</Link></li> */}
                            </ul>
                        </div>
                        <h4 className="dz-title"><Link to={"/blog-details"}>{data.title}</Link></h4>
                        <p className="m-b0">{data.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default RecentNews;