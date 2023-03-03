import NextLink, { LinkProps } from 'next/link';
import React from 'react';

interface ILinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<ILinkProps> = ({ href, className, children, ...rest }) => (
  <NextLink href={href} className={className} {...rest}>
    {children}
  </NextLink>
);

export default Link;
