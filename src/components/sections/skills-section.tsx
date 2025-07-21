import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '../shared/section-heading';
import { CheckCircle2 } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <Html5Icon /> },
      { name: 'CSS3', icon: <Css3Icon /> },
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
      { name: 'React.js', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'TailwindCSS', icon: <TailwindCssIcon /> },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Java', icon: <JavaIcon /> },
      { name: 'Spring Boot', icon: <SpringBootIcon /> },
      { name: 'Node.js', icon: <NodejsIcon /> },
      { name: 'Django', icon: <DjangoIcon /> },
      { name: 'REST APIs', icon: <RestApiIcon /> },
    ],
  },
  {
    category: 'Database Management',
    skills: [
      { name: 'Oracle SQL', icon: <DatabaseIcon /> },
      { name: 'PostgreSQL', icon: <DatabaseIcon /> },
      { name: 'MySQL', icon: <DatabaseIcon /> },
      { name: 'MongoDB', icon: <MongoDbIcon /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <GitHubIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Jenkins', icon: <JenkinsIcon /> },
      { name: 'Vercel', icon: <VercelIcon /> },
    ],
  },
  {
    category: 'Project Management',
    skills: [
      { name: 'Agile', icon: <AgileIcon /> },
      { name: 'Scrum', icon: <ScrumIcon /> },
      { name: 'Jira', icon: <JiraIcon /> },
      { name: 'Team Leadership', icon: <TeamIcon /> },
    ],
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Problem Solving', icon: <ProblemSolvingIcon /> },
      { name: 'Data Structures', icon: <DataStructuresIcon /> },
      { name: 'Algorithms', icon: <AlgorithmsIcon /> },
      { name: 'System Design', icon: <SystemDesignIcon /> },
    ],
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
            <ScrollAnimationWrapper key={category.category} style={{ transitionDelay: `${index * 150}ms` }}>
              <Card className="bg-card h-full p-6 border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 card-glow hover:card-glow-hover flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-secondary/30 transition-all hover:bg-secondary">
                        <div className="w-8 h-8 text-primary">{skill.icon}</div>
                        <p className="text-xs text-center text-muted-foreground">{skill.name}</p>
                      </div>
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

// Icon Components
function Html5Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.625 0h20.75l-1.886 21.328-8.494 2.672-8.491-2.672L1.625 0zM12 19.828l6.237-1.966L19.375 6.5H4.625l1.15 13.041L12 19.828zM12 8.5h6.375l.25-2.812H12v2.812zM12 14.5v2.812l-3.32-.937-.219-2.5h2.164l.156 1.75L12 15.438v-.938h-2.125l-.25-2.812H12v2.812h3.375l-.312 3.5-3.063.812v-2.75l3.125-1.031.188-2.125H12v-2.812z" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.625 0h20.75l-1.886 21.328-8.494 2.672-8.491-2.672L1.625 0zM12 19.828l6.237-1.966L19.375 6.5H4.625l1.15 13.041L12 19.828zM12 8.5h6.375l.25-2.812H12v2.812zM8.5 11.312h3.5v2.813H8.75l.25 2.812h3.5v-2.812h3.5l-.5 5.625-3 1.031v2.813l5.5-1.844.875-9.812h-9.5z" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.016 19.143v-3.411h-2.297v3.411c0 .6-.219.984-.656 1.164-.438.18-.994.18-1.669.023l-.703-1.688c.453.125.86.188 1.219.188.422 0 .633-.172.633-.516v-3.578h2.297v3.578c0 1.25-.563 1.875-1.688 1.875-.625 0-1.219-.14-1.781-.422l-.797 1.547c.75.406 1.625.61 2.625.61 1.719 0 2.922-.844 2.922-2.5zm-8.813-1.586c0-1.031-.469-1.828-1.406-2.39-1-.563-1.5-1.032-1.5-1.61 0-.547.406-.938 1.125-.938.75 0 1.188.359 1.454 1.078l1.968-1.265c-.5-1-1.39-1.594-2.672-1.594-1.609 0-2.687.906-2.687 2.234 0 1.031.5 1.766 1.438 2.328.937.563 1.468 1.031 1.468 1.672 0 .797-.578 1.203-1.312 1.203-.782 0-1.422-.437-1.75-1.28l-2.094.859c.562 1.468 1.72 2.218 3.328 2.218 1.703 0 2.953-1 2.953-2.5z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.583 3h-5.166L12 7.75l2.583-4.75zM12 21c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zm-2.291-5.208L12 12.583l-2.292 3.209-2.041-3.709L12 2.5l6.333 11.583H12l-2.291 3.209z" />
    </svg>
  );
}

function TailwindCssIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-8-6c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8zm12.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5h7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM5 5v14"/>
      <path d="M17 9.03V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4.1"/>
    </svg>
  )
}

function SpringBootIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z"/><path d="M12 5v14"/>
      <path d="M20 12H4"/>
    </svg>
  )
}

function NodejsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.23.36c.2-.36.56-.36.74 0l10.5 18.18c.2.36.02.82-.37.82H1.1c-.39 0-.57-.46-.37-.82L11.23.36zM12 18.4V7.6m-9 10.8h18" />
    </svg>
  );
}

function DjangoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  );
}

function RestApiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V2"/><path d="M12 13v-1"/><path d="M12 22v-6"/>
      <path d="m15 5-3-3-3 3"/><path d="m15 16 3 3 3-3"/><path d="M9 16 6 19l-3-3"/>
      <ellipse cx="12" cy="12" rx="3" ry="1"/><ellipse cx="12" cy="5" rx="3" ry="1"/>
      <ellipse cx="6" cy="19" rx="3" ry="1"/><ellipse cx="18" cy="19" rx="3"ry="1"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
      <path d="M15 17c-1.66 0-3-1.34-3-3"/>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="m16 12H8"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577v-2.088c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.775.418-1.303.762-1.604-2.665-.304-5.466-1.331-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.175 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.651.242 2.872.118 3.175.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.478 5.922.43.37.814 1.102.814 2.222v3.293c0 .319.222.693.823.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 13V9h-4V5h-4V1H6v4H2v4l.05 9.05a2.5 2.5 0 0 0 2.5 2.5H19.5a2.5 2.5 0 0 0 2.5-2.5L22 13z"/>
      <path d="M10 9H6m8 0h-4m4 4h-4m4 4h-4"/>
    </svg>
  );
}

function JenkinsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-3 0-5 2.5-5 5s2 5 5 5 5-2.5 5-5-2-5-5-5zm0-10c-3 0-5 2.5-5 5s2 5 5 5 5-2.5 5-5-2-5-5-5z"/>
      <path d="M12 12a5 5 0 0 0-5 5m5-5a5 5 0 0 1 5 5m0-10a5 5 0 0 0-5 5m-5-5a5 5 0 0 1 5 5"/>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2z"/>
    </svg>
  );
}

function AgileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12H4m16 0-4-4m4 4-4 4M4 12l4-4m-4 4l4 4"/>
    </svg>
  );
}

function ScrumIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zm0 0c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z"/>
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12 6 6l-4 4 10 10 10-10-4-4-6 6z"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );
}

function ProblemSolvingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 1-3 9 9 3-9-3-3 9 3-9 9 3z"/>
    </svg>
  );
}

function DataStructuresIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2"/>
      <path d="M12 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <path d="M6 6h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6"/>
      <path d="M18 18h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/>
      <path d="M12 18v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"/>
      <path d="M18 12h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2"/>
    </svg>
  );
}

function AlgorithmsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10m0-8v2m0 6v2m-4 6H4m16 0h-4m-2-8h8m-16 0H4"/>
    </svg>
  );
}

function SystemDesignIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  );
}
