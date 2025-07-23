import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const facts = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-primary"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    title: '🚀 Software Engineer',
    description: 'Building scalable web applications using the MERN stack, Java, and AI tools like Gemini AI. Passionate about delivering clean, efficient, and impactful digital solutions.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-primary"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: '🧠 Problem Solver',
    description: 'Strong in debugging and logic building with solid foundations in Java, C++, and Python. Continuously learning and applying algorithms to real-world challenges.',
  },
  {
    icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-primary"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    ),
    title: '🌍 Open Source Contributor',
    description: 'Contributed to impactful tech initiatives like Zero Hunger, helping enhance UI, fix bugs, and collaborate with teams for social good.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-primary"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: '🔧 Backend Developer',
    description: 'Experienced in Django, Node.js, PostgreSQL, and authentication systems like Clerk. Handle secure session management, API integration, and performance-focused backend logic.',
  },
  {
    icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-primary"
        >
          <path d="m13.29 13.9-1.58 1.58a2 2 0 0 1-2.82 0L4.29 10.9a2 2 0 0 1 0-2.82l5.6-5.6A2 2 0 0 1 12.7 4l4.6 4.6a2 2 0 0 1 0 2.82z" />
          <path d="m17.6 17.6-1.58 1.58a2 2 0 0 1-2.82 0L9 15" />
        </svg>
    ),
    title: '⚡ Hackathon & Project Builder',
    description: 'Created full-stack apps like Kharcha (AI-powered finance app) and a personal portfolio website. Always exploring new technologies through hands-on projects and internships.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Quick Facts About Me" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <ScrollAnimationWrapper key={fact.title} animation="slideInUp" delay={index * 100}>
                <Card className="bg-card h-full text-center p-6 border-border/50 hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 card-glow hover:card-glow-hover">
                  <CardHeader className="p-0 items-center">
                    <div className="p-4 bg-primary/10 rounded-lg mb-4">
                      {fact.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{fact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
