import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import MyApproachSection from '@/components/sections/my-approach-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import EducationSection from '@/components/sections/education-section';
import CertificationsSection from '@/components/sections/certifications-section';
import FeaturedResourcesSection from '@/components/sections/featured-resources-section';
import FaqSection from '@/components/sections/faq-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import ClientOnly from '@/components/shared/client-only';
import ScrollAnimationWrapper from '@/components/shared/scroll-animation-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <MyApproachSection />
        <CertificationsSection />
        <FeaturedResourcesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  );
}
