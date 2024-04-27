import React from 'react'

import backgroundImage from './static/images/skyview_carousel.jpg'

export default function TopSection({ header }) {
  return (
    <div className='h-[320px] w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <div className='h-full w-full flex items-center justify-center md:justify-start bg-[#3a332d33]'>
            <div className='flex gap-4 justify-center items-center md:ml-[50px]'>
                <div className='h-[45px] md:h-[55px] w-[4px] bg-white'></div>
                <h1 className='text-white text-5xl md:text-6xl font-bold'>{ header }</h1>
            </div>
        </div>
    </div>
  )
}
