
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import { ArrowUpRight, Github, Search, Sparkles, KeyRound, Lock, Smartphone, Monitor } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'Firebase Studio',
    description: "A powerful and modern document organizing application built with Next.js and Firebase. Helps users upload, manage, and search documents with AI-powered features in a sleek, responsive interface. Supports real-time updates, light/dark mode, secure Firebase Authentication, and document export in PDF/JPEG formats.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'document management dashboard',
    liveLink: 'https://studio-lovat-pi.vercel.app',
    githubLink: 'https://github.com/Samadhan45/firebase-studio',
    tags: ['Next.js', 'TailwindCSS', 'Firebase', 'Firestore', 'AI Search'],
  },
  {
    title: 'Bhojan Planner',
    description: "A modern meal planning web app that simplifies food routines, reduces waste, and helps users plan meals smartly. Designed for individuals and families to organize weekly meals, discover recipes, manage pantry stock, and even share surplus food locally.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'meal planner dashboard',
    liveLink: 'https://bhojan-one.vercel.app',
    githubLink: 'https://github.com/Samadhan45/bhojan',
    tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Personal Portfolio Website',
    description: "A modern, responsive portfolio showcasing my skills, projects, and experience as a Full Stack Developer. Built to highlight clean UI, smooth navigation, and real-world development expertise in both frontend and backend technologies.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'developer portfolio website',
    liveLink: 'https://samadhan45.github.io/portfolio/',
    githubLink: 'https://github.com/Samadhan45/newportfolio',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    title: 'React.js Analytics Dashboard',
    description: "Led a team of 4 students to build a fully responsive React.js dashboard for internal project tracking and analytics. Designed and developed 10+ reusable components, enhanced UI consistency contributing to 20% faster load times and 100% mobile responsiveness.",
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    liveLink: '#',
    githubLink: '#',
    tags: ['React.js', 'Team Leadership', 'Jira'],
  },
];


// Tech Icons Mapping
const iconComponents: { [key: string]: React.ComponentType } = {
  'Next.js': NextjsIcon,
  'TailwindCSS': TailwindCssIcon,
  'Clerk': ClerkIcon,
  'Gemini AI': GeminiIcon,
  'PostgreSQL': DatabaseIcon,
  'HTML5': Html5Icon,
  'CSS3': Css3Icon,
  'JavaScript': JavaScriptIcon,
  'GitHub': GitHubIcon,
  'React.js': ReactIcon,
  'Team Leadership': TeamIcon,
  'Jira': JiraIcon,
  'Firebase': FirebaseIcon,
  'Firestore': DatabaseIcon,
  'AI Search': AiSearchIcon,
  'Node.js': NodejsIcon,
  'Express.js': ExpressIcon,
  'MongoDB': MongoDbIcon,
  'JWT': JwtIcon,
  'Responsive Design': ResponsiveIcon,
};


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="A selection of projects that showcase my skills and passion for building things." />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
             <ScrollAnimationWrapper key={project.title} animation="slideInUp" delay={index * 100}>
              <Card className="bg-background h-full overflow-hidden group border-border/50 hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                 <div className="relative w-full h-48">
                   <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.dataAiHint}
                   />
                 </div>
                <CardHeader>
                   <CardTitle className="text-xl flex items-start gap-3">
                     <span className="w-8 h-8 mt-1 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                     </span>
                     {project.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.tags.map(tag => {
                      const Icon = iconComponents[tag];
                      const tagLabel = tag === 'Firestore' ? 'Firestore' : tag;
                      return Icon ? (
                        <div key={tag} className="flex flex-col items-center justify-center gap-2">
                           <div className="w-8 h-8 text-primary">
                             <Icon />
                           </div>
                           <p className="text-xs text-center text-muted-foreground">{tagLabel}</p>
                        </div>
                      ) : null;
                    })}
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


// Icon Components
function Html5Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.625 0h20.75l-1.886 21.328-8.494 2.672-8.491-2.672L1.625 0zM12 19.828l6.237-1.966L19.375 6.5H4.625l1.15 13.041L12 19.828zM12 8.5h6.375l.25-2.812H12v2.812zM12 14.5v2.812l-3.32-.937-.219-2.5h2.164l.156 1.75L12 15.438v-.938h-2.125l-.25-2.812H12v2.812h3.375l-.312 3.5-3.063.812v-2.75l3.125-1.031.188-2.125H12v-2.812z" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.625 0h20.75l-1.886 21.328-8.494 2.672-8.491-2.672L1.625 0zM12 19.828l6.237-1.966L19.375 6.5H4.625l1.15 13.041L12 19.828zM12 8.5h6.375l.25-2.812H12v2.812zM8.5 11.312h3.5v2.813H8.75l.25 2.812h3.5v-2.812h3.5l-.5 5.625-3 1.031v2.813l5.5-1.844.875-9.812h-9.5z" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.016 19.143v-3.411h-2.297v3.411c0 .6-.219.984-.656 1.164-.438.18-.994.18-1.669.023l-.703-1.688c.453.125.86.188 1.219.188.422 0 .633-.172.633-.516v-3.578h2.297v3.578c0 1.25-.563 1.875-1.688 1.875-.625 0-1.219-.14-1.781-.422l-.797 1.547c.75.406 1.625.61 2.625.61 1.719 0 2.922-.844 2.922-2.5zm-8.813-1.586c0-1.031-.469-1.828-1.406-2.39-1-.563-1.5-1.032-1.5-1.61 0-.547.406-.938 1.125-.938.75 0 1.188.359 1.454 1.078l1.968-1.265c-.5-1-1.39-1.594-2.672-1.594-1.609 0-2.687.906-2.687 2.234 0 1.031.5 1.766 1.438 2.328.937.563 1.468 1.031 1.468 1.672 0 .797-.578 1.203-1.312 1.203-.782 0-1.422-.437-1.75-1.28l-2.094.859c.562 1.468 1.72 2.218 3.328 2.218 1.703 0 2.953-1 2.953-2.5z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.583 3h-5.166L12 7.75l2.583-4.75zM12 21c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zm-2.291-5.208L12 12.583l-2.292 3.209-2.041-3.709L12 2.5l6.333 11.583H12l-2.291 3.209z" />
    </svg>
  );
}

function TailwindCssIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-8-6c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8zm12.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    </svg>
  );
}

function ClerkIcon() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 15.45l-3.54-3.54 1.41-1.41 2.12 2.12 4.95-4.95 1.41 1.41-6.36 6.37z"/>
    </svg>
    )
}

function GeminiIcon() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="m12.33 12.83-1.07-1.06-1.06-1.06-1.06-1.06-1.06 1.06-1.06 1.06-1.06 1.06 1.06 1.06 1.06 1.06 1.06 1.06 1.06-1.06 1.06-1.06 1.06-1.06zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
    )
}

function NodejsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.23.36c.2-.36.56-.36.74 0l10.5 18.18c.2.36.02.82-.37.82H1.1c-.39 0-.57-.46-.37-.82L11.23.36zM12 18.4V7.6m-9 10.8h18" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5H16"/>
      <path d="M9 9L15 15"/>
      <path d="M15 9L9 15"/>
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
      <path d="M15 17c-1.66 0-3-1.34-3-3"/>
    </svg>
  );
}

function JwtIcon() {
  return <KeyRound />;
}

function DatabaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577v-2.088c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.775.418-1.303.762-1.604-2.665-.304-5.466-1.331-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.175 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.651.242 2.872.118 3.175.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.478 5.922.43.37.814 1.102.814 2.222v3.293c0 .319.222.693.823.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12 6 6l-4 4 10 10 10-10-4-4-6 6z"/>
    </svg>
  );
}

function FirebaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.18 18.73l6.82-13.46.44-4.27-6.32 10.9L5.18 18.73zM18.82.01L6.42 16.4l-1.06 2.76 10-6.83L18.82.01zM18.82.01l-4.44 11.5L12 18.4l6.82-4.94L18.82.01z" />
        </svg>
    )
}

function AiSearchIcon() {
    return (
        <div className="relative w-full h-full">
            <Search className="w-6 h-6 absolute bottom-1 right-1" />
            <Sparkles className="w-5 h-5 absolute top-0 left-0" />
        </div>
    )
}

function ResponsiveIcon() {
  return (
    <div className="relative w-full h-full">
        <Smartphone className="w-5 h-5 absolute bottom-0 left-0" />
        <Monitor className="w-6 h-6 absolute top-0 right-0" />
    </div>
  )
}

    
