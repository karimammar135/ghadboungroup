import React from 'react'
import TopSection from './TopSection'

import architecture from './static/images/architecture-icon.png'
import interior_exterior from './static/images/interior-exterior-icon.png'
import furniture from './static/images/furniture-icon.png'
import post_tension from './static/images/post-tension-icon.png'
import modeling from './static/images/3dmodeling-icon.png'

export default function Sevices() {
  return (
    <section>
      <TopSection header="Services"/>

      <div className='w-full flex flex-col items-center gap-[40px] sm:gap-[50px] mt-[60px] mb-[60px] pr-[15px] pl-[15px] sm:pr-[25px] sm:pl-[25px]' id="modern-features">
        <div className='flex flex-col items-center gap-5'>
          <span className='uppercase text-primary font-medium text-sm tracking-[4px]'>Our Services</span>
          <h1 className='capitalize text-4xl font-semibold text-center'>Best services by ghadboun group</h1>
          <p className='text-[#747474] max-w-[740px] 2xl:max-w-full text-center font-light'>LLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi 
              repudiandae consequuntur voluptatum laborum</p>
        </div>

        <div id="modern-features" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-11/12'>
          <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
            <img src={architecture}></img>
            <h2 className='text-2xl'>Architecture</h2>
            <p className='text-1xl text-[#747474] open-sans'>Architecture is an amazing technique that is used to develop your house in a very organied way</p>
          </div>
          <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
            <img src={interior_exterior}></img>
            <h2 className='text-2xl'>Interior & Exterior</h2>
            <p className='text-1xl text-[#747474] open-sans'>Architecture is an amazing technique that is used to develop your house in a very organied way</p>
          </div>
          <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
            <img src={furniture}></img>
            <h2 className='text-2xl'>Furniture</h2>
            <p className='text-1xl text-[#747474] open-sans'>Architecture is an amazing technique that is used to develop your house in a very organied way</p>
          </div>
          <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
            <img src={post_tension}></img>
            <h2 className='text-2xl'>Post-Tension concrete</h2>
            <p className='text-1xl text-[#747474] open-sans'>Architecture is an amazing technique that is used to develop your house in a very organied way</p>
          </div>
          <div className='rounded-[5px] border-[1.5px] border-primary p-[25px] flex flex-col items-start gap-[10px]'>
            <img src={modeling}></img>
            <h2 className='text-2xl'>3D Modeling</h2>
            <p className='text-1xl text-[#747474] open-sans'>Architecture is an amazing technique that is used to develop your house in a very organied way</p>
          </div>
        </div>
      </div>
    </section>
  )
}
