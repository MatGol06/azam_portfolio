"use client";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  const { skills } = portfolioData;

  const renderSkillGroup = (title, items, isLarge = false) => (
    <Card className={`flex flex-col h-full ${isLarge ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface to-background' : 'bg-surface/50'}`}>
      <h3 className="text-xl font-bold text-secondary mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3 mt-auto">
        {items.map((skill, i) => (
          <Badge key={i} variant={isLarge ? "primary" : "default"} className="text-sm px-4 py-2">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {renderSkillGroup("Frontend Architecture", skills.frontend, true)}
      {renderSkillGroup("Backend Systems", skills.backend)}
      {renderSkillGroup("Systems & Networks", skills.systems)}
      {renderSkillGroup("Tools & Workflow", skills.tools, true)}
    </div>
  );
}
