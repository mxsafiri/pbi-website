import React from 'react';
import Image from 'next/image';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const sizes = {
  sm: 40,
  md: 48,
  lg: 200,
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, variant = 'dark' }) => {
  const dimension = sizes[size];
  
  return (
    <div className="flex items-center space-x-3">
      {/* Peace Building Initiative Logo */}
      <Image
        src="/favicon.png"
        alt="Peace Building Initiative Logo"
        width={dimension}
        height={dimension}
        className="object-contain"
        priority={size === 'sm'}
      />
      
      {showText && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold leading-tight ${
            variant === 'light' ? 'text-white' : 'text-neutral-900'
          }`}>
            Peace Building Initiative
          </span>
          {size !== 'sm' && (
            <span className={`text-xs ${
              variant === 'light' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Tarime, Musoma, Tanzania
            </span>
          )}
        </div>
      )}
    </div>
  );
};
