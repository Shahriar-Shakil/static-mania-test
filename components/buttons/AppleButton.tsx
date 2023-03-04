import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  type: 'black' | 'white';
  className?: string;
};

export default function AppleButton({ className, type = 'black' }: Props) {
  const iconRender =
    type === 'black' ? (
      <img src='/icons/apple-podcast.svg' alt='' />
    ) : (
      <img src='/icons/apple-podcast-white.svg' alt='' />
    );
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        originX: 0,
      }}
      className={`${className || ''} `}
    >
      {iconRender}
    </motion.button>
  );
}
