import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AddImage() {
  return (
    <NavLink to="/upload_image" className='flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 pt-[5px] pb-[5px] pl-[10px] pr-[10px] fixed bottom-[50px] right-[25px] z-10'>
      <span className='text-white text-[15px] font-thin'>Add Image</span>
      <i className="fa-regular fa-square-plus text-white"></i>
    </NavLink>
  )
}
