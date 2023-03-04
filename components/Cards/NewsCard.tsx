import Image from 'next/image';
import React from 'react';
import { episodesType } from '../../ts/interface';
import { motion } from 'framer-motion';

import Link from '../buttons/Link';
type Props = {
  news: episodesType;
};

export default function NewsCard({ news }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className='space-y-4 md:space-y-8 '
    >
      <div className=''>
        <Image
          className='w-full'
          src={news.logo.src}
          width={news.logo.width}
          height={news.logo.height}
          alt='news'
        />
      </div>
      {/*card body */}
      <div className='space-y-2 md:space-y-4'>
        <h2 className='text-2xl font-semibold leading-[30px] text-black'>
          {news.label}
        </h2>
        <p className='text-base font-normal text-black'>{news.description}</p>
        <Link
          href='/'
          className='flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-800'
        >
          See More
        </Link>
      </div>
    </motion.div>
  );
}
