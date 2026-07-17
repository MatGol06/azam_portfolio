"use client";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNetworkWired,
  FaMicrochip,
  FaShieldHalved,
  FaHeadphones,
  FaServer,
  FaWindows,
  FaLinux
} from "react-icons/fa6";

const skillIcons = {
  // Frontend
  "HTML": <FaHtml5 className="text-[#E34F26]" size={16} />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" size={16} />,
  "JavaScript": <FaJs className="text-[#F7DF1E]" size={16} />,
  "React": <SiReact className="text-[#61DAFB]" size={16} />,
  "Next.js": <SiNextdotjs className="text-secondary" size={16} />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" size={16} />,
  "Bootstrap": <SiBootstrap className="text-[#7952B3]" size={16} />,
  
  // Backend
  "Node.js": <SiNodedotjs className="text-[#339933]" size={16} />,
  "PHP": <SiPhp className="text-[#777BB4]" size={16} />,
  "MySQL": <SiMysql className="text-[#4479A1]" size={16} />,
  "REST APIs": <FaServer className="text-primary" size={16} />,
  "MongoDB": <SiMongodb className="text-[#47A248]" size={16} />,
  
  // Systems
  "Windows": <FaWindows className="text-[#0078D4]" size={16} />,
  "Linux": <FaLinux className="text-secondary" size={16} />,
  "Networking": <FaNetworkWired className="text-primary" size={16} />,
  "Hardware": <FaMicrochip className="text-primary" size={16} />,
  "Cybersecurity": <FaShieldHalved className="text-primary" size={16} />,
  
  // Tools
  "Git": <SiGit className="text-[#F05032]" size={16} />,
  "GitHub": <SiGithub className="text-secondary" size={16} />,
  "IT Support": <FaHeadphones className="text-primary" size={16} />
};

export function SkillsSection() {
  const { skills } = portfolioData;

  const renderSkillGroup = (title, items, isLarge = false) => (
    <Card className={`flex flex-col h-full ${isLarge ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface to-background' : 'bg-surface/50'}`}>
      <h3 className="text-xl font-bold text-secondary mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, i) => (
          <Badge key={i} variant={isLarge ? "primary" : "default"} className="text-sm px-4 py-2 flex items-center gap-2 font-medium">
            {skillIcons[skill] || null}
            <span>{skill}</span>
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
