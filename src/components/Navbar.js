import React from 'react'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const location=useLocation()
  return (
    <>
    <header>
        <nav className='mynav ' style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
          <div className="logo"><i className="fa-solid fa-envelope"></i><span>evalidate</span></div>
          <div className='container'> <ul className='mx-5'>
            <li className={`${location.pathname==="/"?"active":""}`}><a href="#/">Home</a></li>
            <li className={`${location.pathname==="/about"?"active":""}`}><a href="#/about">About</a></li>
          </ul>
          </div>
         
        </nav>
    </header>
    </>
  )
}

export default Navbar
