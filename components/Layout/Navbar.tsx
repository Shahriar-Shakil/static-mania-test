import Link from '../buttons/Link';
import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className='mx-auto max-w-7xl bg-white py-5 px-2'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <img
            src='/icons/Logo.svg'
            className='h-[26.33px] w-[130px]'
            alt='logo'
          />
        </Link>

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
  );
}
