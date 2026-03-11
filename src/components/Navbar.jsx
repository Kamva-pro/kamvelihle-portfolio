import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github, linkedin } from '../assets';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-around items-center max-w-7xl mx-auto gap-36">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>

          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Kamvelihle</p>
        </Link>

        {/* Desktop nav links */}
        <ul className="list-none hidden lg:flex flex-row gap-12">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                scrollTo(link.id);
              }}
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Desktop icons + Contact Me */}
        <div className="lg:flex hidden gap-4 items-center">
          <img
            onClick={() => window.open('https://github.com/kamva-pro', '_blank')}
            className="cursor-pointer object-contain rounded-2xl"
            src={github}
            alt="Github"
            width={30}
            height={10}
          />
          <button
            onClick={() => scrollTo('contact')}
            className="bg-tertiary shadow-card py-4 px-8 cursor-pointer text-white font-bold shadow-lg rounded-xl"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col gap-4`}>
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    scrollTo(link.id);
                  }}
                >
                  {link.title}
                </li>
              ))}
            </ul>

            <button
              onClick={() => { setToggle(false); scrollTo('contact'); }}
              className="bg-tertiary shadow-card py-2 px-4 cursor-pointer text-white font-bold shadow-md rounded-xl mt-4 text-center"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;