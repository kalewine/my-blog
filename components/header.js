import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'


const Header = () =>  {
    return (
        <header>
            <Navbar />
            <div className="header__positioner">
                <section className="header__title">
                    <div  className="header__dots-left">
                        <Image
                            src="/white-dot-grid.svg"
                            alt="square grid of white dots"
                            width={125}
                            height={125}
                        
                        />
                    </div>
                    <div className="header__text">
                        <h1>Kayla Alewine&apos;s Blog</h1>
                        <p>a coding apprentice&apos;s journey</p>
                    </div>
                   
                </section>
                <section className="header__bio">
                   
                    <Image
                    src="/kayla-alewine-headshot@2x.jpg"
                    alt="headshot of Kayla Alewine"
                    width={250}
                    height={250}
                    className="bio__img"
                    />
                
                </section>
            </div>
        </header>
    )
}

export default Header;