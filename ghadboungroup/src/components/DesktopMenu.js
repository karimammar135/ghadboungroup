import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import classNames from 'classnames'
import search_icon from './static/images/search-icon.png'

export default function DesktopMenu(){
  const[openDropdown, setOpenDropdown] = useState('');
  const location = useLocation();
  const { hash, pathname, search } = location;

  return (
    <>
      <NavLinks>
        <NavLink to="/" id={`${(`${pathname}${hash}` === '/') ? 'active1': ''}`}>Home</NavLink>
        <DropMenu name="Services" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <DropItem link="/services/#modern-fetures" path={`${pathname}${hash}`}>Modern features</DropItem>
          <DropItem link="/services/#post-tension" path={`${pathname}${hash}`}>Post tension</DropItem>
        </DropMenu>
        <DropMenu name="Categories" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          <DropItem link="/gallery" path={`${pathname}${hash}`}>gallery</DropItem>
          <DropItem link="/gallery/kitchen" path={`${pathname}${hash}`}>Kitchen</DropItem>
          <DropItem link="/gallery/bathroom" path={`${pathname}${hash}`}>Bath room</DropItem>
          <DropItem link="/gallery/bedroom" path={`${pathname}${hash}`}>Bed room</DropItem>
          <DropItem link="/gallery/exterior" path={`${pathname}${hash}`}>Exterior</DropItem>
        </DropMenu>
        <NavLink to="/contactus" id={`${(`${pathname}${hash}` === '/contactus') ? 'active1': ''}`}>Contact us</NavLink>
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
      <NavLink end id={`${(props.path === props.link) ? 'active1': ''}`} to={props.link}>{props.children}</NavLink>
    </div>
  )
}
