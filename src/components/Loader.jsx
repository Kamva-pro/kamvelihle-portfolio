import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        {/* Rotating circles */}
        <div className="circle-loader">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        {/* Loading text with progress */}
        <p className="loader-text">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
