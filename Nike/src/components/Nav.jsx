import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index.js';

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo" 
            width={130} 
            height={29} 
          />
        </a>

        {/* Navigation Links */}   
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:flex max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:bg-white max-lg:w-full max-lg:py-6 ${
            isNavVisible ? 'max-lg:flex' : 'max-lg:hidden'
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="max-lg:mb-2">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray max-lg:text-base max-lg:px-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div 
          className="hidden max-lg:block cursor-pointer" 
          onClick={toggleNav}
        >
          <img 
            src={hamburger} 
            alt="hamburger" 
            width={25} 
            height={25} 
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
