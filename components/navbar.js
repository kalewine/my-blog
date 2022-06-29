import React from 'react'

const Navbar = () =>  {
    return (
        <nav>
            <a href="#home">
                <picture>
                    <source srcSet="../public/kayla-alewine-logo.svg" type="image/svg" />
                    <img className="nav__logo" id="logo" src="kayla-alewine-logo.svg" alt="letter K over letter A initials for Kayla Alewine"/>
            
                </picture>
             </a>
               
            <ul className="nav__links" id="mobile-menu">
                <li className="nav__link" ><a href="#about" id="about-link">About</a></li>
                <li className="nav__link" ><a href="#work" id="work-link">Work</a></li>
                <li className="nav__link"><a href="#contact"  id="contact-link">Contact</a></li>
            </ul>
            <div className="nav__toggle" id="toggle-bars" onclick="openMenu()">
                <span className="nav__toggle-bar"></span>
                <span className="nav__toggle-bar"></span>
                <span className="nav__toggle-bar"></span>
            </div> 
         </nav>
    )
}

export default Navbar