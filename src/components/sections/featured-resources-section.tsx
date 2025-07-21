import SectionHeading from '../shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import { FileText, Rss } from 'lucide-react';
import { Button } from '../ui/button';

const resources = [
    {
        icon: <FileText className="w-6 h-6 text-primary" />,
        title: 'Solving Authentication',
        category: 'Article'
    },
    {
        icon: <Rss className="w-6 h-6 text-primary" />,
        title: 'React Best Practices',
        category: 'Blog Post'
    }
]

export default function FeaturedResourcesSection() {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Resources" subtitle="A collection of my articles and blog posts." />
        <ScrollAnimationWrapper animation="fadeIn">
            <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                    <div className="divide-y divide-border">
                        {resources.map(resource => (
                            <div key={resource.title} className="py-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-md">
                                        {resource.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{resource.title}</h4>
                                        <p className="text-sm text-muted-foreground">{resource.category}</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">Read More</Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
