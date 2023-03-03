import React from 'react';

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
  return <button className={`${className || ''} `}>{iconRender}</button>;
}
