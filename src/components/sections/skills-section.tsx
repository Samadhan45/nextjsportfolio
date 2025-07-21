import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TailwindCSS'],
  },
  {
    category: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Django', 'REST APIs'],
  },
  {
    category: 'Database Management',
    skills: ['Oracle SQL', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Vercel'],
  },
  {
    category: 'Project Management',
    skills: ['Agile', 'Scrum', 'Jira', 'Team Leadership'],
  },
  {
    category: 'Other Skills',
    skills: ['Problem Solving', 'Data Structures', 'Algorithms', 'System Design'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A detailed list of my technical skills and tools I use to build amazing products."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper key={category.category} delay={`${index * 100}ms`}>
              <Card className="bg-card h-full p-6 border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
