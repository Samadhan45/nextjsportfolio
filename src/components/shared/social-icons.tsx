import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/Samadhan45' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/samadhan1' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/samadhankadam' },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center items-center space-x-2">
      {socialLinks.map((social) => (
        <Button key={social.name} variant="ghost" size="icon" asChild>
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
