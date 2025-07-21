import { Button } from '@/components/ui/button';
import SocialIcons from '@/components/shared/social-icons';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I&apos;m <span className="text-primary text-glow">Samadhan Vilas Kadam</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer | Java Developer | React Developer
          </h2>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-up" delay="200ms">
          <p className="max-w-4xl mx-auto text-foreground/80 leading-relaxed mb-8">
            I am a Java Developer skilled in building scalable full-stack applications using React.js and Next.js. I specialize in developing software solutions that bridge technology and real-world challenges, ensuring efficiency, usability, and meaningful impact. My work spans full-stack development, web technologies, and database management, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay="400ms">
          <div className="flex justify-center items-center space-x-4 mb-12">
             <Button asChild>
                <a href="/samadhan-kadam-resume.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="outline">
                <a href="#contact">Contact Info</a>
            </Button>
          </div>
          <SocialIcons />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-up" delay="600ms">
           <p className="text-lg text-accent mt-12 italic">
            &quot;A Developer Fueled By Curiosity, Innovation And Continuous Learning, Building Solutions That Matter!!&quot;
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
