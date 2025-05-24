
'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number; // Optional delay for staggered animations
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsInView(true);
            // Unobserve after animation to prevent re-triggering and save resources
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }, delay);
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 motion-reduce:opacity-100 motion-reduce:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
