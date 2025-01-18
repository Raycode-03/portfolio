import React from 'react';
// images
import logo_pic from '../images/background/download.png';
import telegram from "../images/social/telegram.png";
import whatsapp from "../images/social/whatsapp.png";
function footer() {
  return (
    <div>
          <footer class="hidden">
        <div class="img hidden" >
            
            <img src={logo_pic} alt=""className='logo_pic_footer' id='contact'/>
            </div>
            <div class="news">
                <form action="" method='post' onsubmit="return false">
                    <h2>LET'S CONNECT</h2><br/>
                    <p>Don't hesitate to send me a message if you'd like to chat or need help.My inbox is always open, I'm always happy to hear from you!! Feel free to message any of my accounts, anytime.</p>
                    <input type="email" placeholder="Enter your Email" class="new_input"/>
                    <textarea name="" id="" cols='34' rows='1' placeholder='message to send' className='message'/>
                    <button class="new_btn">Subscribe</button>
                </form>
        </div>
        <div class="hold">
      
        <div class="contact hidden">
            <h3><b class="c">Contact:</b> +2347064658911</h3>
            <h3><b class="c">Email:</b>Akereleolasun5@gmail.com</h3>
            <h3><b class="c">Address:</b>410 Melford Okulo Road, Yenizeue-gene, Yenagoa.</h3>
            <div class="social">
                <h3> <b class="c">Follow Us</b> </h3>
                <a href="http://t.me/Raystar03"><img src={telegram} alt=""/></a>
                <a href="http://wa.me/07064658911"><img src={whatsapp} alt=""/></a>
            </div>
            
        </div>        
        
    </div>
    <p class="hub2024 c"><a href="" className='c'> @ copyright {new Date().getFullYear()} Raywebsite.com</a></p>
    
    </footer>
        
  
    </div>
  )
}

export default footer