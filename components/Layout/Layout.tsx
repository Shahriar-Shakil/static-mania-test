import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />

      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          variants={fadeIn('up')}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}
