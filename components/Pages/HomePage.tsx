import React from 'react';
import Articles from '../Articles';
import Link from '../buttons/Link';
import CTA from '../CTA';
import Features from '../Features';
import Footer from '../Footer';
import RecentEpisodes from '../RecentEpisodes';
import Sponsors from '../Sponsors';

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
      <Articles />
      <Footer />
    </>
  );
}
