import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'Full-Stack Finance WebApp',
    description: "A comprehensive finance management application built with Next.js, Tailwind CSS, Clerk authentication, and Gemini AI integration. Features Google authentication for 100+ users, AI-powered bill scanning that automatically adds 10+ expenses, and efficient data storage with Neon PostgreSQL. Deployed on Vercel for fast, global access with secure session handling.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'finance dashboard',
    liveLink: '#',
    githubLink: '#',
    tags: ['Next.js', 'Tailwind', 'Clerk', 'Gemini AI', 'PostgreSQL'],
  },
  {
    title: 'Developer Portfolio Website',
    description: "A clean, responsive portfolio website showcasing live projects using core web development skills. Built with HTML, CSS, and JavaScript, deployed on GitHub Pages with optimized file structure for fast loading and smooth navigation. Achieved 100% mobile responsiveness and cross-browser compatibility.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    liveLink: '#',
    githubLink: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    title: 'React.js Analytics Dashboard',
    description: "Led a team of 4 students to build a fully responsive React.js dashboard for internal project tracking and analytics. Designed and developed 10+ reusable components, enhanced UI consistency contributing to 20% faster load times and 100% mobile responsiveness.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    liveLink: '#',
    githubLink: '#',
    tags: ['React.js', 'Team Leadership', 'UI/UX'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="A selection of projects that showcase my skills and passion for building things." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <ScrollAnimationWrapper key={project.title} animation="slideInUp" delay={index * 100}>
              <Card className="bg-background h-full overflow-hidden group border-border/50 hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                <CardHeader>
                   <CardTitle className="text-xl flex items-center gap-2">
                     <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                     </div>
                     {project.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                   <div className="flex items-center gap-4 mt-auto">
                        <Button variant="outline" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                        </Button>
                    </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
