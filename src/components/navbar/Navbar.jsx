import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatRAFIKI'>What is rafiki</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='rafiki__navbar'>
      <div className='rafiki__navbar-links'>
        <div className='rafiki__navbar-links_logos'>
          <img src={logo} alt='logo' />
          <div className='rafiki__navbar-links_containers'>
            <Menu />
          </div>
        </div>
        <div className='rafiki__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='rafiki__navbar-menu'>
          {toggleMenu ?
            <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu &&
            <div className='rafiki__navbar-menu_container scale-up-centre'>
              <div className='rafiki__navbar-menu_container-links'>
                <Menu />
                <div className='rafiki__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
