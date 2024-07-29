import React, { useState, useEffect } from 'react'

import logo from './static/images/logo.png'
import './static/css/footer.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function Footer({ setShowImage, scrollTo }) {
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
            <MainContainer setShowImage={setShowImage} scrollTo={scrollTo} />
            <FooterBottom smallScreen={smallScreen} />
        </section>
    )
}

function MainContainer({ setShowImage, scrollTo }) {
    const [images, setImages] = useState(null)

    // Fetching images from API route
    useEffect(() => {
        fetchImages();
    }, []);

    async function fetchImages() {
        try {
            const response = await fetch('/get_images/6/all/newest')
            const data = await response.json()
            setImages(data)
        } catch(error){
            console.error('Error fetching data:', error);
        }
    }

    // Show Image in details
    async function openImage(image_id) {
        for (let i = 0; i < images.length; i++) {
            if(images[i].id === image_id){
                setShowImage(images[i])
            }
        }
    }
    
    return (
        <SkeletonTheme baseColor="#CDCDCD" highlightColor="#EBEBEB">
        <div className='main_container'>
            <div className='description'>
                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                    <h1>Ghadboun group</h1>
                </div>
                <p>Innovative construction, architecture, wood works and interior design solutions.</p>
            </div>
            <div className='links'>
                <h3>Service</h3>
                <ul>
                    <li onClick={() => scrollTo('services', 'modern-features', 'start')}>Modern features</li>
                    <li onClick={() => scrollTo('services', 'architecture')}>Architecture design</li>
                    <li onClick={() => scrollTo('services', 'interior-exterior')}>Interior design</li>
                    <li onClick={() => scrollTo('services', 'post-tension')}>Post tension</li>
                </ul>
            </div>
            <div className='links'>
                <h3>About us</h3>
                <ul>
                    <li onClick={() => scrollTo('contactus', 'email')}>Email</li>
                    <li onClick={() => scrollTo('contactus', 'phone_number')}>Phone number</li>
                    <li onClick={() => scrollTo('contactus', 'location')}>Location</li>
                    <li onClick={() => scrollTo('contactus', 'address')}>Address</li>
                </ul>
            </div>
            <div className='recent_works'>
                <div>
                    <h3>Recent works</h3>
                    <section className='works'>
                        {images != null && 
                            images.map((image) => {
                                return <div key={image.id} style={{ backgroundImage: `url(${image.image_url})` }} onClick={() => openImage(image.id)}></div>
                            })
                            ||
                            <>
                                <Skeleton height="65px" width="65px"></Skeleton>
                                <Skeleton height="65px" width="65px"></Skeleton>
                                <Skeleton height="65px" width="65px"></Skeleton>
                                <Skeleton height="65px" width="65px"></Skeleton>
                                <Skeleton height="65px" width="65px"></Skeleton>
                                <Skeleton height="65px" width="65px"></Skeleton>
                            </>
                        }
                    </section>
                </div>
            </div>
        </div>
        </SkeletonTheme>
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
                    <li><a target='_blank' href="https://www.instagram.com/ghadboun.group?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a target='_blank' href="https://www.tiktok.com/@ghadboungroup"><i className="fa-brands fa-tiktok"></i></a></li>
                    <li><a target='_blank' href="https://www.facebook.com/Ghadboun.Group"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
        </div>
    )
}
