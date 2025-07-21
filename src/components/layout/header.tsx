'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '#',
    dropdown: [
      { name: 'About Me', href: '#about' },
      { name: 'Experience', href: '#experience' },
    ]
  },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#' },
  { name: 'Achievement', href: '#certifications' },
  { 
    name: 'Resources', 
    href: '#',
    dropdown: [
      { name: 'Featured Resources', href: '#resources' },
    ]
  },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => l.href.startsWith('#') ? document.querySelector(l.href) : null).filter(Boolean);
      
      let current = 'Home';
      sections.forEach(section => {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          const link = navLinks.find(l => l.href === `#${section.id}`);
          if (link) current = link.name;
        }
      });
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  }

  const renderNavLinks = (isMobile = false) => {
    return navLinks.map((link) => (
      link.dropdown ? (
         <DropdownMenu key={link.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn(
                  "text-foreground/80 hover:text-primary transition-colors data-[active=true]:text-primary data-[active=true]:bg-primary/10",
                  {'text-lg w-full justify-center': isMobile},
                  {'px-3': !isMobile}
                )}
                data-active={activeLink === link.name || link.dropdown.some(d => d.href === activeLink)}
                >
                {link.name} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.dropdown.map(dLink => (
                  <DropdownMenuItem key={dLink.name} asChild>
                      <Link href={dLink.href} onClick={() => isMobile && setIsMenuOpen(false)}>
                        {dLink.name}
                      </Link>
                  </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
      ) : (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => {
            setActiveLink(link.name);
            if (isMobile) setIsMenuOpen(false);
          }}
          className={cn(
            'transition-colors',
            activeLink === link.name ? 'text-primary' : 'text-foreground/80 hover:text-primary',
            isMobile ? 'text-lg' : 'px-3 py-2 rounded-md'
          )}
        >
          {link.name}
        </Link>
      )
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
          <Link href="#home" className="text-2xl font-bold text-primary hover:text-glow transition-all">
            atharva.dev
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            {renderNavLinks(false)}
          </nav>
          <div className="hidden md:flex items-center gap-2">
             <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
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
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
