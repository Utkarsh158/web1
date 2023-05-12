import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className='main-nav'>

            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu-link'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/Services'>Services</NavLink>
                    </li>

                    <li>
                        <NavLink to='/About'>About</NavLink>
                    </li>

                    <li>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

        {/* <section className='section'>
            <p>Hello</p>
            <h1>Welcome</h1>
        </section> */}
    </>
  )
};

export default Navbar;