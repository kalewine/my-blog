import React, { useState } from 'react'
import Image from 'next/dist/client/image';


const Navbar = () =>  {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setNavbarOpen(!navbarOpen)
    }
    // navbarOpen ? document.body.style.position = 'fixed' : document.body.style.position = "relative"

    return (
        <nav className="nav-open"> 
        
            <a href="#home">
                <Image
                    src="/kayla-alewine-logo.svg"
                    alt="letter K over letter A initials for Kayla Alewine"
                    width={40}
                    height={40}
                    className="nav__logo" 
                />
                
             </a>
               
            <ul className={navbarOpen ? "nav__links nav__links-open" : "nav__links"}>
                <ul className="mobile-menu-dots">
                    <li > 
                        <Image
                            src="/narrow-fuchsia-dot-grid.svg"
                            alt="fuchsia colored dot grid"
                            width={220}
                            height={120}
                        />
                        
                    </li>
                    <li > 
                        <Image
                            src="/narrow-mint-green-dot-grid.svg"
                            alt="mint green colored dot grid"
                            width={250}
                            height={150}
                        />
                    </li>
                    <li > 
                        <Image
                            src="/narrow-purple-dot-grid.svg"
                            alt="purple colored dot grid"
                            width={200}
                            height={120}
                        />
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