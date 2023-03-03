import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoWhite from '../public/icons/Logo-white.png';
import AppleButton from './buttons/AppleButton';
import GooglePodcastButton from './buttons/GooglePodcast';
import SoundcloudButton from './buttons/SoundcloudButton';
import SpotifyButton from './buttons/SpotifyButton';
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='mt-[200px] bg-black'>
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
                <li>
                  <a href=''>Home</a>
                </li>
                <li>
                  <a href=''>Podcast</a>
                </li>
                <li>
                  <a href=''>Host</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
              </ul>
            </div>
            <div className='text-white'>
              <p className='text-xl font-bold leading-[30px] '>Reach Us</p>
              <ul className='space-y-4 pt-8'>
                <li>
                  <a href=''>Contact</a>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
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
  );
}
