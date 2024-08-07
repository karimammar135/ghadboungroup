import React from 'react'
import TopSection from './TopSection'
import './static/css/services.css'

import architecture from './static/images/architecture-icon.png'
import interior_exterior from './static/images/interior-exterior-icon.png'
import furniture from './static/images/furniture-icon.png'
import post_tension from './static/images/post-tension-icon.png'
import modeling from './static/images/3dmodeling-icon.png'

import orange_house from './static/images/orange-house.png'
import post_tensioning from './static/images/post_tensioning.jpg'

export default function Sevices() {
  return (
    <section>
      <TopSection header="Services"/>

      <div id="modern-features"  className='w-full flex flex-col items-center gap-[40px] sm:gap-[50px] mt-[60px] mb-[60px] pr-[15px] pl-[15px] sm:pr-[25px] sm:pl-[25px]'>
        <div className='flex flex-col items-center gap-5'>
          <span className='uppercase text-primary font-medium text-sm tracking-[4px]'>Our Services</span>
          <h1 className='capitalize text-4xl font-semibold text-center'>Best services by ghadboun group</h1>
          <p className='text-[#747474] max-w-[740px] 2xl:max-w-full text-center font-light'>Experience unparalleled excellence in construction, architecture, and interior design with Ghadboun Group's cutting-edge technology and innovative solutions.</p>
        </div>

        <ModernFeatures />

        <InfoSection />
      </div>
    </section>
  )
}

function ModernFeatures(){
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-11/12'>
      <div id="architecture" className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
        <img src={architecture}></img>
        <h2 className='text-2xl'>Architecture</h2>
        <p className='text-1xl text-[#747474] open-sans'>Creating iconic structures with sustainable designs, blending aesthetics and functionality to redefine urban landscapes</p>
      </div>
      <div id='interior-exterior' className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
        <img src={interior_exterior}></img>
        <h2 className='text-2xl'>Interior & Exterior</h2>
        <p className='text-1xl text-[#747474] open-sans'>Transform spaces with modern aesthetics, personalized touches, and functional layouts, creating elegant, inviting, and practical environments</p>
      </div>
      <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
        <img src={furniture}></img>
        <h2 className='text-2xl'>Furniture</h2>
        <p className='text-1xl text-[#747474] open-sans'>Crafting bespoke furniture with exceptional craftsmanship, innovative designs, and high-quality materials for timeless elegance and comfort</p>
      </div>
      <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
        <img src={post_tension}></img>
        <h2 className='text-2xl'>Post-Tension concrete</h2>
        <p className='text-1xl text-[#747474] open-sans'>Enhancing strength, flexibility, and efficiency in construction projects</p>
      </div>
      <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
        <img src={modeling}></img>
        <h2 className='text-2xl'>3D Modeling</h2>
        <p className='text-1xl text-[#747474] open-sans'>Visualizing designs with precision, creativity, and enhanced detail, that can be viewed by our client before building</p>
      </div>
    </div>
  )
}

function InfoSection(){
  return (
    <section className='flex items-center justify-center mt-[10px]'>
      <div className='flex flex-col w-11/12 gap-[15px]'>
        <h1 className='text-[36px] nos:text-[50px] nine:text-[64px] font-bold'>Start your project with us!</h1>
        <div className='content py-2 flex flex-col nine:block'> 
          <img src={orange_house} className='float-right min-w-[100%] nine:max-w-[60%] nine:min-w-[0px] pb-[20px]'></img>
          <div className=''>
            <div className='flex flex-col gap-[10px] mb-[20px]'>
              <h3 className='text-[24px]'>Conception </h3>
              <p className='text-[16px] text-[#4F4F4F] font-light'>Ghadboun Group's project conception phase involves innovative brainstorming, detailed design development, and client collaboration to create visionary, functional, and aesthetically pleasing concepts.</p>
            </div>
            <div className='mb-[20px]'>
              <h3 className='text-[24px] mb-[10px]'>Zoning and Planning</h3>
              <p className='text-[16px] text-[#4F4F4F] font-light'>During zoning and planning, Ghadboun Group ensures compliance with regulations, optimizes space utilization, and strategically plans layouts for efficient and sustainable project execution.</p>
            </div>
            <div className='mb-[20px]'>
              <h3 className='text-[24px] mb-[10px]'>Construction</h3>
              <p className='text-[16px] text-[#4F4F4F] font-light'>In the construction phase, Ghadboun Group utilizes advanced techniques and high-quality materials to build durable, efficient, and cutting-edge structures, ensuring timely project delivery.</p>
            </div>
            <div className='mb-[20px]'>
              <h3 className='text-[24px] mb-[10px]'>Finishes</h3>
              <p className='text-[16px] text-[#4F4F4F] font-light'>Ghadboun Group's finishes stage focuses on meticulous attention to detail, selecting premium materials and applying expert craftsmanship to achieve elegant and flawless project completion.</p>
            </div>
            <div id='post-tension' className='mb-[20px]'>
              <h3 className='text-[24px] mb-[10px]'>Post-Tension Concrete</h3>
              <div style={{ backgroundImage: `url(${post_tensioning})` }} className='bg-[#4E443C] w-full h-[300px] nos:h-[350px] vl:h-[450px] mb-[10px] bg-cover bg-no-repeat bg-center rounded-md'></div>
              <p className='text-[16px] text-[#4F4F4F] font-light'> Ghadboun grroup uses Post-tensioning which is the most modern and up to date method used in constructions. Post-tensioning is a method of reinforcing (strengthening) concrete or other materials with high-strength steel strands or bars, typically referred to as tendons..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}