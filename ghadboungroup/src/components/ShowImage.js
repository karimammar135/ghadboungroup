import classNames from 'classnames'
import React, { Children } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

const categories = {
  'KITCHEN': 'Kitchen',
  'LIVINGROOM': 'Living Room',
  'DOOR': 'Door',
  'BATHROOM': 'Bath Room',
  'BEDROOM': 'Bed Room',
  'EXTERIOR': 'Exterior',
  'OTHER': 'Other',
}

export default function ShowImage({ image, setShowImage }) {
  const navigate = useNavigate()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    })
  }

  // Close image
  const closeImage = () => {
    setShowImage(false)
  }

  return (
    <div className='min-h-screen w-screen fixed top-0 left-0 bg-[#000000a1] z-50 flex flex-col justify-center items-center gap-3'>
      <div className='grow flex flex-col justify-center items-center gap-3'>
        <i className="fa-regular fa-circle-xmark text-3xl text-white" onClick={() => setShowImage(false)}></i>
        <div>
          <NavigateTo to={`/editImage/${image.id}`} navigate={navigate} func={closeImage} className='text-white p-2 bg-slate-400 rounded cursor-pointer' placeholder="Edit Image"></NavigateTo>
          <img src={image.image_url} className='max-h-[70vh]'></img>
        </div>
        <h1 className='text-white text-4xl font-light'>{categories[image.category]}</h1>
      </div>
      <NavigateTo to={`gallery/${image.category}`} navigate={navigate} func={() => {scrollTop(); setShowImage(false)}} className='default-btn flex items-center justify-center mb-10' placeholder="Discover all"></NavigateTo>
    </div>
  )
}

function NavigateTo({to, navigate, func, className, placeholder}){
  return (
    <a onClick={() => {func(); navigate(to)}} className={className}>{placeholder}</a>
  )
}
