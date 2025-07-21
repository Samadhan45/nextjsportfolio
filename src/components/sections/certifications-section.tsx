import SectionHeading from '../shared/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Building, BookOpen, Trophy, Award } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { Button } from '../ui/button';

const achievements = [
  {
    type: 'Certification',
    title: 'AWS Cloud Foundations',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Amazon Web Services (AWS)',
    description: 'Certified AWS Cloud Foundations Certification, demonstrating foundational knowledge of AWS services, cloud concepts, and best practices.',
    date: 'Jan 2025',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'MongoDB Developer Certification',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'MongoDB Inc.',
    description: 'Achieved MongoDB Developer Certification, demonstrating proficiency in schema design, aggregation, and performance optimization.',
    date: 'Mar 2025',
    variant: 'default',
  },
  {
    type: 'Honor',
    title: 'Honored by Hon. Amit Dada Kolhe.',
    issuerIcon: <Trophy className="w-4 h-4" />,
    issuer: 'Tech Community',
    description: 'Recognized for outstanding mentorship and guidance in the field of software development.',
    date: 'Mar 2025',
    variant: 'honor',
  },
  {
    type: 'Achievement',
    title: '200 Questions on LeetCode',
    issuerIcon: <BookOpen className="w-4 h-4" />,
    issuer: 'LeetCode',
    description: 'Solved 200+ Data Structures and Algorithms questions on LeetCode, showcasing strong problem-solving skills and algorithmic proficiency.',
    date: 'Mar 2025',
    variant: 'default',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements &amp; Honors" subtitle="A selection of my professional certifications, notable achievements, and honors."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <ScrollAnimationWrapper key={item.title} style={{ transitionDelay: `${index * 150}ms` }}>
              <Card className={`bg-card h-full border rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${item.variant === 'honor' ? 'border-amber-400/50 hover:border-amber-400' : 'border-primary/20 hover:border-primary'}`}>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Badge variant={item.variant === 'honor' ? 'secondary' : 'default'} className={`mb-4 w-fit ${item.variant === 'honor' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 'bg-primary/10 text-primary border-primary/20'}`}>{item.type}</Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    {item.issuerIcon}
                    <span>{item.issuer}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{item.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mt-auto">
                    <span>{item.date}</span>
                    <a href="#" className="flex items-center gap-1 text-primary hover:underline">
                      View details <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
        <div className="text-center mt-12">
          <ScrollAnimationWrapper>
            <Button>
                <Award className="mr-2 h-4 w-4" />
                See All Achievements
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
