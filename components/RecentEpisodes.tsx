import React from 'react';
import Button from './buttons/Button';
import EpisodeCard from './Cards/EpisodeCard';
import { EpisodeData } from '../data/episodes';

type Props = {};

export default function RecentEpisodes({}: Props) {
  return (
    <section className='mx-auto mt-[50px] max-w-7xl bg-white px-2 lg:mt-[145px]'>
      <h2 className='sr-only'>Recent Episodes</h2>
      <div className='flex justify-center lg:justify-between'>
        <div className='space-y-2 text-center lg:text-left'>
          <h3 className='text-2xl font-bold leading-[38px] text-black lg:text-[32px] '>
            Recent Episodes
          </h3>
          <p className='text-sm font-normal text-black lg:text-base'>
            Apparently we had reached a great height in the <br /> atmosphere,
            for the sky was a dead black.
          </p>
        </div>
        <Button
          className='hidden self-end lg:block'
          type='default'
          label='See All Episode'
        />
      </div>
      <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {EpisodeData?.map((episode) => (
          <EpisodeCard episode={episode} />
        ))}
      </div>
    </section>
  );
}