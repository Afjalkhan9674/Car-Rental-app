

import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
    const [pickupLocation, setPickupLocation] = useState('');

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center overflow-hidden px-4'>

            <h1 className='text-4xl md:text-5xl font-semibold text-gray-800'>
                Luxury Cars On Rent
            </h1>

            {/* Form */}
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between 
      p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

                <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
                    <div className='flex flex-col items-start gap-2'>
                        <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                            <option value="">Pickup Location</option>
                            {cityList.map((city) => <option value={city} key={city}>{city}</option>)}
                        </select>
                        <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor="pickup-date">Pick-up Date</label>
                        <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor="return-date">Return Date</label>
                        <input type="date" id='return-date' className='text-sm text-gray-500' required />
                    </div>
                </div>
                <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 
                   bg-primary hover:bg-primary-Dull text-white rounded-full cursor-pointer'>
                    <img src={assets.search_icon} alt="Search" className='brightness-300' />
                    Search
                </button>
            </form>

            {/* Car Image with Animations */}
            <motion.img
                src={assets.main_car}
                alt="car"
                className='max-h-72 animate-car-entry spinning-car'
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, duration: 1.2 }}
            />
        </div>
    );
};

export default Hero;

