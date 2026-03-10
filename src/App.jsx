import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Contact, Hero, Navbar, Works, StarsCanvas } from './components';
import ProjectDetails from './components/ProjectDetails';
import PageLoader from './components/PageLoader';

const HomeLayout = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;