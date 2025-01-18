import React from 'react'
import  video_home from '../images/video/clock.mp4';
function video() {
  return (
    <div className="back hidden">
            <video muted loop autoPlay className="video v">
                <source src={video_home} type="video/mp4"/>
            </video>

        </div>
  )
}
function Animation(){
  return(
    <>
    
    </>
  )
}
const components=[video,Animation]
export default components
