import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SectionWrapper id="hero" className="pt-0 md:pt-0">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="about">
        <SectionTitle title="ABOUT ME" />
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SectionTitle title="TECH STACK" />
        <SkillsSection />
      </SectionWrapper>
      
      <SectionWrapper id="experience">
        <SectionTitle title="WHERE I'VE WORKED" />
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <SectionTitle title="GET IN TOUCH" className="text-center items-center" />
        <ContactSection />
      </SectionWrapper>
    </>
  );
}
