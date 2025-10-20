import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
