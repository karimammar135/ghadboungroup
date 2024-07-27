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
            <div className='image bg-[#4E443C]' style={{ backgroundImage: `url('${background}')` }}></div>
            <div className='text-container'>
                <h1>Services provided by us</h1>
                <p>Ghadboun Group provides exceptional construction services, including architecture and interior design. Utilizing modern features like Post-Tension concrete and 3D modeling, we deliver innovative, high-quality projects.
                </p>
                <NavLink to="/services" onClick={() => window.scrollTo(0, 0)} className='default-btn flex justify-center items-center'>Our services</NavLink>
            </div>
        </div>
        <div className='bottom-container'>
            <div className='service'>
                <img src={interior} alt='interior'></img>
                <h1>Interior design</h1>
                <p>Ghadboun Group's interior design transforms spaces with modern aesthetics, personalized touches, and functional layouts, creating elegant, inviting, and practical environments
                </p>
            </div>
            <div className='service'>
                <img src={architecture} alt='architecture'></img>
                <h1>Architecture design</h1>
                <p>Ghadboun Group excels in innovative architecture, creating iconic structures with sustainable designs, blending aesthetics and functionality to redefine urban landscapes
                </p>
            </div>
            <div className='service'>
                <img src={construction} alt='construction'></img>
                <h1>Building construction</h1>
                <p>Ghadboun Group's building construction services ensure quality, efficiency, and durability, delivering projects on time with innovative techniques and exceptional craftsmanship
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}
