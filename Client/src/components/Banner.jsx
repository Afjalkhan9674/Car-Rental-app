// import React from 'react'
// import { assets } from '../assets/assets'

// const Banner = () => {
//   return (
//     <div className='flex flex-col md:flex-row md:items-start items-center justify-between 
//     px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto 
//     rounded-2xl overflow-hidden'>
//         <div className='text-white'>
//             <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
//             <p className='mt-2'>Monetize your vehicle  effortlessly by listing it on CarRental.</p>
//             <p className='max-w-130'>We take care of insurance, driver verification and secure payments - so you can earn passive income, stress-free.</p>
//             <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'>List Your Car</button>
//         </div>
//       <img src={assets.banner_car_image} alt="car" className='max-h-45 mt-10'/>
//     </div>
//   )
// }

// export default Banner
import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import { motion, useInView } from 'framer-motion';
import TypewriterText from './TypewriterText';

const Banner = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);
  const [line3Done, setLine3Done] = useState(false);

  return (
    <div
      ref={ref}
      className='flex flex-col md:flex-row md:items-start items-center justify-between 
      px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto 
      rounded-2xl overflow-hidden'
    >
      <div className='text-white'>

        {isInView && (
          <TypewriterText
            text="Do You Own a Luxury Car?"
            speed={35}
            className="text-3xl font-medium"
            onComplete={() => setLine1Done(true)}
          />
        )}

        {line1Done && (
          <TypewriterText
            text="Monetize your vehicle effortlessly by listing it on CarRental."
            speed={30}
            className="mt-2"
            onComplete={() => setLine2Done(true)}
          />
        )}

        {line2Done && (
          <TypewriterText
            text="We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free."
            speed={25}
            className="max-w-130"
            onComplete={() => setLine3Done(true)}
          />
        )}

        {line3Done && (
          <motion.button
            className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            List Your Car
          </motion.button>
        )}
      </div>

      <motion.img
        src={assets.banner_car_image}
        alt='car'
        className='max-h-45 mt-10'
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
      />
    </div>
  );
};

export default Banner;
