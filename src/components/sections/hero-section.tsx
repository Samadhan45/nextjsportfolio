import { Button } from '@/components/ui/button';
import SocialIcons from '@/components/shared/social-icons';
import ScrollAnimationWrapper from '../shared/scroll-animation-wrapper';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper animation="slideInLeft" className="w-full">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
                Hi, I&apos;m <span className="text-primary">Samadhan Kadam</span>
              </h1>
              <p className="max-w-xl text-foreground/80 leading-relaxed mb-6 mx-auto md:mx-0">
                I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
              </p>
              <p className="max-w-xl text-foreground/80 leading-relaxed mb-8 mx-auto md:mx-0">
                My work spans web development, cloud computing, DevOps, and cybersecurity, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
              </p>

              <div className="relative p-4 border-l-2 border-primary mb-8">
                <p className="text-foreground/80 leading-relaxed italic">
                  A Student Fueled By Curiosity, Innovative Ideas And Continuous Learning, Figuring Out Stuff !!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href="https://drive.google.com/file/d/1Q-R_a5TGlkyxbwOLuUCViSFb65oTkenU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <SocialIcons />
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slideInRight" className="w-full">
            <div className="relative w-80 h-80 mx-auto md:w-96 md:h-96">
              <Image
                src="/samadhankadamimagprofile.png"
                alt="Samadhan Kadam"
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
