import type { NextPage } from 'next';
import Button from '../components/buttons/Button';
import AppleButton from '../components/buttons/AppleButton';
import GooglePodcastButton from '../components/buttons/GooglePodcast';
import SoundcloudButton from '../components/buttons/SoundcloudButton';
import SpotifyButton from '../components/buttons/SpotifyButton';
import IconButton from '../components/buttons/IconButton';
import Link from '../components/buttons/Link';

const Components: NextPage = () => {
  return (
    <div className=' flex min-h-screen flex-col items-center justify-center py-2'>
      <h1 className='text-green'>Hello world</h1>
      <div className='flex gap-3'>
        <Button type='default' label='Button' />
        <Button type='secondary' label='Secondary' />
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
        <Link
          href='/about'
          className='flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-800'
        >
          About Page
        </Link>
        <Link
          href='/'
          className='flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-800'
        >
          Home Page
        </Link>
        <Button type='rounded' label='Rounded Button' />
      </div>
      <div className='mt-5 space-x-5'>
        <AppleButton type='black' />
        <GooglePodcastButton type='black' />
        <SoundcloudButton type='black' />
        <SpotifyButton type='black' />
      </div>
    </div>
  );
};

export default Components;
