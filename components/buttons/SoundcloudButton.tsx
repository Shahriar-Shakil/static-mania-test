import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  type: 'black' | 'white';
  className?: string;
};

export default function SoundcloudButton({ className, type = 'black' }: Props) {
  const iconRender =
    type === 'black' ? (
      <img src='/icons/Soundcloud.svg' alt='' />
    ) : (
      <img src='/icons/Soundcloud-white.svg' alt='' />
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
