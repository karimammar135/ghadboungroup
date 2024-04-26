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


// new
return (
    
  <div className='navbar2'>
    <div className='icons'>
        <NavLink to="/contactus"><i className="fa-solid fa-paper-plane"></i></NavLink>
        <img src={search_icon} alt="search"></img>
    </div>
    {!open && <img src={bars} alt="bars" onClick={() => toggleDropdown()}></img> ||
        <>
        
        <i className="fa-regular fa-rectangle-xmark z-10 text-3xl text-white" onClick={() => toggleDropdown()}></i>
        <div className='absolute h-screen w-screen bg-zinc-900 top-0 right-0 flex flex-col justify-center items-center gap-20'>
          <ul className="flex flex-col justify-center items-center gap-10">
            <li><NavLink to="/" className={classNames("block text-3xl text-white", {'hide': (expand != '')})}>Home</NavLink></li>
            <li><DropMenu name="Services" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
                    <DropItem link="/services/#modern-fetures">Modern features</DropItem>
                    <DropItem link="/services/#post-tension">Post tension</DropItem>
                </DropMenu>
            </li>
            <li><DropMenu name="Categories" openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} expand={expand} setExpand={setExpand}>
                    <DropItem link="/gallery">gallery</DropItem>
                    <DropItem link="/gallery/kitchen">Kitchen</DropItem>
                    <DropItem link="/gallery/bathroom">Bath room</DropItem>
                </DropMenu>
            </li>
            <li><NavLink to="/contactus" className={classNames('block text-3xl text-white', {'hide': (expand != '')})}>Contact us</NavLink></li>
          </ul>
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src={logo} alt="logo" className='w-20'></img>
            <h1 className='logo-text'>Ghadboun group</h1>
          </div>
        </div>
        </>
    }
</div>
)


function DropMenu(props){
function toggleDropdown(e){
  e.preventDefault(); 
  if (props.openDropdown === props.name){
    props.setOpenDropdown('');
    props.setExpand('')
  } else {
    props.setOpenDropdown(props.name);
    props.setExpand(props.name)
  }
}
console.log(props.openDropdown)

return (
  <div className={classNames('block drop-menu', {'grow': (props.expand === props.name), 'hide': (props.expand != '' && props.expand != props.name)})}>
    <div className="drop-link text-3xl text-white" onClick={(e) => toggleDropdown(e)}>
      {props.name}
      <i className={classNames("fa-solid fa-angle-down", {'fa-angle-up': (props.openDropdown === props.name)})}></i>
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
    <NavLink end className="text-2xl text-white" to={props.link}>{props.children}</NavLink>
  </div>
)
}