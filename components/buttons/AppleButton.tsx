import React from 'react';

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
  return <button className={`${className || ''} `}>{iconRender}</button>;
}
