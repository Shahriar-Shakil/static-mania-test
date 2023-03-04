import Image from 'next/image';
import React from 'react';
import { episodesType } from '../../ts/interface';
import IconButton from '../buttons/IconButton';
import { motion } from 'framer-motion';
type Props = {
  episode: episodesType;
};

export default function EpisodeCard({ episode }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className='space-y-8'
    >
      <div className='relative'>
        <Image
          src={episode.logo.src}
          width={episode.logo.width}
          height={episode.logo.height}
          alt='episode'
        />
        <div className='absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
            />
          </svg>
        </div>
      </div>
      {/*card body */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold leading-[30px] text-black'>
          {episode.label}
        </h2>
        <p className='text-base font-normal text-black'>
          {episode.description}
        </p>
        <IconButton
          label='Listen Now'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-8 w-8'
            >
              <path
                fillRule='evenodd'
                d='M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z'
                clipRule='evenodd'
              />
            </svg>
          }
        />
      </div>
    </motion.div>
  );
}
