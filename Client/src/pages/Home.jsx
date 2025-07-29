import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  // useEffect(() => {
  //   const message = new SpeechSynthesisUtterance("Welcome to my website.");
  //   window.speechSynthesis.speak(message);
  // }, []);
  //   useEffect(() => {
  //   const message = new SpeechSynthesisUtterance("Welcome to my website.");

  //   const speakWithFemaleVoice = () => {
  //     const voices = window.speechSynthesis.getVoices();
  //     const femaleVoice = voices.find(voice =>
  //       voice.name.toLowerCase().includes("female") ||
  //       voice.name.toLowerCase().includes("woman") ||
  //       (voice.lang.includes("en") && voice.name.toLowerCase().includes("google"))
  //     );

  //     message.voice = femaleVoice || voices[0]; // fallback to first voice
  //     window.speechSynthesis.speak(message);
  //   };

  //   // Wait for voices to load
  //   if (window.speechSynthesis.getVoices().length === 0) {
  //     window.speechSynthesis.onvoiceschanged = speakWithFemaleVoice;
  //   } else {
  //     speakWithFemaleVoice();
  //   }
  // }, []);
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default Home
