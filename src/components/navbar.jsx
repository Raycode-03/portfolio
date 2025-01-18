import { Link } from 'react-router-dom';
import list from '../images/social/list.png'
import close from '../images/social/close.png'
// images
import logo_pic from '../images/background/download.png';
import { useState } from 'react';
const Navbar=()=>{
    const [changedisplay,setchangedisplay]=useState(false);
    const openmenu=(()=>{
        setchangedisplay(!changedisplay)
    });
    return(
        <header>
            <div id="navbar">
            <div className="logo">
                <Link to='/'>
                    <img src={logo_pic} alt="company's logo" className='logo_pic'/>
                </Link>
            </div>
            {changedisplay &&
            <div className="list">
                    <img src={close} alt="" className='logo_pic close' onClick={openmenu} />
                <Link href='/'>Home</Link>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href="#contact">Contact</a>
                </div>
            }
                <img src={list} alt="" className='logo_pic menu' onClick={openmenu}/>
            <div className='link'> 
                <Link href='/'>Home</Link>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href="#contact">Contact</a>
                
                
            </div>
            </div>
        </header>        
    )
}
export default Navbar
