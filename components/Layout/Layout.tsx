import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
};
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function Layout({ children, title }: Props) {
  return (
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </motion.main>
  );
}
