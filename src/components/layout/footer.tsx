'use client';

import { useState, useEffect } from 'react';
import SocialIcons from '../shared/social-icons';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
    ],
    'Connect': [
        { name: 'Contact', href: '#contact' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'GitHub', href: 'https://github.com/Samadhan45' },
    ],
    'Legal': [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ]
  }

  return (
    <footer id="footer" className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
                <h3 className="text-2xl font-bold text-primary mb-2">samadhan.dev</h3>
                <p className="text-muted-foreground text-sm">Full Stack Developer</p>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                    <h4 className="font-semibold mb-4">{title}</h4>
                    <ul className="space-y-2">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {year} Samadhan Kadam. All rights reserved.
            </p>
            <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
