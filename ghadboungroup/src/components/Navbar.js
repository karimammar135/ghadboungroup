import React, { useState, useEffect } from 'react'

import logo from './static/images/logo.png'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ scrollTo }){
  const[screenWidth, setScreenWidth] = useState(window.innerWidth)
  const[smallScreen, setSmallScreen] = useState(false);
  const[searchEngine, setSearchEngine] = useState(false);
  const navigate = useNavigate();

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    if (window.innerWidth < '820'){
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='nav-wrapper z-10'>
      <nav>
        <div className='logo cursor-pointer' onClick={() => {window.scroll({top: 0, behavior: "smooth"}); navigate('/')}}>
          <img src={logo} alt="logo"></img>
          <h1>Ghadboun group</h1>
        </div>
        {!smallScreen && <DesktopMenu scrollTo={scrollTo} searchEngine={searchEngine} setSearchEngine={setSearchEngine} /> || <MobileMenu scrollTo={scrollTo} searchEngine={searchEngine} setSearchEngine={setSearchEngine} />}
      </nav>
    </section>
  )
}
