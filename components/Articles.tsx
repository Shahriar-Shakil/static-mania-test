import React from 'react';
import Link from './buttons/Link';
import { newsData } from '../data/episodes';
import NewsCard from './Cards/NewsCard';
import Image from 'next/image';
import Shapes from '../public/images/Shapes.png';
type Props = {};

export default function Articles({}: Props) {
  return (
    <section className='mx-auto mt-[50px] max-w-7xl bg-white px-2 lg:mt-[120px]'>
      <h1 className='sr-only'>Articles</h1>
      <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='relative bg-offWhite'>
          <div className='space-y-4 p-10'>
            <h2 className='text-2xl font-bold leading-[38px] text-black lg:text-[32px] '>
              Read our <br />
              articles & news
            </h2>
            <Link
              href='/'
              className='flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-800'
            >
              See More
            </Link>
          </div>
          <Image
            className='absolute bottom-0 hidden'
            src={Shapes}
            alt='shapes'
          />
        </div>
        {newsData?.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    </section>
  );
}
