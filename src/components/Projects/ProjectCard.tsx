import { SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../content/data';

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease } }}
      className="border border-border/80 bg-background/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-border hover:shadow-2xl transition-colors duration-300 glow-border group"
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-white font-mono text-lg leading-snug group-hover:text-primary transition-colors break-words">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 shrink-0 uppercase tracking-wider">
              {project.status}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap sm:justify-end">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="View source on GitHub" className="text-slate-300 hover:text-white transition-colors p-1 rounded hover:bg-card">
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-primary transition-colors p-1 rounded hover:bg-card flex items-center gap-1 font-mono text-xs font-bold">
                <span>Live</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-primary font-mono font-bold uppercase tracking-wider">{project.subtitle}</p>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/80">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-card border border-border/80 text-slate-200">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
