import React from 'react'
import { Link  } from 'react-router-dom'
import './Header.css'
const Header = () => {

  return (
    <div className='header'>
        <div className='container'> 
           <div className='logo'>
            {/* <a href='#'>Movies</a> */}
            <Link to='/'>Movies</Link>
           </div> 
           <ul className='nav-links'>
             <li><Link to ='/'>WatchList</Link></li>
             <li><Link to ='/Watched'>Watched</Link></li>
             <li><Link to ='/Add' className='btn' >Add</Link></li>
           </ul>
        </div> 
    </div>
  )
 }

export default Header