import Link from '../buttons/Link';
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {};

export default function Navbar({}: Props) {
  const path = usePathname();
  return (
    <motion.header className='mx-auto max-w-7xl bg-white py-5 px-2'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <motion.img
            whileHover={{
              scale: 1.1,
            }}
            src='/icons/Logo.svg'
            className='h-[26.33px] w-[130px]'
            alt='logo'
          />
        </Link>

        <nav className=''>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link
                href='/about'
                className={`${
                  path === '/about' ? 'font-bold text-blue-800' : 'font-normal '
                }  text-base leading-7 text-black  hover:text-blue-800`}
              >
                About
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
