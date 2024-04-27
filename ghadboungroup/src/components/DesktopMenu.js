import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import classNames from 'classnames'
import search_icon from './static/images/search-icon.png'

export default function DesktopMenu(){
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
