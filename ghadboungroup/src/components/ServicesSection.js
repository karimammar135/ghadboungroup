import React from 'react'

import './static/css/services-section.css'
import interior from './static/images/interior.png'
import architecture from './static/images/architecture.png'
import construction from './static/images/construction.png'

export default function ServicesSection() {
  return (
    <section className='services-section'>
      <div className='section-wrapper'>
        <div className='top-container'>
            <div className='image' style={{ backgroundImage: `url('https://www.bhg.com/thmb/dcA2PxsOahxmk2LgzWAaqOWFfxU=/6000x0/filters:no_upscale():strip_icc()/200522-EB_12-Living-Room_1267-b13debcb440a4471981d7ac637e76e7a.jpg')` }}></div>
            <div className='text-container'>
                <h1>Services provided by us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae conse quuntur voluptatum laborum numquam blanditiis harum quis quam eius sed odit fugiat iusto fuga praesentium optio.
                    rerum provident similique accusantium nemo.
                </p>
                <button className='default-btn'>Our services</button>
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
