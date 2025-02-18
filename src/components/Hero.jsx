import {motion} from 'framer-motion';
import { React, useState, useEffect } from 'react';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {ComputersCanvas, AvatarCanvas} from './canvas';


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isBigTab, setIsBigTab] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:576px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    const tabQuery = window.matchMedia('(max-width: 768px)');
    setIsTab(tabQuery.matches);

    const handleTabQueryChange = (event) => setIsTab(event.matches);
    tabQuery.addEventListener('change', handleTabQueryChange);

    const bigTabQuery = window.matchMedia('max-width: 991px');
    setIsBigTab(bigTabQuery.matches);

    const handleQueryChange = (event) => setIsBigTab(event.matches);
    bigTabQuery.addEventListener('change', handleQueryChange);

    const smallQuery = window.matchMedia('(max-height: 500px)');
    setIsSmall(smallQuery.matches);

    const smallQueryChange = (event) => setIsSmall(event.matches);
    smallQuery.addEventListener('change', smallQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      smallQuery.removeEventListener('change', smallQueryChange);
      tabQuery.removeEventListener('change', handleTabQueryChange);
      bigTabQuery.removeEventListener('change', handleQueryChange);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full 
          bg-[#515eff]"/>
          <div className="w-1 sm-h-80 h-40 
          violet-gradient"/>
        </div>

        <div>
          <h1 
          className={`${styles.heroHeadText} text-white`}>
            Hi, I'm 
            <span 
            className="text-[#515eff]"> Kamvelihle</span>
          </h1>
          <p  
          className={`${styles.heroSubText} 
          mt-2 text-white-100`} >
          I'm a Full-Stack Developer
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      
      {(isMobile || isTab || isSmall || isBigTab) && (
  <div 
    className='absolute xs:bottom-10 bottom-20 w-full
    flex flex-col-reverse justify-center items-center'>
    <a href="#about">
      <div className='w-[fit-content] h-[64px] rounded-3xl
      border-4 border-secondary flex justify-start
      items-start p-2'>
        <motion.div 
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          <h1>Click to Scroll</h1>
        </motion.div>
      </div>
    </a>
  </div>
)}

    </section>
  )
}

export default Hero