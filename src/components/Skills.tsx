import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { resumeData } from '../content/data';

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="space-y-6"
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
          <Code size={20} className="text-primary" /> TECHNICAL STACK &amp; CAPABILITIES
        </h2>
        <p className="text-xs text-slate-300 font-medium mt-1">Core engineering capabilities across SRE, AI, Data Science, and Cloud Infrastructure</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeData.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="border border-border/80 bg-background/80 rounded-2xl p-6 space-y-4 hover:border-border transition-all"
          >
            <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-wider border-b border-border/80 pb-3 flex items-center justify-between">
              <span>{skillGroup.category}</span>
              <span className="text-[10px] text-slate-300 font-bold">{skillGroup.items.length} Techs</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border/80 text-slate-200 text-xs font-mono font-semibold hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
