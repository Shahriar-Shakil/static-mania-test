import React from 'react';
import Link from '../buttons/Link';
import CTA from '../CTA';
import Features from '../Features';
import RecentEpisodes from '../RecentEpisodes';

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      {/* navbar */}
      <header className='mx-auto max-w-7xl bg-white py-5 px-2'>
        <div className='flex items-center justify-between'>
          <img
            src='/icons/Logo.svg'
            className='h-[26.33px] w-[130px]'
            alt='logo'
          />
          <nav className=''>
            <Link
              href='/about'
              className='text-base font-normal leading-7 text-black  hover:text-blue-800'
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      {/* cta */}
      <CTA />
      <Features />
      <RecentEpisodes />
    </>
  );
}
