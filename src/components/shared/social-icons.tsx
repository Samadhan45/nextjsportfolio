import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/Samadhan45' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/samadhan1' },
  { name: 'Portfolio', icon: <ExternalLink className="w-5 h-5" />, url: 'https://samadhan45.github.io/portfolio' },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {socialLinks.map((social) => (
        <Button key={social.name} variant="outline" size="icon" asChild>
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
