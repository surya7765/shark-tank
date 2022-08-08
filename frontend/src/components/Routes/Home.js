import React from 'react'
import Guide from '../directory/HomePage/Guide';
import HeroSection from "../directory/HomePage/HeroSection";
import HotJob from "../directory/HomePage/HotJob";
import Navbar from '../directory/HomePage/Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HotJob/>
      <Guide/>
    </>
  )
}

export default Home