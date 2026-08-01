import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Server, Activity, Cpu, Database, BookOpen, Award, MapPin, Zap } from 'lucide-react';
import { resumeData, timelineMilestones } from '../content/data';

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

const archCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

const archContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ArchitectureNodes = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={archContainerVariants}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        { stage: "01", title: "React Workspace", desc: "User prompt entry & stateful workspace visualizer", icon: Server },
        { stage: "02", title: "Node.js SSE Bridge", desc: "Express telemetry proxy & Server-Sent Events stream", icon: Activity },
        { stage: "03", title: "FastAPI RAG Engine", desc: "LangChain + local Llama 3.2 query parsing & synthesis", icon: Cpu },
        { stage: "04", title: "ChromaDB & IPFS", desc: "37,000+ indexed Supreme Court cases & CID doc vault", icon: Database }
      ].map((node, idx) => (
        <motion.div 
          key={idx}
          variants={archCardVariants}
          className={`border p-5 rounded-xl transition-all duration-500 relative flex flex-col justify-between ${
            activeStep === idx 
              ? "border-primary/90 bg-primary/10 shadow-lg shadow-primary/10 scale-105" 
              : "border-border/80 bg-background/90 text-slate-200"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-primary">STAGE {node.stage}</span>
              {activeStep === idx && (
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
              )}
            </div>
            <h3 className="font-mono font-bold text-white text-base mb-1">{node.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{node.desc}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span>Pipeline Node</span>
            <span className="text-primary font-bold">Active</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Experience() {
  return (
    <>
      {/* SECTION HEADER */}
      <div className="mb-8">
        <motion.div variants={itemVariants} initial="visible" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">
            EXPERIENCE<span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-slate-300 mt-2 font-mono font-medium">
            // Architecture designs & academic timeline
          </p>
        </motion.div>
      </div>

      <section
        id="architecture"
        className="border border-border/80 bg-background/80 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <motion.div variants={itemVariants} initial="visible" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <GitBranch size={20} className="text-primary" /> LEXAGENT: 4-STAGE MULTI-AGENT RAG ARCHITECTURE
            </h2>
            <p className="text-xs text-slate-300 font-medium mt-1">Decoupled 3-tier legal intelligence engine &amp; real-time SSE telemetry flow</p>
          </div>
          <span className="text-xs font-mono text-primary font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/40 w-fit">
            System Live
          </span>
        </motion.div>

        <ArchitectureNodes />
      </section>

      {/* VERTICAL STEPPER TIMELINE */}
      <section
        id="timeline"
        className="space-y-6"
      >
        <motion.div variants={itemVariants} initial="visible" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
            <Zap size={20} className="text-primary" /> TIMELINE &amp; MILESTONES
          </h2>
          <p className="text-xs text-slate-300 font-medium mt-1">Chronological record of academic progress and deployed builds</p>
        </motion.div>

        <div className="relative pl-4 sm:pl-8 space-y-12 before:absolute before:inset-0 before:ml-[1.4rem] sm:before:ml-[2.4rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-border/80 overflow-hidden">
          {/* Animated tracing beam */}
          <motion.div 
            className="absolute left-[1.4rem] sm:left-[2.4rem] top-0 w-0.5 h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent opacity-90 -translate-x-px z-0"
            animate={{ top: ["-33%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {timelineMilestones.map((milestone) => (
            <motion.div
              key={milestone.id}
              variants={itemVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-10 sm:pl-12"
            >
              {/* Stepper Node */}
              <div className="absolute left-[-1.5rem] sm:left-[-1.5rem] mt-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border z-10 text-primary shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:border-primary/50 transition-colors">
                <milestone.icon size={16} />
              </div>

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="text-lg font-bold text-white font-mono tracking-tight">{milestone.title}</h3>
                <span className="text-xs font-mono font-semibold text-slate-200 bg-card border border-border/80 px-2.5 py-0.5 rounded-full w-fit">
                  {milestone.date}
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-sans max-w-2xl">{milestone.content}</p>
              
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">{milestone.category}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                  {milestone.status.replace('-', ' ')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACADEMIC & ACHIEVEMENTS */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} initial="visible" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <BookOpen size={20} className="text-primary" /> ACADEMIC BACKGROUND
            </h2>
          </div>
          <div className="border border-border/80 bg-background/80 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-base font-mono">{resumeData.education.institution}</h3>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/30">{resumeData.education.timeline}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
              <MapPin size={13} className="text-primary" /> {resumeData.education.location}
            </p>
            <p className="text-xs sm:text-sm text-primary font-mono font-bold pt-1">{resumeData.education.degree}</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} initial="visible" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <Award size={20} className="text-primary" /> ACTIVITIES &amp; CERTIFICATIONS
            </h2>
          </div>
          <div className="space-y-3">
            {resumeData.achievements.map((item, idx) => (
              <div key={idx} className="border border-border/80 bg-background/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-white">{item.title}</span>
                  <span className="text-[10px] text-slate-200 font-mono bg-card px-2 py-0.5 rounded border border-border/80 shrink-0 font-semibold">{item.organization}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
