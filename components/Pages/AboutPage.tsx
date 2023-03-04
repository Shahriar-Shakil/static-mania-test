import React from 'react';
import Button from '../buttons/Button';
import Layout from '../Layout/Layout';
import { motion } from 'framer-motion';

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Layout title='About Finsweet'>
      <section className='mx-auto mt-[160px] max-w-5xl px-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='max-w-[480px] space-y-4 md:space-y-6 lg:space-y-8'
        >
          <h2 className='text-xl font-bold text-black sm:text-2xl md:text-3xl lg:text-5xl lg:leading-[53px]'>
            About Finsweet <br /> Podcast
          </h2>
          <p className='text-normal text-base text-black '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <Button label='Subscribe Now!' type='default' />
        </motion.div>
      </section>
    </Layout>
  );
}
