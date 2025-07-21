'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeIn' | 'slideInUp' | 'slideInLeft' | 'slideInRight';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  style,
  animation = 'slideInUp',
  delay = 0,
  duration = 1000,
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

  const getAnimationClasses = () => {
    if (isVisible) {
      switch (animation) {
        case 'fadeIn':
          return 'opacity-100';
        case 'slideInUp':
          return 'opacity-100 translate-y-0';
        case 'slideInLeft':
          return 'opacity-100 translate-x-0';
        case 'slideInRight':
          return 'opacity-100 translate-x-0';
        default:
          return 'opacity-100 translate-y-0';
      }
    } else {
      switch (animation) {
        case 'fadeIn':
          return 'opacity-0';
        case 'slideInUp':
          return 'opacity-0 translate-y-12';
        case 'slideInLeft':
          return 'opacity-0 -translate-x-16';
        case 'slideInRight':
          return 'opacity-0 translate-x-16';
        default:
          return 'opacity-0 translate-y-12';
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-in-out',
        getAnimationClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
