import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './static/css/layout.css';
import Navbar from './Navbar'
import Footer from './Footer.js'

export default function AppLayout() {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}
