import React from 'react'

import { NavLink } from 'react-router-dom'

const categories = {
  'KITCHEN': 'Kitchen',
  'LIVINGROOM': 'Living Room',
  'BATHROOM': 'Bath Room',
  'BEDROOM': 'Bed Room',
  'EXTERIOR': 'Exterior'
}

export default function ShowImage({ image, setShowImage }) {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    })
  }

  return (
    <div className='min-h-screen w-screen fixed top-0 left-0 bg-[#000000a1] z-50 flex flex-col justify-center items-center gap-3'>
      <div className='grow flex flex-col justify-center items-center gap-3'>
        <i className="fa-regular fa-circle-xmark text-3xl text-white" onClick={() => setShowImage(false)}></i>
        <img src={image.image_url} className='max-h-[70vh]'></img>
        <h1 className='text-white text-4xl font-light'>{categories[image.category]}</h1>
      </div>
      <NavLink to={`gallery/${image.category}`} onClick={() => {scrollTop(); setShowImage(false)}} className='default-btn flex items-center justify-center mb-10'>Discover all</NavLink>
    </div>
  )
}
