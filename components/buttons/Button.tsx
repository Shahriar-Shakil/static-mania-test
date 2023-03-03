import React from 'react';

type Props = {
  className?: string;
  type: 'default' | 'secondary' | 'rounded';
  label: string;
  onClick?: () => void;
};

export default function Button({
  label,
  onClick,
  className,
  type = 'default',
}: Props) {
  const buttonTypes = {
    default:
      ' border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-800',
    secondary:
      'border-2 border-black bg-white text-black  hover:border-green hover:text-green',
    rounded:
      ' rounded-[28.5px] border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-800',
  };
  return (
    <button
      className={` px-8  py-3 text-base font-medium leading-6 ${className} ${buttonTypes[type]} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
