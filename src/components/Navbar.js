import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Ted Zhang <FontAwesomeIcon icon={ faDisplay } className='fa-display'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} className={click ? 'fa-times' : 'fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>  
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>  
                  </li>
                  <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                      Projects
                    </Link>  
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
                    </Link>  
                  </li>
                  <li className='nav-item'>
                    <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                      Resume
                    </Link>  
                  </li>     
                </ul>
            </div>    
        </nav>
    </>
  );
}


export default Navbar;
