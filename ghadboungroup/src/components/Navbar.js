import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Link, NavLink } from 'react-router-dom'
import './static/css/layout.css'
import logo from './static/images/logo.png'
import search_icon from './static/images/search-icon.png'
import bars from './static/images/bars.png'
import bars_open from './static/images/bars-open.png'

export default function Navbar(){
  const[screenWidth, setScreenWidth] = useState(window.innerWidth)
  const[smallScreen, setSmallScreen] = useState(false);

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
    <section className='nav-wrapper'>
      <nav>
        <div className='logo'>
          <img src={logo} alt="logo"></img>
          <h1>Ghadboun group</h1>
        </div>
        {!smallScreen && <NavBody /> || <Navbody2 />}
      </nav>
    </section>
  )
}

function Navbody2(){
  const[open, setOpen] = useState(false);
  const[openDropdown, setOpenDropdown] = useState('');

  function toggleDropdown(){
    setOpen(!open)
  }

  useEffect(() => {
    setOpenDropdown(''); 
  }, [open])

  return (
    <div className='navbar2'>
      <div className='icons'>
        <NavLink to="/contactus"><i className="fa-solid fa-paper-plane"></i></NavLink>
        <img src={search_icon} alt="search"></img>
      </div>
      {!open && <img src={bars} alt="bars" onClick={() => toggleDropdown()}></img> ||
        <>
          <img src={bars_open} alt="bars_open" onClick={() => toggleDropdown()}></img>
          <ul className='dropdown'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><DropMenu name="Services" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
                  <DropItem link="/services/#modern-fetures">Modern features</DropItem>
                  <DropItem link="/services/#post-tension">Post tension</DropItem>
                </DropMenu>
            </li>
            <li><DropMenu name="Categories" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
                  <DropItem link="/gallery">gallery</DropItem>
                  <DropItem link="/gallery/kitchen">Kitchen</DropItem>
                  <DropItem link="/gallery/bathroom">Bath room</DropItem>
                </DropMenu>
            </li>
            <li><NavLink to="/contactus">Contact us</NavLink></li>
            <button onClick={() => toggleDropdown()}><i className="fa-solid fa-arrow-up-short-wide"></i></button>
          </ul>
        </>
      }
    </div>
  )
}

function NavBody(){
  const[openDropdown, setOpenDropdown] = useState('');

  return (
    <>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <DropMenu name="Services" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <DropItem link="/services/#modern-fetures">Modern features</DropItem>
          <DropItem link="/services/#post-tension">Post tension</DropItem>
        </DropMenu>
        <DropMenu name="Categories" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <DropItem link="/gallery">gallery</DropItem>
          <DropItem link="/gallery/kitchen">Kitchen</DropItem>
          <DropItem link="/gallery/bathroom">Bath room</DropItem>
        </DropMenu>
        <NavLink to="/contactus">Contact us</NavLink>
      </NavLinks>
      <div className='icons'>
        <NavLink to="/contactus"><i className="fa-solid fa-paper-plane"></i></NavLink>
        <img src={search_icon} alt="search"></img>
      </div>
    </>
  )
}

function NavLinks(props){
  return (
    <div className='nav-items'>
      {props.children}
    </div>
  )
}

function DropMenu(props){
  function toggleDropdown(e){
    e.preventDefault(); 
    if (props.openDropdown === props.name){
      props.setOpenDropdown('');
    } else {
      props.setOpenDropdown(props.name);
    }
  }
  console.log(props.openDropdown)

  return (
    <div className='drop-menu'>
      <NavLink className="drop-link" onClick={(e) => toggleDropdown(e)}>
        {props.name}
        <i className={classNames("fa-solid fa-angle-down", {'flip-arrow': (props.openDropdown === props.name)})}></i>
      </NavLink>
      <div className={classNames('drop-container', {'open-dropdown': (props.openDropdown === props.name), 'closed-dropdown': !(props.openDropdown === props.name)})}>
        {props.children}
      </div>
    </div>
  )
}

function DropItem(props){
  return (
    <div className='drop-item'>
      <NavLink end to={props.link}>{props.children}</NavLink>
    </div>
  )
}