import React from 'react'

import './static/css/services-section.css'
import interior from './static/images/interior.png'
import architecture from './static/images/architecture.png'
import construction from './static/images/construction.png'
import background from '../../static/images/IMG_7301.jpg'
import { NavLink } from 'react-router-dom'

export default function ServicesSection() {
  return (
    <section className='services-section'>
      <div className='section-wrapper'>
        <div className='top-container'>
            <div className='image' style={{ backgroundImage: `url('${background}')` }}></div>
            <div className='text-container'>
                <h1>Services provided by us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae conse quuntur voluptatum laborum numquam blanditiis harum quis quam eius sed odit fugiat iusto fuga praesentium optio.
                    rerum provident similique accusantium nemo.
                </p>
                <NavLink to="/services" className='default-btn flex justify-center items-center'>Our services</NavLink>
            </div>
        </div>
        <div className='bottom-container'>
            <div className='service'>
                <img src={interior} alt='interior'></img>
                <h1>Interior design</h1>
                <p>Lorem ipsum dolor sit amet cons ectetur adipisicing elit. Maxime moll itia, molestiae quas vel sint commodi repudiandae conse
                    quuntur voluptatum labor
                </p>
            </div>
            <div className='service'>
                <img src={architecture} alt='architecture'></img>
                <h1>Architecture design</h1>
                <p>Lorem ipsum dolor sit amet cons ectetur adip elit. Maxime moll itia, molestiae quas vel 
                    sint c di repudiandae conse qu
                    untur voluptatum labor
                </p>
            </div>
            <div className='service'>
                <img src={construction} alt='construction'></img>
                <h1>Building construction</h1>
                <p>Lorem ipsum dolor sit amet cons ectetur adipisicing elit. Maxime moll itia, molestiae quas vel sint commodi repudiandae conse
                    quuntur voluptatum labor
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}
