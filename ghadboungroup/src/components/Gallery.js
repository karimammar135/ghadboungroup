import React, { useEffect, useState } from 'react'

import { useParams, useOutletContext } from 'react-router-dom'
import TopSection from './TopSection'

import GalleryImages from './GalleryImages'
import Pagination from './Pagination'

const categories = {
  'all': '',
  'KITCHEN': 'Kitchen',
  'LIVINGROOM': 'Living Room',
  'BATHROOM': 'Bath Room',
  'BEDROOM': 'Bed Room',
  'EXTERIOR': 'Exterior'
}

export default function Gallery() {
  const { category_param } = useParams()
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  // Context
  const [showImage, setShowImage] = useOutletContext();
  
  useEffect(() => {
    if (category_param != undefined){
      setCategory(category_param.toUpperCase())
    } else {
      setCategory('all')
    }
  }, [category_param])

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages(){
    setLoading(true)
    try {
      const response = await fetch('/get_images/6/all/newest');
      const data = await response.json()
      setImages(data)
      setLoading(false)
    } catch(error) {
      console.log(error)
    }
  }
  console.log(images)

  // Show Image in details
  function openImage(image_id) {
    for (let i = 0; i < images.length; i++) {
      if(images[i].id === image_id){
        setShowImage(images[i])
      }
    }
  }

  // Handle Pagination
  const handlePagination = (pageNum) => {
    setCurrentPage(pageNum)
  }

  return (
    <section>
      <TopSection header={`Gallery ${categories[category]}`} />
    
      <div className='flex flex-col justify-center items-center pt-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[20px] max-w-[80%]'>
          <span className='text-primary uppercase'>Latest Projects</span>
          <h1 className='text-3xl font-bold'>Modern {categories[category] != '' && categories[category] || 'Works'}</h1>
          <p className='text-[#747474] text-center'>LLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi 
            repudiandae consequuntur voluptatum laborum</p>
        </div>

        <GalleryImages images={images} loading={loading} openImage={openImage}/>
        <Pagination postsPerPage={postsPerPage} length={30} currentPage={currentPage} handlePagination={handlePagination} />
      </div>
    </section>
  )
}
