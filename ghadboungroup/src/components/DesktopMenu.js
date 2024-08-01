import React, {useEffect, useRef, useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import classNames from 'classnames'
import search_icon from './static/images/search-icon.png'
import SearchEngine from './SearchEngine'

export default function DesktopMenu({ scrollTo, searchEngine, setSearchEngine }){
  const[openDropdown, setOpenDropdown] = useState('');
  const location = useLocation();
  const { hash, pathname, search } = location;

  return (
    <>
      <NavLinks>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)} id={`${(`${pathname}${hash}` === '/') ? 'active1': ''}`}>Home</NavLink>
        <DropMenu name="Services" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <div className='drop-item'>
            <NavLink to="/services/#modern-fetures" onClick={() => scrollTo('services', 'modern-features', 'start')} id={`${(`${pathname}${hash}` === "/services/#modern-fetures") ? 'active1': ''}`}>Modern Features</NavLink>
          </div>
          <div className='drop-item'>
            <NavLink to="/services/#post-tension" onClick={() => scrollTo('services', 'post-tension')} id={`${(`${pathname}${hash}` === "/services/#post-tension") ? 'active1': ''}`}>Post tension</NavLink>
          </div>
        </DropMenu>
        <DropMenu name="Categories" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <DropItem link="/gallery" path={`${pathname}${hash}`}>gallery</DropItem>
          <DropItem link="/gallery/kitchen" path={`${pathname}${hash}`}>Kitchen</DropItem>
          <DropItem link="/gallery/livingroom" path={`${pathname}${hash}`}>Living room</DropItem>
          <DropItem link="/gallery/door" path={`${pathname}${hash}`}>Doors</DropItem>
          <DropItem link="/gallery/bathroom" path={`${pathname}${hash}`}>Bath room</DropItem>
          <DropItem link="/gallery/bedroom" path={`${pathname}${hash}`}>Bed room</DropItem>
          <DropItem link="/gallery/exterior" path={`${pathname}${hash}`}>Exterior</DropItem>
        </DropMenu>
        <NavLink to="/contactus" onClick={() => window.scrollTo(0, 0)} id={`${(`${pathname}${hash}` === '/contactus') ? 'active1': ''}`}>Contact us</NavLink>
      </NavLinks>
      <div className='icons'>
        <NavLink to="/contactus" onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-paper-plane"></i></NavLink>
        <div className='relative'>
          <img onClick={() => setSearchEngine(true)} className='cursor-pointer' src={search_icon} alt="search"></img>
          {searchEngine && <SearchEngine setSearchEngine={setSearchEngine} scrollTo={scrollTo} />}
        </div>
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
  
  return (
    <div className='drop-menu'>
      <NavLink className="drop-link" onClick={(e) => {toggleDropdown(e); window.scrollTo(0, 0)}}>
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
      <NavLink end onClick={() => window.scrollTo(0, 0)} id={`${(props.path === props.link) ? 'active1': ''}`} to={props.link}>{props.children}</NavLink>
    </div>
  )
}
