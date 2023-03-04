import React from 'react';

type Props = {
  className?: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function IconButton({
  label,
  onClick,
  className = 'text-base',
  icon,
}: Props) {
  return (
    <button
      className={`${className} flex items-center gap-2  font-semibold text-blue-500 hover:text-blue-800   `}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
