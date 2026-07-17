"use client";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectGallery } from "@/components/ui/ProjectGallery";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <div className="flex flex-col gap-24">
      {projects.map((project, index) => (
        <div key={project.id} className={`flex flex-col gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Project Image */}
          <div className="w-full lg:w-3/5">
            <Card className="p-2 overflow-hidden aspect-[4/3] group relative" hover={false}>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              {/* Image Carousel / Single Image */}
              <ProjectGallery images={project.images || project.image} alt={project.title} />
            </Card>
          </div>

          {/* Project Details */}
          <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start'}`}>
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2">Featured Project</span>
            <h3 className="text-3xl font-bold text-secondary mb-6">{project.title}</h3>
            
            <Card className={`bg-surface/90 backdrop-blur-md p-6 mb-6 z-20 relative w-full lg:w-[120%] lg:-ml-[20%] ${index % 2 !== 0 ? 'lg:-mr-[20%] lg:ml-0' : ''}`} hover={false}>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </Card>

            <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
              {project.tech.map((t, i) => (
                <Badge key={i} variant="default">{t}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-2">
              {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-secondary transition-colors text-sm font-medium" aria-label="GitHub Link">
                  <FaGithub size={20} /> Source Code
                </a>
              )}
              {project.live && project.live !== "#" ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm font-medium" aria-label="External Link">
                  <ExternalLink size={20} /> Live Website
                </a>
              ) : (
                <span className="flex items-center gap-2 text-muted/50 text-sm font-medium cursor-not-allowed" aria-label="Website Unavailable">
                  <ExternalLink size={20} /> Unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
