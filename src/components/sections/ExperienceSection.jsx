"use client";
import { portfolioData } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-12">
      {experience.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
          
          <div className="bg-surface/60 backdrop-blur-md p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-muted mb-4">{exp.company}</h4>
            {exp.description && <p className="text-muted leading-relaxed mb-6">{exp.description}</p>}
            
            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start text-sm text-muted">
                  <span className="text-primary mr-3 mt-1">▹</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      
      {/* Education Section */}
      <div className="pt-12 mt-12 border-t border-border/50">
        <h2 className="text-2xl font-bold text-secondary mb-12 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary block" /> Education
        </h2>
        {portfolioData.education.map((edu) => (
          <div key={edu.id} className="relative pl-8 md:pl-12 mb-12">
            <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="bg-surface/60 backdrop-blur-md p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <h4 className="text-lg font-medium text-muted mb-3">{edu.school}</h4>
              {edu.details && <p className="text-muted leading-relaxed text-sm">{edu.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
