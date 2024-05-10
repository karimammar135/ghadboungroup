import React from 'react'

const categories = {
  'KITCHEN': 'Kitchen',
  'LIVINGROOM': 'Living Room',
  'BATHROOM': 'Bath Room',
  'BEDROOM': 'Bed Room',
  'EXTERIOR': 'Exterior'
}

export default function ShowImage({ image, setShowImage }) {
  console.log(image)

  return (
    <div className='min-h-screen w-screen fixed top-0 left-0 bg-[#000000a1] z-50 flex flex-col justify-center items-center gap-3'>
      <div className='grow overflow-scroll flex flex-col justify-center items-center gap-3'>
        <i className="fa-regular fa-circle-xmark text-3xl text-white" onClick={() => setShowImage(false)}></i>
        <img src={image.image_url}></img>
        <h1 className='text-white text-4xl font-light'>{categories[image.category]}</h1>
      </div>
      <a className='default-btn flex items-center justify-center mb-10'>Discover all</a>
    </div>
  )
}
