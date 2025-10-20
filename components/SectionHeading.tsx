import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
