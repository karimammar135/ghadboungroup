import React, {useEffect, useRef, useState } from 'react'

import './static/css/mainsection.css'

import { register } from 'swiper/element/bundle';
import img1 from './static/images/img1.jpg'
import img2 from './static/images/img2.jpg'
import img3 from './static/images/img3.jpg'
import img4 from './static/images/img4.jpg'
import img5 from './static/images/img5.jpg'
import img6 from './static/images/img6.jpg'

export default function MainSection() {
    const swiperRef = useRef(null)
    const [carousal_slides, setCarousal_slides] = useState(6)
    const [carousal_count, setCarousal_count] = useState(1)

    // Adding swiper parameters on mount
    useEffect(() => {
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
    }, [])

    return (
        <section className='main-section'>
            <div className='overlay'></div>
            <div className='text-container-wrapper'>
                <div className='text-container'>
                    <ul className='social-media-list'>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
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
                    <swiper-container init="false" className="mySwiper" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="3" coverflow-effect-rotate="0" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="0" coverflow-effect-slide-shadows="true" loop="true">
                        <swiper-slide style={{ backgroundImage: `url(${img1})` }}></swiper-slide>
                        <swiper-slide style={{ backgroundImage: `url(${img2})` }}></swiper-slide>
                        <swiper-slide style={{ backgroundImage: `url(${img3})` }}></swiper-slide>
                        <swiper-slide style={{ backgroundImage: `url(${img4})` }}></swiper-slide>
                        <swiper-slide style={{ backgroundImage: `url(${img5})` }}></swiper-slide>
                        <swiper-slide style={{ backgroundImage: `url(${img6})` }}></swiper-slide>
                    </swiper-container>
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
