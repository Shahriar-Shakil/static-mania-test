import React from 'react';
import AppleButton from './buttons/AppleButton';
import GooglePodcastButton from './buttons/GooglePodcast';
import SoundcloudButton from './buttons/SoundcloudButton';
import SpotifyButton from './buttons/SpotifyButton';

type Props = {};

export default function Features({}: Props) {
  return (
    <section className='mx-auto mt-[50px] max-w-7xl bg-white px-2 lg:mt-[145px]'>
      <h2 className='sr-only'>Podcast Available On</h2>
      <div className='flex flex-col gap-4 lg:flex-row  lg:items-center '>
        <h3 className='mr-10 w-auto text-2xl font-semibold leading-9 tracking-[-1px] text-black lg:w-96'>
          Podcast Available On
        </h3>
        <div className='flex w-full flex-wrap  justify-between   gap-4'>
          <AppleButton className='w-32 grow lg:w-auto' type='black' />
          <SoundcloudButton className='w-32 grow lg:w-auto' type='black' />
          <GooglePodcastButton className='w-32 grow lg:w-auto' type='black' />
          <SpotifyButton className='w-32 grow lg:w-auto' type='black' />
        </div>
      </div>
    </section>
  );
}
