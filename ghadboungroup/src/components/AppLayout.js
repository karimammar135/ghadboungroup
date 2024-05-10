import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'
import Loader from './Loader.js'
import WhatsappUs from './Whatsappus.js'
import ShowImage from './ShowImage.js'

export default function AppLayout() {
  const [loader, setLoader] = useState(true)
  const [showImage, setShowImage] = useState(false)
  console.log(showImage)

  useEffect(() => {
      let myloader = setTimeout(() => {
          setLoader(false)
      }, 0)
      return () => {
          clearTimeout(myloader);
      }
  }, [])

  return (
    <div>
        {loader && <Loader />}
        {showImage && <ShowImage image={showImage} setShowImage={setShowImage}/>}
        <Navbar />
        <WhatsappUs />
        <Outlet context={[ showImage, setShowImage ]}/>
        <Footer setShowImage={setShowImage}/>
    </div>
  )
}
