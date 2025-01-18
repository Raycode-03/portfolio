// import React from 'react'
// import deal1 from '../images/deals/download.jpeg';
// import deal2 from '../images/deals/61-4GVE-OgL._SR1236,1080_.jpg';
// import deal3 from '../images/deals/71zXYC8yVwL._SR1236,1080_.jpg';
// import {Fade,Zoom,Slide} from'react-slideshow-image'
// const slideimages=[
//     {src:deal1,
//         caption:"first image"
//     },
//     {src:deal2,
//         caption:"Second image"
//     },
//     {src:deal3,
//         caption:"Third image"
//     }
// ]
// const div_style={
//     display: "flex",
//     alignItems: "center",
//     flexDirection:"row",
//     justifyContent: "space-around",
//     background:"#efefef",
// }
// const slide_div={
//     display: "inline-block",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     width:"20rem",
// }
// const img_style={
//     height:"9rem",
//     width:"12rem",
//     background:"#efefef",
// }
// const spanstyle={
//     fontSize:"2px",
// }
// function slideshow() {
//   return (
//     <div className="slides" style={div_style}>
//           {/* Choose the desired transition effect from Fade, Zoom, or Slide */}
//         <Slide /* Replace with Zoom or Slide if preferred */>
//             {slideimages.map(( image, index) => (
//           <div key={index} style={slide_div}>
//             <img src={image.src} alt={image.caption} className='slide_img' style={img_style}/> {/* Use img tag for images */}
//           </div>
//         ))}
//       </Slide>
//     </div>
//   )
// }

// export default slideshow