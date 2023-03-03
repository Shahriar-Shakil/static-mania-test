import React from 'react';

type Props = {
  className?: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function IconButton({ label, onClick, className, icon }: Props) {
  return (
    <button
      className={`flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-800  ${className} `}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
