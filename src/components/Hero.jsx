import React from 'react';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {ComputersCanvas, AvatarCanvas} from './canvas';


const Hero = () => {
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
      <div 
      className='absolute xs:bottom-10 bottom-20 w-full
      flex flex-col-reverse justify-center items-center'>
        <a href="#about">
          <div className='w-[fit-content] h-[64px] rounded-3xl
          border-4 border-secondary flex justify-start
          items-start p-2'>
                          
                          <motion.dev 
                          animate={{y:[0,24,0]}}
                          transition={{
                            duration:1.5,
                            repeat:Infinity,
                            repeatType:'loop'
                          }}
                          >
                            <h1>Click to Scroll</h1>
                          </motion.dev>
            
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero