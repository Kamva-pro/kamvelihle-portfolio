import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, AvatarCanvas } from './canvas';

import { lazy } from 'react';

const Hero = lazy(() => import("./Hero"))

const Navbar = lazy(() => import("./Navbar"))

const About = lazy(() => import("./About"))

const Works = lazy(() => import("./Works"))

const Contact = lazy(() => import("./Contact"))

export {
  Hero,
  Navbar,
  About,
  Tech,
  Works,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas, 
  AvatarCanvas
}