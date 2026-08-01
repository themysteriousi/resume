import { motion } from 'framer-motion';
import { Server, Database, Zap, BookOpen, Terminal, ArrowDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const; // custom cubic-bezier

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

const metrics = [
  { icon: Server, label: 'AWS SRE Uptime', value: '99.98% SLA', accent: 'emerald' },
  { icon: Database, label: 'ChromaDB RAG Vault', value: '37,420 Cases', accent: 'purple' },
  { icon: Zap, label: 'Groq LLaMA 3.3', value: 'SSE Telemetry', accent: 'cyan' },
  { icon: BookOpen, label: 'Academic Degree', value: 'B.E. AI & DS \'27', accent: 'yellow' },
] as const;

const accentMap = {
  emerald: 'bg-primary/10 text-primary border-primary/20',
  purple: 'bg-primary/10 text-primary border-primary/20',
  cyan: 'bg-cyan-500/10 text-primary border-cyan-500/20',
  yellow: 'bg-yellow-500/10 text-primary border-yellow-500/20',
} as const;

export default function Hero() {
  return (
    <section id="hero" className="space-y-6 pt-12 pb-8 sm:pt-20 sm:pb-12 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent -z-10" />
      
      <motion.div
        className="flex flex-col space-y-8 relative z-10"
        initial="visible"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full w-fit">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-[10px] sm:text-xs text-primary font-semibold tracking-wider">
            AI & DEVOPS / SRE ENGINEER
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-foreground uppercase font-sans break-words">
            Autonomous <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Systems
            </span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground font-mono max-w-2xl leading-relaxed">
            Building production-grade AWS SRE monitoring platforms, multi-agent legal RAG systems, and self-healing cloud pipelines.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-4">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm font-mono transition-all flex items-center gap-2"
          >
            <span>Explore Builds</span>
            <ArrowDown size={16} />
          </a>
          <a 
            href="#terminal" 
            className="px-6 py-3 rounded-xl bg-card hover:bg-muted text-foreground border border-border font-mono text-sm transition-all flex items-center gap-2"
          >
            <Terminal size={16} className="text-primary" />
            <span>Run SRE Console</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Quick Metrics Ribbon */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 sm:pt-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            variants={itemVariants}
            className="border border-border bg-background/80 p-4 rounded-xl flex items-center space-x-3 backdrop-blur-sm"
          >
            <div className={`p-2.5 rounded-lg border ${accentMap[m.accent]}`}>
              <m.icon size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground block uppercase">{m.label}</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-foreground">{m.value}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
