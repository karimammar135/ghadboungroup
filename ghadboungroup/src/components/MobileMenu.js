import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import classNames from 'classnames'
import bars from './static/images/bars.png'
import search_icon from './static/images/search-icon.png'

const mobileMenu = {
    initial: {
      opacity: 0,
      y: -75,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1.5,
        staggerChilden: 0.08,
      }
    }
  }
  

export default function MobileMenu({ logo }) {
  const [expand, setExpand] = useState('')
  const location = useLocation();
  const { hash, pathname, search } = location;
  // new
  const[isOpen, setOpen] = useState(false);
  const[openDropdown, setOpenDropdown] = useState('');

  function toggleDropdown(){
    setOpen(!isOpen)
  }

  useEffect(() => {
    setOpenDropdown(''); 
  }, [isOpen])
  // end new
  console.log(`${pathname}${hash}`)

  function toggleMenu(){
    setExpand('')
    toggleDropdown()
  }

 return (
  <div className='navbar2'>
    <Icons />
    {!isOpen && <img src={bars} alt="bars" onClick={() => toggleMenu()}></img>
    || <i className="fa-regular fa-rectangle-xmark z-10 text-3xl text-white" onClick={() => toggleMenu()}></i>}
    <div className={classNames('absolute min-h-screen w-screen bg-zinc-900 top-0 right-0 flex justify-center items-center', {'mobile-nav open': isOpen, 'mobile-nav2 close': !isOpen})}>
      <div className='flex flex-col justify-center items-center gap-20'>
        <div 
            className={`flex flex-col justify-center items-center gap-10 ${isOpen ? 'animate open': 'initial close'}`}
        >
          <NavLink to="/" className={classNames("block text-3xl text-white", {'hide': (expand != '')})} id={`${(`${pathname}${hash}` === '/') ? 'active': ''}`} onClick={() => toggleMenu()}>Home</NavLink>
          <DropMenu name="Services" className="block text-3xl text-white" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
              <DropItem link="/services/#modern-fetures" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Modern features</DropItem>
              <DropItem link="/services/#post-tension" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Post tension</DropItem>
          </DropMenu>
          <DropMenu name="Categories" className="block text-3xl text-white" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
              <DropItem link="/gallery" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>gallery</DropItem>
              <DropItem link="/gallery/kitchen" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Kitchen</DropItem>
              <DropItem link="/gallery/bathroom" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Bath room</DropItem>
          </DropMenu>
          <NavLink to="/contactus" className={classNames("block text-3xl text-white", {'hide': (expand != '')})} id={`${(`${pathname}${hash}` === '/contactus') ? 'active': ''}`} onClick={() => toggleMenu()}>Contact Us</NavLink>
        </div>
        <NavLink className='flex flex-col justify-center items-center gap-2' id='logo-wrapper' to="/" onClick={() => toggleMenu()}>
          <img src={logo} alt="logo" className='w-20'></img>
          <h1 className='logo-text'>Ghadboun group</h1>
        </NavLink>
      </div>
    </div>
  </div>
 )
}

function DropMenu(props){
  function toggleMenu(e){
    e.preventDefault(); 
    if (props.openDropdown === props.name){
      props.setOpenDropdown('');
      props.setExpand('')
    } else {
      props.setOpenDropdown(props.name);
      props.setExpand(props.name)
    }
  }
  
  return (
    <div className={classNames('block drop-menu', {'grow': (props.expand === props.name), 'hide': (props.expand != '' && props.expand != props.name)})}>
      <div className="drop-link text-3xl text-white flex justify-center items-center gap-2" onClick={(e) => toggleMenu(e)}>
        {props.name}
        <i className={classNames("fa-solid fa-angle-down pt-2", {'fa-angle-up': (props.openDropdown === props.name)})}></i>
      </div>
      <div className={classNames('slide-down flex flex-col justify-center items-center gap-3 mt-5', {'': (props.openDropdown === props.name), 'hidden': !(props.openDropdown === props.name)})}>
        {props.children}
      </div>
    </div>
  )
}
  
function DropItem(props){
  return (
    <div className='drop-item'>
      <NavLink end id={`${(props.path === props.link) ? 'active': ''}`} className="text-2xl text-white" to={props.link} onClick={() => props.toggleMenu()}>{props.children}</NavLink>
    </div>
  )
}

function Icons(){
  return (
    <div className='icons'>
        <NavLink to="/contactus"><i className="fa-solid fa-paper-plane"></i></NavLink>
        <img src={search_icon} alt="search"></img>
    </div>
  )
}
