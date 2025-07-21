import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import CustomizeSkillDialog from '../shared/customize-skill-dialog';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const skills = [
  {
    title: 'Frontend Development',
    description: 'Designing and developing modern, responsive user interfaces using React.js, HTML5, CSS3, and JavaScript.',
  },
  {
    title: 'Backend Development',
    description: 'Architecting and maintaining scalable backend systems using Java, Django, Node.js, and Next.js.',
  },
  {
    title: 'Database Management',
    description: 'Managing and optimizing databases with Oracle SQL, PostgreSQL, and efficient data querying.',
  },
  {
    title: 'Full-Stack Integration',
    description: 'Building end-to-end applications with seamless frontend-backend integration and deployment.',
  },
  {
    title: 'Team Leadership',
    description: 'Leading development teams, managing project lifecycles, and coordinating collaborative development efforts.',
  },
  {
    title: 'Problem Solving',
    description: 'Strong debugging and problem-solving skills with focus on scalable, efficient solutions.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Here's a quick overview of my skills including frontend magic, backend wizardry, and everything in between. I am always eager to learn new technologies."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollAnimationWrapper key={skill.title} delay={`${index * 100}ms`}>
              <Card className="bg-background h-full p-6 border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                <CardHeader>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
                <div className="mt-4">
                   <CustomizeSkillDialog skillDescription={skill.description} />
                </div>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
