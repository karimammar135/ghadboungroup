import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'
import Loader from './Loader.js'

export default function AppLayout() {
  const [loader, setLoader] = useState(true)

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
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}
