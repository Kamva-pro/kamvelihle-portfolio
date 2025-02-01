import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close, cv, github} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'kamvelihle_fatman_cv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <nav className={`${styles.paddingX} w-full flex 
items-center py-5 fixed top-0 z-20 bg-primary`}>
  <div className="w-full flex justify-around 
  items-center max-w-7xl mx-auto gap-36">
    <Link 
      to='/' 
      className="flex items-center gap-2"
      onClick={() => {
        setActive('');
        window.scrollTo(0,0);
      }}>

      <img 
        src={logo} 
        alt="logo" 
        className="w-9 h-9 object-contain" />

      <p className="text-white text-[18px] font-bold cursor-pointer">
        Kamvelihle
      </p>
    </Link>

    <ul className="list-none hidden sm:flex flex-row gap-12">
      {navLinks.map((link) => (
        <li key={link.id} 
          className={`${active === link.title ?
          "text-white" : "text-secondary"}
          hover:text-white text-[18px]
          font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}>
          <a href={`#${link.id}`}>{link.title} </a>
        </li>
      ))}
    </ul>

    <div className="sm:flex hidden gap-4">
    <img onClick={() => {window.open('https://linkedin.com/in/kamvelihle-fatman', '_blank')}} className='cursor-pointer object-contain rounded-2xl' src={github} alt="Linked In" 
      width={30}
      height={10}
      />
      <img onClick={() => {window.open('https://github.com/kamva-pro', '_blank')}} className='cursor-pointer object-contain rounded-2xl' src={github} alt="Github" 
      width={30}
      height={10}
      />
    <div 
      onClick={downloadCV} 
      className="bg-tertiary shadow-card py-4 px-6 cursor-pointer text-white font-bold shadow-md shadow-tertiary rounded-xl sm:flex hidden"
    >
      Download CV
    </div>
    </div>


    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`${!toggle ? 'hidden' : 'flex'}
        p-6 black-gradient absolute 
        top-20 right-0 mx-4 my-2 min-w-[140px]
        z-10 rounded-xl flex flex-col gap-4`}
      >
        <ul className="list-none flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.id} 
              className={`${active === link.title ?
              "text-white" : "text-secondary"}
              font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setActive(link.active);
                setToggle(!toggle);
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div 
          onClick={downloadCV} 
          className="bg-tertiary shadow-card py-2 px-4 cursor-pointer text-white font-bold shadow-md shadow-tertiary rounded-xl sm:hidden flex mt-4 text-center"
        >
          Download CV
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}

export default Navbar