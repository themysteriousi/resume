import { motion } from 'framer-motion';
import { resumeData } from '../content/data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border/80 bg-background/90 py-8 text-center text-xs font-mono space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease }}
    >
      <p className="text-slate-200 font-medium">© 2026 {resumeData.name}. Built with React, TypeScript, Tailwind CSS &amp; 3D Spline Controls.</p>
      <p className="text-xs text-slate-400 font-mono">AI &amp; DevOps SRE Operations Engine • {resumeData.location}</p>
    </motion.footer>
  );
}
