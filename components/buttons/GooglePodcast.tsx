import React from 'react';

type Props = {
  type: 'black' | 'white';
  className?: string;
};

export default function GooglePodcastButton({
  className,
  type = 'black',
}: Props) {
  const iconRender =
    type === 'black' ? (
      <img src='/icons/google-podcast.svg' alt='' />
    ) : (
      <img src='/icons/google-podcast-white.svg' alt='' />
    );
  return <button className={`${className || ''} `}>{iconRender}</button>;
}
