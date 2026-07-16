"use client";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-secondary">Bridging the gap between design and engineering.</h3>
        <p className="text-muted text-lg leading-relaxed mb-8">
          {about.summary}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {about.values.map((value, i) => (
          <Card key={i} className={`${i === 2 ? 'sm:col-span-2' : ''} bg-surface/50 border-border/50`}>
            <h4 className="text-lg font-bold text-secondary mb-2">{value.title}</h4>
            <p className="text-muted text-sm">{value.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
