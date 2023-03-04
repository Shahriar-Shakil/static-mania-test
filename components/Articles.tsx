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
          <div className='relative z-50 inline-block space-y-4 bg-offWhite p-10'>
            <h2 className=' text-2xl font-bold  text-black md:leading-[38px] lg:text-[32px] '>
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
            className='absolute bottom-0 right-0 z-40 w-60 sm:w-full  lg:block'
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
