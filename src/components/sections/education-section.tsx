import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />
        <ScrollAnimationWrapper>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background border-border/50 hover:border-primary transition-all duration-300 card-glow hover:card-glow-hover text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">B.E. in Computer Engineering</CardTitle>
                <CardDescription className="text-lg">
                  Savitribai Phule Pune University, Pune, India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dec 2021 - May 2025</p>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
