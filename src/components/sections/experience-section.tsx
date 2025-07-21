import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const experiences = [
  {
    company: 'Elite Software',
    role: 'Web Development Intern',
    period: 'Oct 2024 - Nov 2024',
    description: "Developed secure, full-stack web applications using Django and Python, focusing on admin dashboard and user role management. Implemented authentication systems using Django's built-in security features and learned end-to-end deployment workflows including environment setup and domain integrations.",
  },
  {
    company: 'Social Digital Wings',
    role: 'Web Development Intern',
    period: 'Apr 2021 - May 2021',
    description: "Led a team of 4 students to build responsive React.js applications. Designed and developed 10+ reusable components using modern web technologies, enhancing UI consistency and performance optimization.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" />
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper key={exp.company}>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-2xl">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full border-4 border-card hidden md:block"></div>
                    <Card className="bg-background border-border/50 hover:border-primary transition-all duration-300 card-glow hover:card-glow-hover">
                      <CardHeader>
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                        <p className="font-semibold">{exp.company}</p>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{exp.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
