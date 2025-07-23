
import SectionHeading from '../shared/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Building, BookOpen, Award } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

const achievements = [
  {
    type: 'Certification',
    title: 'Google Technical Support Fundamentals',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Coursera – Offered by Google',
    description: 'Completed Google’s Technical Support Fundamentals course on Coursera, covering foundational IT skills including troubleshooting, system administration, and networking basics.',
    date: 'Jan 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/DZQDVCWQS843?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'Social Digital Wings',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Social Digital Wings',
    description: 'Certified training program in digital technology and social platforms, focusing on communication tools, digital skills, and professional media presence.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1A5zH_R8KCGGlDk2yeBkAXhP380y96BbH/view?usp=drive_link',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'Elite Software Training',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Elite Software',
    description: 'Certified training in software development fundamentals, tools, and industry practices for modern tech applications.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1A6ZBck4hsBwWbw12dHrSz66fv5tp8x7o/view?usp=drivesdk',
    variant: 'default',
  },
  {
    type: 'Research Paper',
    title: 'All Social Media Management and Monitoring System',
    issuerIcon: <BookOpen className="w-4 h-4" />,
    issuer: 'International Research Journal Of Modernization in Engineering Technology and Science (IRJMETS)',
    description: 'Published paper discussing the integration of AI and automation for effective social media monitoring.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1AGYl2TJ-BZBahDW8ceBVHGaW4oFtJynT/view?usp=sharing',
    variant: 'honor',
  },
  {
    type: 'Certification',
    title: 'Digital Marketing',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Great Learning',
    description: 'Completed the Digital Marketing course by Great Learning, covering SEO, SEM, email campaigns, and social media strategies.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1ASxRtW-swIxFLjQeG9tRK3Qsokr81KoP/view?usp=sharing',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'Android Development',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Great Learning',
    description: 'Certified in Android app development via Great Learning’s Android course, including UI components, layouts, and backend integration.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1ATEBHVL3QGH-Yn1_L1Pb3c5U5E0E8-dd/view?usp=sharing',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'Introduction to C++',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Simplilearn',
    description: 'Completed Introduction to C++ by Simplilearn, learning programming basics, data types, and control structures.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1AVBcuKEM4zeWQ2T-K7g7YL-BK04gNcHL/view?usp=sharing',
    variant: 'default',
  },
  {
    type: 'Certification',
    title: 'Advanced C++',
    issuerIcon: <Building className="w-4 h-4" />,
    issuer: 'Simplilearn',
    description: 'Completed Advanced C++ course from Simplilearn, covering OOP principles, STL, and memory management.',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1AekdWTgfsLp00KcQq5r8gVbjxcaIdnRP/view?usp=sharing',
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
            <ScrollAnimationWrapper key={item.title} animation="slideInUp" delay={index * 100}>
              <Card className={`bg-card h-full border rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col ${item.variant === 'honor' ? 'border-amber-400/50 hover:border-amber-400' : 'border-primary/20 hover:border-primary'}`}>
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
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                      View details <ArrowUpRight className="w-4 h-4" />
                    </a>
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
