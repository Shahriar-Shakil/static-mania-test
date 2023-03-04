import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
};
const variants = {
  hidden: { opacity: 0, x: 0, y: 15 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 15 },
};
export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <motion.div
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'linear', delay: 0.25 }}
      >
        <AnimatePresence
          mode='wait'
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </>
  );
}
