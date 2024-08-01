import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import classNames from 'classnames'
import bars from './static/images/bars.png'
import search_icon from './static/images/search-icon.png'
import logo from './static/images/logo-design.png'
import SearchEngine from './SearchEngine'
  
export default function MobileMenu({ scrollTo, searchEngine, setSearchEngine }) {
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

  function toggleMenu(){
    setExpand('')
    toggleDropdown()
  }

 return (
  <div className='navbar2'>
    <Icons searchEngine={searchEngine} setSearchEngine={setSearchEngine} scrollTo={scrollTo}/>
    {!isOpen && <img src={bars} alt="bars" onClick={() => toggleMenu()}></img>
    || <i className="fa-regular fa-rectangle-xmark z-50 text-3xl text-white" onClick={() => toggleMenu()}></i>}
    <div className={classNames('custom-nav absolute w-screen bg-zinc-900 top-0 right-0 flex justify-center items-center', {'mobile-nav open': isOpen, 'mobile-nav2 close': !isOpen})}>
      <div className='flex flex-col justify-center items-center gap-10 absolute top-[110px]'>
        <div 
            className={`flex flex-col justify-center items-center gap-10 ${isOpen ? 'animate open': 'initial close'}`}
        >
          <NavLink onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} to="/" className={classNames("block text-3xl text-white", {'hide': (expand != '')})} id={`${(`${pathname}${hash}` === '/') ? 'active': ''}`}>Home</NavLink>
          <DropMenu name="Services" className="block text-3xl text-white" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
              <div className='drop-item'>
                <NavLink end id={`${(`${pathname}${hash}` === "/services/#modern-fetures") ? 'active': ''}`} className="text-2xl text-white" to="/services/#modern-fetures" onClick={() => {toggleMenu(); scrollTo('services', 'modern-features', 'start')}}>Modern features</NavLink>
              </div>
              <div className='drop-item'>
                <NavLink end id={`${(`${pathname}${hash}` === "/services/#post-tension") ? 'active': ''}`} className="text-2xl text-white" to="/services/#post-tension" onClick={() => {toggleMenu(); scrollTo('services', 'post-tension')}}>Post tension</NavLink>
              </div>
          </DropMenu>
          <DropMenu name="Categories" className="block text-3xl text-white" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
              <DropItem link="/gallery" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>gallery</DropItem>
              <DropItem link="/gallery/kitchen" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Kitchen</DropItem>
              <DropItem link="/gallery/livingroom" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Living room</DropItem>
              <DropItem link="/gallery/door" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Doors</DropItem>
              <DropItem link="/gallery/bathroom" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Bath room</DropItem>
              <DropItem link="/gallery/bedroom" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Bed room</DropItem>
              <DropItem link="/gallery/exterior" path={`${pathname}${hash}`} toggleMenu={toggleMenu}>Exterior</DropItem>
          </DropMenu>
          <NavLink onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} to="/contactus" className={classNames("block text-3xl text-white", {'hide': (expand != '')})} id={`${(`${pathname}${hash}` === '/contactus') ? 'active': ''}`}>Contact Us</NavLink>
        </div>
        <NavLink className={!isOpen ? 'design hide': 'design show'} id='logo-wrapper' to="/" onClick={() => toggleMenu()}>
          <img src={logo} alt="logo" className='w-[240px]'></img>
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
      <NavLink end id={`${(props.path === props.link) ? 'active': ''}`} className="text-2xl text-white" to={props.link} onClick={() => {props.toggleMenu(); window.scrollTo(0, 0)}}>{props.children}</NavLink>
    </div>
  )
}

function Icons({ searchEngine, setSearchEngine, scrollTo }){
  return (
    <div className='icons'>
        <NavLink to="/contactus"><i className="fa-solid fa-paper-plane"></i></NavLink>
        <div className='nos:relative'>
          <img onClick={() => setSearchEngine(true)} className='cursor-pointer' src={search_icon} alt="search"></img>
          {searchEngine && <SearchEngine setSearchEngine={setSearchEngine} scrollTo={scrollTo} />}
        </div>
    </div>
  )
}
