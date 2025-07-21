import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Book, FileText, BadgeCheck } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: 'TCS National Qualifier Test (NQT) - 2025',
    issuer: 'Tata Consultancy Services',
    description: 'Qualified, demonstrating technical proficiency and problem-solving capabilities.',
  },
  {
    icon: <Book className="w-6 h-6 text-primary" />,
    title: 'Java Full Stack Development Course',
    issuer: 'QSpiders, Wakad',
    description: 'Completed course covering Core Java, Advanced Java, and full-stack development - 2024.',
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Research Publication',
    issuer: 'Final-Year Project',
    description: 'Published research paper, demonstrating academic research and technical writing skills.',
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google/Coursera',
    description: 'Covering IT fundamentals and support practices - 2021.',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications & Achievements" />
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <ScrollAnimationWrapper key={item.title} delay={`${index * 100}ms`}>
              <Card className="bg-card h-full border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md">{item.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-semibold">{item.issuer}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
