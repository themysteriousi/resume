import { motion } from 'framer-motion';
import { Layers, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../../content/data';
import ProjectCard from './ProjectCard';

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function ProjectGrid() {
  return (
    <section id="projects" className="space-y-6">
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
            <Layers size={20} className="text-primary" /> FEATURED SYSTEM BUILDS
          </h2>
          <p className="text-xs text-slate-300 font-medium mt-1">Production-grade infrastructure and intelligent AI applications</p>
        </div>
        <a href={resumeData.github} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1">
          View Github Repositories <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {resumeData.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
