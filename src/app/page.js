import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SectionWrapper id="hero" className="pt-0 md:pt-0">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="about">
        <SectionTitle title="About Me" subtitle="Who am I?" />
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SectionTitle title="Tech Stack" subtitle="My Arsenal" />
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <SectionTitle title="Featured Projects" subtitle="Selected Work" />
        <ProjectsSection />
      </SectionWrapper>
      
      <SectionWrapper id="experience">
        <SectionTitle title="Where I've Worked" subtitle="Experience" />
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <SectionTitle title="Get In Touch" subtitle="What's Next?" className="text-center items-center" />
        <ContactSection />
      </SectionWrapper>
    </>
  );
}
