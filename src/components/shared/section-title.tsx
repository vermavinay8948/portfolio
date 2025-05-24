import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8 text-center',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
