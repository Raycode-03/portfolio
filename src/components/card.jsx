import React, { useState } from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
// import Product from '../data/product.json';
// the videos
import v1 from "../images/deals/Screenshot (9).png";
import v2 from "../images/deals/Screenshot (10).png";
import v3 from "../images/deals/Screenshot (11).png";

function Card() {
   const [blogs,setblog]=useState([
    {title:'Ecommerce with js',image:v1,link:'http://github.com',id:1},
    {title:'Ecommerce with react',image:v2,link:'http://github.com',id:2},
    {title:'Node js Application',image:v3,link:'http://github.com',id:3},
   ])
  return (
    <div className='card_box'>
    {blogs.map((blog)=>(
        <div className='box one' key={blog.id}>
        <h4>{blog.title}</h4>
        <img src={blog.image} alt="" className='video' />
        <br />
        <span>
            <h5>
            <a href={blog.link}>To see application</a>
            </h5>
        </span>
        </div>
    ))}

        
       

          
          

    </div>
  )
}

export default Card