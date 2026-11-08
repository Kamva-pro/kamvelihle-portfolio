import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github, linkedin } from '../assets';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-secondary hover:text-white transition-colors duration-200 cursor-pointer">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const SocialIcons = ({ className = '' }) => (
  <div className={`flex items-center gap-5 ${className}`}>
    <img
      onClick={() => window.open('https://linkedin.com/in/kamvelihle-fatman', '_blank')}
      className="cursor-pointer object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
      src={linkedin}
      alt="LinkedIn"
      width={24}
      height={24}
    />
    <img
      onClick={() => window.open('https://github.com/kamva-pro', '_blank')}
      className="cursor-pointer object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
      src={github}
      alt="GitHub"
      width={26}
      height={26}
    />
    <span onClick={() => window.open('https://instagram.com/kamva_dev', '_blank')}>
      <InstagramIcon />
    </span>
  </div>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(''); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Kamvelihle</p>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Desktop socials + CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <SocialIcons />
          <a
            href="#contact"
            onClick={() => setActive('Contact')}
            className="bg-tertiary shadow-card py-4 px-8 cursor-pointer text-white font-bold shadow-lg rounded-xl"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl flex-col gap-4`}>
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => { setActive(link.title); setToggle(false); }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <SocialIcons className="mt-2" />
            <a
              href="#contact"
              onClick={() => { setActive('Contact'); setToggle(false); }}
              className="bg-tertiary shadow-card py-2 px-4 cursor-pointer text-white font-bold shadow-md rounded-xl text-center mt-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;