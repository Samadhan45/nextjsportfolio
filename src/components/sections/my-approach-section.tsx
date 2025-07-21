import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { Lightbulb, DraftingCompass, TestTubeDiagonal } from 'lucide-react';

const approachSteps = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Strategy',
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
  },
  {
    phase: 'Phase 2',
    title: 'Design & Development',
    icon: <DraftingCompass className="w-8 h-8 text-primary" />,
  },
  {
    phase: 'Phase 3',
    title: 'Testing & Deployment',
    icon: <TestTubeDiagonal className="w-8 h-8 text-primary" />,
  },
];

export default function MyApproachSection() {
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Approach" subtitle="My process for building successful digital products." />
        <div className="grid md:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <ScrollAnimationWrapper key={step.title} animation="slideInUp" delay={index * 150}>
              <Card className="bg-card h-full text-center p-8 border-border/50 hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 card-glow hover:card-glow-hover">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">{step.icon}</div>
                  <p className="text-muted-foreground">{step.phase}</p>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
