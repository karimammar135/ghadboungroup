import React from 'react'

import TopSection from './TopSection'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

export default function ContactUS() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <section className=''>
        <TopSection header="Contact us"/>
        <div className='flex justify-center items-center pl-[20px] pr-[20px] pt-[60px] pb-[60px]'>
          <div className='w-full max-w-[1245px] sm:w-4/5 flex flex-col items-center gap-[10px]'>
            <h2 className='font-semibold text-3xl sm:text-4xl text-center'>Find us on google maps</h2>
            <p className='text-center text-[#979797] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint</p>
            <iframe className='border-0 rounded w-full mt-[15px]' height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11689.927197891893!2d35.29021192372544!3d33.2086157894989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e8155d5bc2851%3A0x95a1777b0c1e4476!2sQana!5e0!3m2!1sen!2slb!4v1714259024442!5m2!1sen!2slb" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  )
}
