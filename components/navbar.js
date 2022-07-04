import React, { useState } from 'react'


const Navbar = () =>  {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setNavbarOpen(!navbarOpen)
    }
    navbarOpen ? document.body.style.position = 'fixed' : document.body.style.position = "relative"

    return (
        <nav className="nav-open"> 
        
            <a href="#home">
                <picture>
                    <source srcSet="../public/kayla-alewine-logo.svg" type="image/svg" />
                    <img className="nav__logo" id="logo" src="kayla-alewine-logo.svg" alt="letter K over letter A initials for Kayla Alewine"/>
            
                </picture>
             </a>
               
            <ul className={navbarOpen ? "nav__links nav__links-open" : "nav__links"}>
                <ul className="mobile-menu-dots">
                    <li > 
                        <picture>
                            <source srcSet="../public/narrow-fuchsia-dot-grid.svg" type="image/svg" />
                            <img src="narrow-fuchsia-dot-grid.svg" alt="fuchsia colored dot grid" />
            
                         </picture>
                    </li>
                    <li > 
                        <picture>
                            <source srcSet="../public/narrow-mint-green-dot-grid.svg" type="image/svg" />
                            <img src="narrow-mint-green-dot-grid.svg" alt="mint green colored dot grid" />
            
                         </picture>
                    </li>
                    <li > 
                        <picture>
                            <source srcSet="../public/narrow-mint-green-dot-grid.svg" type="image/svg" />
                            <img src="narrow-purple-dot-grid.svg" alt="purple dot grid" />
            
                         </picture>
                    </li>
                
                </ul>
                
    
                    
                <li className="nav__link" ><a href="#about" id="about-link">About</a></li>
                <li className="nav__link" ><a href="#work" id="work-link">Work</a></li>
                <li className="nav__link"><a href="#contact"  id="contact-link">Contact</a></li>
            </ul>
            <div className="nav__toggle" onClick={toggleMenu} >
                <span className={navbarOpen ? "nav__toggle-bar nav__toggle-bar-open" : "nav__toggle-bar"}></span>
                <span className={navbarOpen ? "nav__toggle-bar-open" : "nav__toggle-bar"}></span>
                <span className={navbarOpen ? "nav__toggle-bar nav__toggle-bar-open" : "nav__toggle-bar"}></span>
            </div> 
         </nav>
    )
}

export default Navbar