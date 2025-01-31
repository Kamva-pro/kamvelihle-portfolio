import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Avatar = ({ isMobile, isTab, isBigTab, isSmall }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/cool-guy.glb'); 
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animation = ('Available animations:', Object.keys(actions));


    if(actions[animation])
    {
        actions[animation].play();
    }
    
  }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-100, 50, 150]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isBigTab ? 0.6 : isTab ? 0.4 : isMobile ? 0.15 : 2.3}
        position={isSmall ? [0, -4, 0] : isBigTab ? [0, 1, 0] : isMobile ? [0, -3, 0] : isTab ? [0, -2.5, 0] : [0, -3, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const AvatarCanvas = () => {
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
      tabQuery.removeEventListener('change', handleTabQueryChange);
      bigTabQuery.removeEventListener('change', handleQueryChange);
      smallQuery.removeEventListener('change', smallQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatar
          isMobile={isMobile}
          isTab={isTab}
          isBigTab={isBigTab}
          isSmall={isSmall}
        />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default AvatarCanvas;


