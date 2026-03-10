import React from 'react';
import "./loader.css";

const PageLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary">
      <div className="loader-container">
        {/* Rotating circles */}
        <div className="circle-loader">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <p className="mt-4 text-[#915eff] font-bold text-sm tracking-wider animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
