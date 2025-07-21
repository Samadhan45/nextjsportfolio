'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';


const navLinks = [
  { name: 'Home', href: '#home' },
  { 
    name: 'About', 
    href: '#about'
  },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  const throttle = (func: (...args: any[]) => void, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);

    let current = 'Home';
    for (const link of navLinks) {
      if (link.href.startsWith('#')) {
        const section = document.getElementById(link.href.substring(1));
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = link.name;
        }
      }
    }
    setActiveLink(current);
  }, []);
  
  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const handleLinkClick = (name: string, href: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLinks = (isMobile = false) => {
    return navLinks.map((link) => (
      <Button
        key={link.name}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(link.name, link.href);
        }}
        className={cn(
          'transition-colors',
          activeLink === link.name ? 'text-primary' : 'text-foreground/80 hover:text-primary',
          isMobile ? 'text-lg w-full justify-center' : 'px-3 py-2 rounded-md'
        )}
      >
        {link.name}
      </Button>
    ));
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border/20' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="text-2xl font-bold text-primary hover:text-glow transition-all" onClick={(e) => {
             e.preventDefault();
             handleLinkClick('Home', '#home');
          }}>
            samadhan.dev
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            {renderNavLinks(false)}
          </nav>
          <div className="hidden md:flex items-center gap-2">
             {mounted && <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md pb-4">
          <nav className="flex flex-col items-center space-y-2 pt-4">
            {renderNavLinks(true)}
             <div className="mt-4">
                {mounted && <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
