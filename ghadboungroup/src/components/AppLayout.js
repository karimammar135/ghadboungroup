import React, {useState, useEffect} from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'
import Loader from './Loader.js'
import WhatsappUs from './Whatsappus.js'
import ShowImage from './ShowImage.js'
import AddImage from './AddImage.js'

export default function AppLayout() {
  const [loader, setLoader] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const [isAdmin, setIsAdmin] = useState()
  const navigate = useNavigate()
  
  // Loading 
  useEffect(() => {
      let myloader = setTimeout(() => {
          setLoader(false)
      }, 3500)
      return () => {
          clearTimeout(myloader);
      }
  }, [])

  // Check for admin
  const checkAdmin = async () => {
    try{
      const response = await fetch("/isAdmin")
      const data = await response.json()
      setIsAdmin(data.isAdmin)
    } catch (error){
      console.error(error.message)
    }
  }
  useEffect(() => {
    checkAdmin()
  }, [])

  // Scroll to a specific section
  const scrollTo = (router, location, postion) => {
    navigate(`${router}`, {}) 
    if (postion === undefined){
      postion = 'center'
    }
    
    let timer = setTimeout(() => {
      if (location === undefined){
        window.scrollTo({top: 0, behavior: 'smooth'});
      } else {
        document.getElementById(`${location}`).scrollIntoView({ behavior: 'smooth', block: `${postion}` });
      }
      clearTimeout(timer)
    }, 200)
  
  }

  return (
    <div>
        {loader && <Loader />}
        {showImage && <ShowImage image={showImage} setShowImage={setShowImage} isAdmin={isAdmin}/>}
        <Navbar scrollTo={scrollTo}/>
        {!isAdmin && <WhatsappUs />}
        {isAdmin && <AddImage />}
        <Outlet context={[ showImage, setShowImage ]}/>
        <Footer setShowImage={setShowImage} scrollTo={scrollTo}/>
    </div>
  )
}
