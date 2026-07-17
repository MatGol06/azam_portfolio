import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects | Azam",
  description: "A comprehensive collection of my web development projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen pb-24">
      <SectionWrapper className="py-12 md:py-16">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8 -ml-4">
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </Button>
          </Link>
          <SectionTitle 
            title="Project Archive" 
            subtitle="All Works" 
            className="mb-0"
          />
          <p className="text-muted text-lg max-w-2xl mt-6">
            A complete collection of things I've built, ranging from web applications to interactive digital experiences.
          </p>
        </div>
        
        <div className="mt-20">
          <ProjectsSection />
        </div>
      </SectionWrapper>
    </div>
  );
}
