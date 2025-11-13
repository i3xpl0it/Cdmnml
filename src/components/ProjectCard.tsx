import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  link?: string;
}

export function ProjectCard({ title, description, technologies, icon: Icon, link }: ProjectCardProps) {
  return (
    <div className="group relative bg-background p-10 transition-all duration-500 ease-out h-full flex flex-col hover:shadow-[0_0_100px_rgba(128,128,128,0.15),inset_0_0_50px_rgba(128,128,128,0.05)] dark:hover:bg-[#0f0f0f] hover:bg-[#fafafa] hover:border hover:border-foreground/10 hover:-translate-y-1">
      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300" />
      </div>
      <h3 className="mb-3 text-foreground/80 group-hover:text-foreground transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-1 transition-colors duration-300 group-hover:text-muted-foreground/90">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-border/50 border border-border text-foreground/70 group-hover:text-foreground group-hover:border-foreground/20 transition-all duration-300 backdrop-blur-sm group-hover:bg-border/70"
            style={{ fontVariantNumeric: 'tabular-nums', fontSize: '0.75rem', fontWeight: 400 }}
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <span className="sr-only">View project</span>
        </a>
      )}
    </div>
  );
}
