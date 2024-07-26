import React, { useEffect, useState } from 'react'

import { useParams, useOutletContext } from 'react-router-dom'
import TopSection from './TopSection'

import GalleryImages from './GalleryImages'
import Pagination from './Pagination'

const categories = {
  'all': 'Gallery',
  'KITCHEN': 'Kitchen',
  'LIVINGROOM': 'Living Room',
  'BATHROOM': 'Bath Room',
  'BEDROOM': 'Bed Room',
  'EXTERIOR': 'Exterior'
}

export default function Gallery() {
  const { category_param } = useParams()
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  const [pageSize, setPageSize] = useState(8)
  const [images, setImages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState('null')
  const [prevPage, setPrevPage] = useState('null')
  const [isPrev, setIsPrev] = useState(false)
  const [isNext, setIsNext] = useState(false)

  const [runFetch, setRunFetch] = useState(false)

  // Handle width Change
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // Debounce a function
  let debounce = (callback, delay) => {
    let myTimeout;
    return () => {
      clearTimeout(myTimeout)
      myTimeout = setTimeout(() => {
        callback()
      }, delay)
    }
  }
  const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > '1023'){
          if (window.innerWidth > '1849'){
            setPageSize(12)
          } else {
            setPageSize(9)
          }
      } else {
        setPageSize(8)
      }
  }
  const debounceResize = debounce(() => handleResize(), 1000)
  useEffect(() => {
      window.addEventListener('resize', debounceResize)
      handleResize()

      return () => {
          window.removeEventListener('resize', debounceResize)
      }
  }, [])

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
    if (category != null){
      debounce(fetchImages(), 1000)
    }
  }, [currentPage, runFetch])

  // If category changes reset prev and next settings
  useEffect(() => {
    setNextPage('null')
    setPrevPage('null')
    setCurrentPage(1)
    setIsPrev(false)
    setIsNext(false)
    setRunFetch(!runFetch)
  }, [category, pageSize])

  async function fetchImages(){
    setLoading(true)
    try {
      const response = await fetch(`/gallery_pagination?after=${nextPage}&before=${prevPage}&category=${category}&pageSize=${pageSize}`);
      const data = await response.json()
      if (data.message != null){
        console.log(data.message)
      } else {
        setImages(data['items'])
        setNextPage(data['next_page'])
        setPrevPage(data['prev_page'])
        setIsPrev(data['is_prev'])
        setIsNext(data['is_next'])
        setLoading(false)
      }
    } catch(error) {
      console.log(error)
    }
  }

  // Show Image in details
  function openImage(image_id) {
    for (let i = 0; i < images.length; i++) {
      if(images[i].id === image_id){
        setShowImage(images[i])
      }
    }
  }

  // Handle Pagination
  const handlePagination = (direction) => {
    if (direction === 'next'){
      setPrevPage('null')
      setCurrentPage(currentPage + 1)
    } else {
      setNextPage('null')
      setCurrentPage(currentPage - 1)
    }
    
  }

  return (
    <section>
      <TopSection header={`${categories[category]}`} />
    
      <div className='flex flex-col justify-center items-center pt-[50px] pb-[30px]'>
        <div className='flex flex-col justify-center items-center gap-[20px] max-w-[80%]'>
          <span className='text-primary uppercase'>Latest Projects</span>
          <h1 className='text-3xl font-bold'>Modern {categories[category] != '' && categories[category] || 'Works'}</h1>
          <p className='text-[#747474] text-center'>Step into a world of contemporary creativity at our modern gallery</p>
        </div>

        <GalleryImages images={images} loading={loading} openImage={openImage} pageSize={pageSize}/>

        <Pagination currentPage={currentPage} handlePagination={handlePagination} isPrev={isPrev} isNext={isNext}/>
      </div>
    </section>
  )
}
