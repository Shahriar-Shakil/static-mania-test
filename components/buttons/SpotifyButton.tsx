import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  type: 'black' | 'white';
  className?: string;
};

export default function SpotifyButton({ className, type = 'black' }: Props) {
  const iconRender =
    type === 'black' ? (
      <img src='/icons/spotify.svg' alt='' />
    ) : (
      <img src='/icons/spotify-white.svg' alt='' />
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
