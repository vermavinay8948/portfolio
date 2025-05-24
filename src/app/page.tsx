
import { HeroSection } from '@/components/sections/hero-section';
import { EducationSection } from '@/components/sections/education-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <AnimatedSection delay={100}>
          <HeroSection />
        </AnimatedSection>
        <Separator className="my-0 bg-border/30" />
        <AnimatedSection delay={200}>
          <EducationSection />
        </AnimatedSection>
        <Separator className="my-0 bg-border/30" />
        <AnimatedSection delay={200}>
          <SkillsSection />
        </AnimatedSection>
        <Separator className="my-0 bg-border/30" />
        <AnimatedSection delay={200}>
          <ExperienceSection />
        </AnimatedSection>
        <Separator className="my-0 bg-border/30" />
        <AnimatedSection delay={200}>
          <ProjectsSection />
        </AnimatedSection>
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/30">
        © {new Date().getFullYear()} Vinay Verma. All rights reserved.
      </footer>
    </div>
  );
}
