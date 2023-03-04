import React from 'react';
import Button from '../buttons/Button';
import Layout from '../Layout/Layout';

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Layout>
      <section className='mx-auto mt-[160px] max-w-7xl px-2'>
        <div className='max-w-[480px] space-y-4 md:space-y-6 lg:space-y-8'>
          <h2 className='text-xl font-bold lg:leading-[53px] text-black sm:text-2xl md:text-3xl lg:text-5xl'>
            About Finsweet <br /> Podcast
          </h2>
          <p className='text-normal text-base text-black '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <Button label='Subscribe Now!' type='default' />
        </div>
      </section>
    </Layout>
  );
}
