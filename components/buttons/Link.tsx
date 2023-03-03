import NextLink, { NextLinkProps } from 'next/link';
import React from 'react';

interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, className, children, ...rest }) => (
  <NextLink href={href} className={className} {...rest}>
    {children}
  </NextLink>
);

export default Link;
