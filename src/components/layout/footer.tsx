import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import SocialIcons from '../shared/social-icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          I&apos;m currently open to new opportunities. Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href="mailto:samadhankadam002@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>samadhankadam002@gmail.com</span>
          </a>
          <a
            href="tel:+918010792529"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 8010792529</span>
          </a>
        </div>
        <SocialIcons />
        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            &copy; {year} Samadhan Vilas Kadam. All rights reserved.
          </p>
          <p>Built with Next.js and Tailwind CSS. Inspired by Atharva Kote.</p>
        </div>
      </div>
    </footer>
  );
}
