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
            <p className="footer__text">Designed and Built By Kayla Alewine | 2022</p>
        </footer>
    )
}

export default Footer