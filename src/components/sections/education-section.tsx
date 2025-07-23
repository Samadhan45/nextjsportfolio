import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const educationHistory = [
  {
    degree: 'Bachelor Of Engineering In Computer Engineering',
    institution: 'Alard College Of Engineering, Pune | SPPU',
    period: '2020 - 2024',
    status: 'Completed',
  },
  {
    degree: 'HSC Science',
    institution: 'Balaji College Of Arts, Commerce & Science, Pune',
    period: '2019 - 2021',
    status: 'Completed',
  },
  {
    degree: 'School',
    institution: 'Laxmibai Barne Vidyalaya, Pune',
    period: '2009 - 2019',
    status: 'Completed',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-4 w-0.5 h-full bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {educationHistory.map((edu, index) => (
              <ScrollAnimationWrapper key={index} animation="slideInRight" delay={index * 150}>
                 <div className="pl-12 relative">
                    <div className="absolute left-0 top-1.5">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                         <GraduationCap className="w-5 h-5 text-primary" />
                       </div>
                    </div>
                    <Card className="bg-background border-border/50 hover:border-primary transition-all duration-300 ease-in-out card-glow hover:card-glow-hover">
                      <CardHeader>
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                           <p className="font-semibold">{edu.institution}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{edu.status}</CardDescription>
                      </CardContent>
                    </Card>
                 </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
