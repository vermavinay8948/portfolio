import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export function SectionContainer({
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
