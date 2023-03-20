import {React, Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } 
from '@react-three/drei';

import {motion} from 'framer-motion';


import CanvasLoader from '../Loader';

const Computers = ({isMobile, isTab, isBigTab, isSmall}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (

    <mesh>
      <hemisphereLight 
      intensity={0.15}
      groundColor="black"/>

      <pointLight 
      intensity={1}/>

      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1} 
      intensity={1} 
      castShadow 
      shadow-mapSize={1024}/>

      <primitive
      object={computer.scene} 
      scale={isBigTab? 0.4 : isTab ? 0.4 : isMobile ? 0.2 : 0.7}
      position={isSmall ? [0, -4, 0] : isBigTab ? [0, 1, 0] : isMobile ? [0,-3,0] : isTab ? [0, -2.5, 0] :  [0,-3, 0]}
      rotation={[-0.01, -0.2, -0.1]} />

      
    </mesh>
    

    
  )
}
//npm install --legacy-peer-deps three
//3d models download - sketchfab
const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false)
  const [isTab, setIsTab] = useState(false)
  const [isBigTab, setIsBigTab] = useState(false)
  const [isSmall, setIsSmall] = useState(false)


  useEffect(( ) => {
    //Mobile phone screens
    const mediaQuery = window.matchMedia('(max-width:576px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', 
    handleMediaQueryChange);


    //Tab screens
    const tabQuery = window.matchMedia('(max-width: 768px)');
    setIsTab(tabQuery.matches);

    const handleTabQueryChange = (event) => {
      setIsTab(event.matches);
    }

    tabQuery.addEventListener('change', handleTabQueryChange );

    const bigTabQuery = window.matchMedia('max-width: 991px');
    setIsBigTab(bigTabQuery.matches);

    const handleQueryChange = (event) => {
      setIsBigTab(event.matches)
    }

    bigTabQuery.addEventListener('change',handleQueryChange )


    //handle screens with small heights
    const smallQuery = window.matchMedia('(max-height: 500px)');
    setIsSmall(smallQuery.matches);

    const smallQueryChange = (event) => {
      setIsSmall(event.matches)
    }
    
    return() => {
      mediaQuery.removeEventListener('change', 
      handleMediaQueryChange);
      tabQuery.removeEventListener('change', handleTabQueryChange)
      bigTabQuery.removeEventListener('change', handleQueryChange)
      smallQuery.removeEventListener('change', smallQueryChange)
    }
  },[])
    



  return(
    <Canvas 
    frameloop='demand' 
    shadows 
    camera={{position: [20,3,5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>

      <Suspense 
      fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
        <Computers 
        isMobile={isMobile}
        isTab={isTab}
        isBigTab={isBigTab}
        isSmall={isSmall}
        />
        
      </Suspense>
      <Preload all/>

      
    </Canvas>
  );
}

export default ComputersCanvas