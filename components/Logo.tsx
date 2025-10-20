import React from 'react';
import Image from 'next/image';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: 40,
  md: 48,
  lg: 200,
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const dimension = sizes[size];
  
  return (
    <div className="flex items-center space-x-3">
      {/* Dove Logo Image */}
      <Image
        src="/dove-logo.png"
        alt="Peace Building Initiative Logo"
        width={dimension}
        height={dimension}
        className="object-contain"
        priority={size === 'sm'}
      />
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-neutral-900 leading-tight">
            Peace Building Initiative
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-neutral-600">
              Tarime, Musoma, Tanzania
            </span>
          )}
        </div>
      )}
    </div>
  );
};
