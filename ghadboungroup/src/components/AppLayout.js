import React, {useState, useEffect} from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'
import Loader from './Loader.js'
import WhatsappUs from './Whatsappus.js'
import ShowImage from './ShowImage.js'

export default function AppLayout() {
  const [loader, setLoader] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
      let myloader = setTimeout(() => {
          setLoader(false)
      }, 3500)
      return () => {
          clearTimeout(myloader);
      }
  }, [])

  // Scroll to a specific section
  const scrollTo = (router, location, postion) => {
    navigate(`${router}`, {}) 
    if (postion === undefined){
      postion = 'center'
    }
    
    let timer = setTimeout(() => {
      document.getElementById(`${location}`).scrollIntoView({ behavior: 'smooth', block: `${postion}` })
      clearTimeout(timer)
    }, 200)
  
  }

  return (
    <div>
        {loader && <Loader />}
        {showImage && <ShowImage image={showImage} setShowImage={setShowImage}/>}
        <Navbar scrollTo={scrollTo}/>
        <WhatsappUs />
        <Outlet context={[ showImage, setShowImage ]}/>
        <Footer setShowImage={setShowImage} scrollTo={scrollTo}/>
    </div>
  )
}
