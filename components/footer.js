import React from 'react'

const Footer = () =>  {
    return (
        <footer>
            <a href="#home">
                <picture>
                    <source srcSet="../public/kayla-alewine-logo.svg" type="image/svg" />
                    <img className="footer__logo" src="kayla-alewine-logo.svg" alt="black K over A logo representing Kayla Alewine's initials" />
                 </picture>
            </a>
            <div className="footer__text-container">
                <p className="footer__text">Designed and Built By Kayla Alewine | 2022 <br></br></p>
                <p className="footer__disclaimer">The views expressed in this blog belong soley to Kayla Alewine and do not reflect the views or opinions of any affilate companies or organizations.</p>
            </div>
        </footer>
    )
}

export default Footer