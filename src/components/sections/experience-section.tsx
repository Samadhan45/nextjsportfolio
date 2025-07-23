import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { Briefcase, FileText } from 'lucide-react';
import { Button } from '../ui/button';

const experiences = [
  {
    company: 'Elite Software',
    role: 'Web Development Intern',
    period: 'Oct 2024 - Nov 2024',
    description: "Developed secure, full-stack web applications using Django and Python, focusing on admin dashboard and user role management. Implemented authentication systems using Django's built-in security features and learned end-to-end deployment workflows including environment setup and domain integrations.",
    certificateLink: 'https://drive.google.com/file/d/1EpMT-XXvzgy45JhvGAKfFmVwHbEAE785/view?usp=sharing'
  },
  {
    company: 'Social Digital Wings',
    role: 'Web Development Intern',
    period: 'Apr 2021 - May 2021',
    description: "Led a team of 4 students to build responsive React.js applications. Designed and developed 10+ reusable components using modern web technologies, enhancing UI consistency and performance optimization.",
    certificateLink: 'https://drive.google.com/file/d/196YnWszgxhaBxToSMKmAFOYNh1A8lkQK/view?usp=sharing'
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience, Internships & Qualification" subtitle="My professional journey and qualifications." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-4 w-0.5 h-full bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper key={exp.company} animation="slideInLeft" delay={index * 150}>
                 <div className="pl-12 relative">
                    <div className="absolute left-0 top-1.5">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                         <Briefcase className="w-5 h-5 text-primary" />
                       </div>
                    </div>
                    <Card className="bg-background border-border/50 hover:border-primary transition-all duration-300 ease-in-out card-glow hover:card-glow-hover">
                      <CardHeader>
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                           <p className="font-semibold">{exp.company}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{exp.description}</CardDescription>
                         <Button asChild variant="link" className="p-0 h-auto mt-4">
                           <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                              <FileText className="mr-2 h-4 w-4" /> View Certificate
                           </a>
                         </Button>
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
