import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import components from '../components/video';
import Animation from '../components/video'
import Footer from '../components/footer';
// images
import lap from '../images/background/lap1.jpg';


const Home_page=()=>{
    // the  list [] means it would only render once in useeffect
    const [showclock,setshowclock]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setshowclock(false);
        },7950)
    },[])
    
    
    return(
        <article>
           {showclock &&
                <div>
                    {components[0]()}
                </div>
           } 
            {!showclock &&(
        <div id='showclock'>   
            {components[1]()}
            <div className="deals">
            <h1 id='about'>About me</h1>
            <img src={lap} alt="" className='video' />
            <h1>Hello im Ray </h1>
            <p>
            Hi my name is Akerele Raymond, i am a passionate and results-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React, PHP. I'm proficient in building responsive and user-friendly web applications that deliver exceptional user experiences. I'm eager to ccontribute my skills and creativity to challenging projects and collaborate with talented teams to bring innovative ideas to life.
            </p>
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Mongodb</li>
                    <li>MySql</li>
                    <li>Php</li>
                    <li>React</li>
                    <li>Python</li>
                </ul>
            </div>
            </div>
        </div>
            )}
        <div class="rbp">
            <h1 className='deal_h1 product_h1' id='project'>Projects</h1>
            <div className="card">
                <Card/>
            </div>
        </div>
        {/* footer */}
        <Footer/>
    </article>

    )
}
export default Home_page