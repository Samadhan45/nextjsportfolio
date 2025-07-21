import { Button } from '@/components/ui/button';
import SocialIcons from '@/components/shared/social-icons';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I&apos;m <span className="text-primary text-glow">Samadhan Kote</span>
                </h1>
                <p className="max-w-xl text-foreground/80 leading-relaxed mb-8 mx-auto md:mx-0">
                  I am a Java Developer skilled in building scalable full-stack applications using React.js and Next.js. I specialize in developing software solutions that bridge technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
                </p>
                <p className="max-w-xl text-foreground/80 leading-relaxed mb-8 mx-auto md:mx-0">
                  A Developer Fueled By Curiosity, Innovation And Continuous Learning, Building Solutions That Matter!!
                </p>
                <div className="flex justify-center md:justify-start items-center space-x-4">
                   <Button asChild>
                      <a href="/samadhan-kadam-resume.pdf" download>Download CV</a>
                  </Button>
                  <div className="md:hidden">
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fade-up" delay="200ms">
            <div className="relative w-80 h-80 mx-auto md:w-96 md:h-96">
                <Image 
                    src="https://placehold.co/400x400.png"
                    alt="Samadhan Kadam"
                    width={400}
                    height={400}
                    className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    data-ai-hint="man portrait"
                />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
