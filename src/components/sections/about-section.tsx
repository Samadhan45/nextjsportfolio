import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Zap, Rocket, Users, Globe } from 'lucide-react';
import SectionHeading from '../shared/section-heading';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const facts = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'Full Stack Developer',
    description: 'Expertise in building scalable web applications from front to back.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Java Specialist',
    description: 'Deep knowledge in Java and its ecosystem for robust backend solutions.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Project Leadership',
    description: 'Experience leading teams to deliver high-quality software on time.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Remote Collaboration',
    description: 'Proficient in remote work environments and collaborative tools.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Global Mindset',
    description: 'Passionate about creating solutions with a worldwide impact.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Quick Facts About Me" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {facts.map((fact, index) => (
            <ScrollAnimationWrapper key={fact.title} delay={`${index * 100}ms`}>
              <Card className="bg-card h-full text-center p-6 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="items-center p-0 mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg mb-4">
                    {fact.icon}
                  </div>
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
