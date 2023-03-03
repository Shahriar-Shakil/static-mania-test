import Image from 'next/image';
import React from 'react';
import { episodesType } from '../../ts/interface';
import IconButton from '../buttons/IconButton';
type Props = {
  episode: episodesType;
};

export default function EpisodeCard({ episode }: Props) {
  return (
    <div key={episode.id} className='space-y-8'>
      <div className='relative'>
        <Image
          src={episode.logo.src}
          width={episode.logo.width}
          height={episode.logo.height}
          alt='episode'
        />
        <div className='absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500'>
          <img className='' src='/icons/mike.svg' alt='logo' />
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
    </div>
  );
}
