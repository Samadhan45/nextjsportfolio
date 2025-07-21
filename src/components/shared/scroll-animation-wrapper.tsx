'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  style,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-in-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
