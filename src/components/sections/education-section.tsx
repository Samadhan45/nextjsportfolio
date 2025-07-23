import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import Image from 'next/image';

const educationHistory = [
  {
    degree: 'Bachelor Of Engineering In Computer Engineering',
    institution: 'Alard College Of Engineering, Pune | SPPU',
    period: '2020 - 2024',
    status: 'Completed',
    image: '/college.jpg',
    dataAiHint: 'university campus'
  },
  {
    degree: 'HSC Science',
    institution: 'Balaji College Of Arts, Commerce & Science, Pune',
    period: '2019 - 2021',
    status: 'Completed',
    image: '/school.jpg',
    dataAiHint: 'college building'
  },
  {
    degree: 'School',
    institution: 'Laxmibai Barne Vidyalaya, Pune',
    period: '2009 - 2019',
    status: 'Completed',
    image: '/barneschool.jpg',
    dataAiHint: 'school building'
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {educationHistory.map((edu, index) => (
              <ScrollAnimationWrapper key={index} animation="slideInUp" delay={index * 150}>
                <Card className="bg-card border-border/50 hover:border-primary transition-all duration-300 ease-in-out card-glow hover:card-glow-hover overflow-hidden flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      fill
                      className="object-cover"
                      data-ai-hint={edu.dataAiHint}
                    />
                  </div>
                  <div className="flex flex-col p-6 md:w-2/3">
                    <CardHeader>
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                      <div className="flex items-center gap-2 text-primary pt-2">
                         <GraduationCap className="w-5 h-5" />
                         <p className="font-semibold">{edu.institution}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{edu.status}</CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
      </div>
    </section>
  );
}
