import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
   useEffect(() => {
    const message = new SpeechSynthesisUtterance("Welcome to my website. I am Afzal Khan");
    window.speechSynthesis.speak(message);
  }, []);
  return (
    <div>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonial/>
      <Newsletter/>
    </div>
  )
}

export default Home
