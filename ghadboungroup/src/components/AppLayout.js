import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'
import Loader from './Loader.js'
import WhatsappUs from './Whatsappus.js'

export default function AppLayout() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      let myloader = setTimeout(() => {
          setLoader(false)
      }, 5000)
      return () => {
          clearTimeout(myloader);
      }
  }, [])

  return (
    <div>
        {loader && <Loader />}
        <Navbar />
        <WhatsappUs />
        <Outlet/>
        <Footer />
    </div>
  )
}
