import React from 'react';
import Image from 'next/image';
import audioTrack from '../public/images/Audio-track.png';
import Button from './buttons/Button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className='bg-white'>
      <div className='mx-auto mt-[100px] grid max-w-5xl grid-cols-1 lg:grid-cols-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='space-y-4 px-4 lg:space-y-8 lg:pr-8'
        >
          <h2 className='text-3xl font-bold tracking-tight text-black lg:text-5xl lg:leading-[53px] '>
            Become The Her
            <br />
            Of Your Own Story
          </h2>
          <p className='  text-base leading-7 text-black'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div className=' flex flex-col justify-center sm:flex-row '>
            <input
              id='email'
              type='email'
              className='block w-full bg-offWhite px-4 py-3 focus:shadow-md'
              required
              placeholder='Enter your email address'
            />
            <Button label='Subscribe' type='default' />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 100 }}
          whileInView={{ x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className='hidden items-center lg:flex'
        >
          <Image className='ml-auto' src={audioTrack} alt='cta Audio visual' />
        </motion.div>
      </div>
    </section>
  );
}
