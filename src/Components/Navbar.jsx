import React, { useState } from 'react';

// import { link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import './navbar.css';

function Navbar(){
    const[ active ,setActive] = useState("nav_menu");
    const[toggleIcon , setToggleIcon]=useState("nav_toggler");

    const navToggle = () =>{
        active=== 'nav_menu'
         ? setActive('nav_menu nav_active')
         : setActive("nav_menu");

         //toggler icon
        toggleIcon ==='nav_toggler'
        ? setToggleIcon('nav_toggler toggle')
        : setToggleIcon('nav_toggler ');
    }

    return(
        <>
       <nav className='nav'>
        <a href='#' className='nav_brand'> <img src="images/logo12.png" alt="company logo" srcset="" /></a>
        <ul className={active}>
            <li className="nav_item"><NavLink to="/" className="nav-link">Home</NavLink> </li>
            {/* <li className="nav_item"><NavLink to="/about" className="nav-link">About</NavLink></li> */}
            <li className="nav_item"><NavLink to="/team" className="nav-link">Our teams</NavLink></li>
            <li className="nav_item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
            <li className="nav_item"><NavLink to="/careers" className="nav-link">Careers</NavLink></li>
            <li className="nav_item"><NavLink to="/company" className="nav-link">Company</NavLink> </li>           
            <li className="nav_item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
            <li className="nav_item"><NavLink to="/contact" className="nav-link">Contact us</NavLink></li>

        </ul>
        <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        </div>
       </nav>
        </>
    );
}

export default Navbar;