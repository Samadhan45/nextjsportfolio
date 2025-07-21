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
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-primary"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    title: 'Software Engineer',
    description: 'Building scalable web applications using MERN stack and AI-powered solutions',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
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
    title: 'Problem Solver',
    description: 'Solved 200+ DSA problems on LeetCode, mastering algorithms & data structures',
  },
  {
    icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
    title: 'Open Source Contributor',
    description: 'Collaborating on projects like Zero Hunger, improving social impact tech',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
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
    title: 'Backend Developer',
    description: 'Managing databases, authentication, and APIs for high-performance applications',
  },
  {
    icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
    title: 'Hackathon Enthusiast',
    description: 'Participated in coding competitions and continuously learning new technologies',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Quick Facts About Me" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {facts.map((fact, index) => (
            <ScrollAnimationWrapper key={fact.title} animation="slideInUp" delay={index * 100}>
              <div className="bg-transparent h-full text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      {fact.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
