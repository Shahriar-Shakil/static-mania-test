import React from 'react';

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
  return <button className={`${className || ''} `}>{iconRender}</button>;
}
