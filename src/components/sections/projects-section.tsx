import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const projects = [
  {
    title: 'Full-Stack Finance WebApp',
    description: "A comprehensive finance management application built with Next.js, Tailwind CSS, Clerk authentication, and Gemini AI integration. Features Google authentication for 100+ users, AI-powered bill scanning that automatically adds 10+ expenses, and efficient data storage with Neon PostgreSQL. Deployed on Vercel for fast, global access with secure session handling.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'finance dashboard',
    link: '#',
    tags: ['Next.js', 'Tailwind', 'Clerk', 'Gemini AI', 'PostgreSQL'],
  },
  {
    title: 'Developer Portfolio Website',
    description: "A clean, responsive portfolio website showcasing live projects using core web development skills. Built with HTML, CSS, and JavaScript, deployed on GitHub Pages with optimized file structure for fast loading and smooth navigation. Achieved 100% mobile responsiveness and cross-browser compatibility.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    link: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    title: 'React.js Analytics Dashboard',
    description: "Led a team of 4 students to build a fully responsive React.js dashboard for internal project tracking and analytics. Designed and developed 10+ reusable components, enhanced UI consistency contributing to 20% faster load times and 100% mobile responsiveness.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    link: '#',
    tags: ['React.js', 'Team Leadership', 'UI/UX'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="A selection of projects that showcase my skills and passion for building things." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <ScrollAnimationWrapper key={project.title} delay={`${index * 100}ms`}>
              <Card className="bg-card h-full overflow-hidden group border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                <div className="relative overflow-hidden">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.dataAiHint}/>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
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
