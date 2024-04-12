import React, { useState, useEffect } from 'react'

import logo from './static/images/logo.png'
import './static/css/footer.css'

export default function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const[smallScreen, setSmallScreen] = useState(false)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        if (window.innerWidth > '600'){
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className='footer'>
            <MainContainer />
            <FooterBottom smallScreen={smallScreen} />
        </section>
    )
}


function MainContainer() {
    return (
        <div className='main_container'>
            <div className='description'>
                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                    <h1>Ghadboun group</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='links'>
                <h3>Service</h3>
                <ul>
                    <li>Interior design</li>
                    <li>Architecture design</li>
                    <li>Construction & biulding</li>
                    <li>Post tension</li>
                </ul>
            </div>
            <div className='links'>
                <h3>About us</h3>
                <ul>
                    <li>About us</li>
                    <li>Phone number</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='recent_works'>
                <div>
                    <h3>Recent works</h3>
                    <section className='works'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </section>
                </div>
            </div>
        </div>
    )
}

function FooterBottom({ smallScreen }) {
    return (
        <div className='footer_bottom'>
            <div className='line'></div>
            <div className='content'>
                <span>Copy Right @ 2024</span>
                {smallScreen && <span>Created with love</span>}
                <ul className='social-media-list'>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
        </div>
    )
}