import React from 'react'

import TopSection from './TopSection'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

export default function ContactUS() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <section className='' id="contactus">
        <TopSection header="Contact us"/>
        <Info />
        <div className='flex justify-center items-center pl-[20px] pr-[20px] pt-[60px] pb-[60px]'>
          <div id="location" className='w-full max-w-[1245px] sm:w-4/5 flex flex-col items-center gap-[10px]'>
            <h2 className='font-semibold text-3xl sm:text-4xl text-center'>Find us on google maps</h2>
            <p className='text-center text-[#979797] text-[14px]'>Discover our location in Qana, South Lebanon on Google Maps for a visit to our innovative headquarters</p>
            <iframe className='border-0 rounded w-full mt-[15px] bg-[#4E443C]' height="350" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3338.236438130374!2d35.29554367568056!3d33.20789717348647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDEyJzI4LjQiTiAzNcKwMTcnNTMuMiJF!5e0!3m2!1sen!2slb!4v1722240593544!5m2!1sen!2slb" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  )
}

function Info(){
  return (
    <div className='w-full bg-[#7474740e] flex items-center justify-center p-[50px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex flex-col items-center gap-[10px] p-[15px] pr-[25px]'>
            <Component id="phone_number" head="Phone number" details="+961 71 351 678 /  78 974 151" icon={<i className="fa-solid fa-phone text-[#F8780F]"></i>}/>
            <Component id="email" head="Email address" details="ghadboungroup.leb@gmail.com" icon={<i className="fa-solid fa-envelopes-bulk text-[#F8780F]"></i>}/>
            <Component id="address" head="Location" details="Qana, South Lebanon" icon={<i className="fa-solid fa-location-dot text-[#F8780F]"></i>}/>
          </div>
        </div>
    </div>
  )
}

function Component( props ){
  return (
    <div id={props.id} className='flex items-center gap-[10px] w-full bg-white rounded p-[15px] pr-[25px]'>
      <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#f8780f33]'>
        {props.icon}
      </div>
      <div className='flex flex-col gap-[0px]'>
        <h3 className='text-[14px] font-semibold text-black'>{props.head}</h3>
        <span className='text-[12px] text-[#A3A3A3]'>{props.details}</span>
      </div>
    </div>
  )
}
