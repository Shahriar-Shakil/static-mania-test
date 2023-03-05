import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoWhite from '../../public/icons/Logo-white.png';
import AppleButton from '.././buttons/AppleButton';
import GooglePodcastButton from '.././buttons/GooglePodcast';
import SoundcloudButton from '.././buttons/SoundcloudButton';
import SpotifyButton from '.././buttons/SpotifyButton';
import Sponsors from '.././Sponsors';
import { motion } from 'framer-motion';
import { staggerContainer, staggerForFooterMenu } from '../../variants';

type Props = {};

let pages = ['Home', 'Podcast', 'Host', 'Blog'];
let reachUs = ['Contact', 'About'];
export default function Footer({}: Props) {
  return (
    <div className='relative mt-[150px] lg:mt-[315px] '>
      <Sponsors />
      <footer className='relative  bg-black'>
        <div className='mx-auto max-w-7xl px-10 pt-[100px] pb-[80px] lg:px-[80px] lg:pt-[192px]'>
          <div className='flex  lg:flex-row'>
            <div className='hidden w-2/5 lg:inline-block lg:w-2/4  '>
              <Image
                className='w-28 lg:w-[200px]'
                src={logoWhite}
                alt='logo-white'
              />
            </div>
            <div className='flex w-full flex-wrap justify-between gap-4 lg:flex-row'>
              <div className='text-white'>
                <p className='text-xl font-bold leading-[30px] '>Pages</p>
                <ul className='space-y-4 pt-8'>
                  {pages.map((page, i) => (
                    <motion.li
                      variants={staggerForFooterMenu(i)}
                      initial='initial'
                      whileInView='whileInView'
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        originX: 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                      }}
                      key={page}
                    >
                      <Link href='/'>{page}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className='text-white'>
                <p className='text-xl font-bold leading-[30px] '>Reach Us</p>
                <ul className='space-y-4 pt-8'>
                  {reachUs.map((page, i) => (
                    <motion.li
                      variants={staggerForFooterMenu(i)}
                      initial='initial'
                      whileInView='whileInView'
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        originX: 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                      }}
                      key={page}
                    >
                      <Link href='/'>{page}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className='text-white'>
                <p className='text-xl font-bold leading-[30px] '>Subscribe</p>
                <div className='mt-5 flex flex-col gap-8'>
                  <AppleButton type='white' />
                  <GooglePodcastButton type='white' />
                  <SoundcloudButton type='white' />
                  <SpotifyButton type='white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copy write */}
        <div className='bg-blue-500 py-5 text-center text-base font-bold text-white'>
          &copy;Copyright Finsweet 2023{' '}
        </div>
      </footer>
    </div>
  );
}
