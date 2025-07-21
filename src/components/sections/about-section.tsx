import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Smartphone, Users, Zap, Briefcase } from 'lucide-react';
import SectionHeading from '../shared/section-heading';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Full-Stack Applications',
    description: 'Building scalable full-stack applications using React.js, Next.js, and Java.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'Secure Web Apps',
    description: 'Developing secure web applications with Django, Node.js, and database integration.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'Responsive UIs',
    description: 'Creating responsive, mobile-first user interfaces with modern frontend technologies.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Authentication Systems',
    description: 'Implementing authentication systems and user role management solutions.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Team Leadership',
    description: 'Leading development teams and managing project lifecycles from design to deployment.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Continuous Learning',
    description: 'Continuously learning new technologies and frameworks to stay current.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I Do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={service.title} delay={`${index * 100}ms`}>
              <Card className="bg-card h-full text-center p-6 border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
