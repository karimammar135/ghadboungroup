import React, {useEffect, useRef, useState } from 'react'

import './static/css/mainsection.css'
import { register } from 'swiper/element/bundle';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useOutletContext } from 'react-router-dom';

export default function MainSection() {
    const swiperRef = useRef(null)
    const [carousal_slides, setCarousal_slides] = useState(6)
    const [carousal_count, setCarousal_count] = useState(1)
    const [images, setImages] = useState(null)

    // Context
    const [showImage, setShowImage] = useOutletContext();

    // Fetching images from API route
    useEffect(() => {
        fetchImages();
    }, []);

    async function fetchImages() {
        try {
            const response = await fetch('/get_images/6/all/random')
            const data = await response.json()
            if (data.message != null){
                console.log('erorrrrrrr')
            }
            else {
                setImages(data)
            }
        } catch(error){
            console.error('Error fetching data:', error);
        }
    }

    // Adding swiper parameters on mount
    useEffect(() => {
        if (images != null){
            register();

            // get swiper elements
            const swiperEl = document.querySelector('swiper-container');
            const nextbtn = document.querySelector('.next')
            const prevbtn = document.querySelector('.prev')
            // swiper parameters
            const swiperParams = {
                slidesPerView: 3,
                breakpoints: {
                10: {
                    slidesPerView: 1.5,
                },
                580: {
                    slidesPerView: 3,
                },
                },
                on: {
                init() {
                    // ...
                },
                },
                injectStyles: [
                    `
                    :host {
                        width: 860px;
                        height: 470px;
                    }
                    @media (max-width: 1160px){
                        :host {
                            width: 680px;
                            height: 350px;
                        }
                    }
                    @media (max-width: 684px){
                        :host {
                            width: 100vw;
                        }
                    }
                    :host ::slotted(swiper-slide) {
                        overflow: hidden;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-color: '#717171';
                        scale: .7;
                        transition: scale 2s;
                    }
                    @media (max-width: 580px){
                        :host ::slotted(swiper-slide) {
                            scale: .8;
                        }
                    }
                    :host ::slotted(.swiper-slide-active) {
                        border: 2px solid #fff;
                        scale: 1;
                    }
                    `,
                ],     
            };
            // assign all parameters to Swiper element and initialize it
            Object.assign(swiperEl, swiperParams);
            swiperEl.initialize();

            // Swiping carousal
            nextbtn.addEventListener('click', () => {
                swiperEl.swiper.slideNext()
                setCarousal_count(prevCarousal_count => (prevCarousal_count !== carousal_slides) && prevCarousal_count + 1 || 1)
            })
            prevbtn.addEventListener('click', () => {
                swiperEl.swiper.slidePrev()
                setCarousal_count(prevCarousal_count => (prevCarousal_count != 1) && prevCarousal_count - 1 || carousal_slides)
            })
        }
    }, [images])

    // Show Image in details
    async function openImage(image_id) {
        for (let i = 0; i < images.length; i++) {
            if(images[i].id === image_id){
                setShowImage(images[i])
            }
        }
    }

    return (
        <section className='main-section'>
            <div className='overlay'></div>
            <div className='text-container-wrapper'>
                <div className='text-container'>
                    <ul className='social-media-list'>
                        <li><a target='_blank' href="https://www.instagram.com/ghadboun.group?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a target='_blank' href="https://www.tiktok.com/@ghadboungroup"><i className="fa-brands fa-tiktok"></i></a></li>
                        <li><a target='_blank' href="https://www.facebook.com/Ghadboun.Group"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                    </ul>
                    <div className='text'>
                        <h1>Design Your Space For Living</h1>
                        <button className='default-btn'>Take a Look</button>
                    </div>
                </div>
            </div>

            <div className='images-container'>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
                <div className='carousal'>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                         
                            {images != null && 
                            <swiper-container init="false" className="mySwiper" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="3" coverflow-effect-rotate="0" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="0" coverflow-effect-slide-shadows="true" loop="true">
                                {images.map((image) => {
                                    return <swiper-slide key={image.id} style={{ backgroundImage: `url(${image.image_url})` }} onClick={() => openImage(image.id)}></swiper-slide>
                                })}
                            </swiper-container>
                            || 
                            <>
                            <div className='w-screen nos:w-[600px] h-[350px] mid:h-[470px] flex items-center gap-[25px]'>
                                <div className='grow h-3/4'><Skeleton height="100%"></Skeleton></div>
                                <div className='w-1/2 h-full'><Skeleton height="100%"></Skeleton></div>
                                <div className='grow h-3/4'><Skeleton height="100%"></Skeleton></div>
                            </div>
                            </>}
                       
                    </SkeletonTheme>
                    <div className='pagination'>
                        <div className="counter">
                            <span>{carousal_count}/</span>
                            <span>{carousal_slides}</span>
                        </div>
                        <div className='line'></div>
                        <div className='paginators'>
                            <i className="prev fa-solid fa-angle-left"></i>
                            <i className="next fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
