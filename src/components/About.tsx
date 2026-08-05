import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Activity } from 'lucide-react';
import { resumeData } from '../content/data';

const ease = [0.22, 1, 0.36, 1] as const;

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
};

const metricCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

const metricsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "OM_CHAUHAN SRE TELEMETRY OS v2.4 [Initialized]",
    "Type 'help' or click shortcuts to execute commands.",
    ""
  ]);

  const [metrics, setMetrics] = useState({
    cpu: 32,
    memory: 46,
    latency: 1.12,
    vectors: 37420
  });

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const terminalPanel = terminalEndRef.current?.parentElement;
    terminalPanel?.scrollTo({
      top: terminalPanel.scrollHeight,
      behavior: 'smooth',
    });
  }, [terminalLogs]);

  // Live telemetry pulse simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.min(95, Math.max(12, Math.floor(prev.cpu + (Math.random() * 12 - 6)))),
        memory: Math.min(85, Math.max(25, Math.floor(prev.memory + (Math.random() * 6 - 3)))),
        latency: Number(Math.max(0.7, Math.min(2.4, prev.latency + (Math.random() * 0.2 - 0.1))).toFixed(2)),
        vectors: 37420 + Math.floor(Math.random() * 5)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Real-time canvas wave graph renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const render = () => {
      step += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.6)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw primary wave
      ctx.beginPath();
      ctx.strokeStyle = '#f76046';
      ctx.lineWidth = 2;
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.02 + step) * 20 + Math.cos(x * 0.01 + step * 1.5) * 10 + 55;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary wave
      ctx.beginPath();
      ctx.strokeStyle = '#f76046';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.cos(x * 0.015 - step * 0.8) * 15 + 55;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: string[] = [];

    if (cleanCmd === 'help') {
      response = [
        `> ${cmd}`,
        "Available Commands:",
        "  neofetch    - System information & SRE profile",
        "  devguard    - Run DevGuard AWS auto-remediation demo",
        "  lexagent    - Execute LexAgent 4-stage legal query",
        "  skills      - List core engineering capabilities",
        "  projects    - Output active production builds",
        "  matrix      - Toggle Cyber Matrix stream mode",
        "  clear       - Clear terminal output"
      ];
    } else if (cleanCmd === 'neofetch') {
      response = [
        `> ${cmd}`,
        `  OS: SRE Telemetry OS v2.4`,
        `  User: ${resumeData.name}`,
        `  Role: ${resumeData.role}`,
        `  Location: ${resumeData.location}`,
        `  Stack: React, TypeScript, FastAPI, AWS SRE, Docker, Python`,
        `  Uptime: 99.98% SLA (Production)`
      ];
    } else if (cleanCmd === 'skills') {
      response = [
        `> ${cmd}`,
        "Core Capabilities:",
        "  • Cloud & DevOps: AWS (EC2, S3, IAM, CloudWatch), Docker, CI/CD Pipelines",
        "  • AI & Data: FastAPI, LangChain, Llama 3.2, ChromaDB, Vector Databases",
        "  • Frontend: React 19, TypeScript, Tailwind CSS v4, Three.js, GSAP",
        "  • Languages: Python, JavaScript, C++, Bash Scripting"
      ];
    } else if (cleanCmd === 'projects') {
      response = [
        `> ${cmd}`,
        "Active System Builds:",
        "  1. DevGuard SRE - Self-healing CloudWatch auto-remediation engine",
        "  2. LexAgent RAG  - 4-stage legal search across 37,420 court cases",
        "  3. Sterling Nav - Kinetic navigation architecture with micro-interactions"
      ];
    } else if (cleanCmd === 'devguard') {
      response = [
        `> ${cmd}`,
        "[DevGuard] Simulating High CPU Metric Alarm on EC2 instance i-0a8f9c2d...",
        "[Alert] Triggered CloudWatch Event -> Lambda Webhook",
        "[Action] Auto-triggering Ansible playbook: restore_memory.yml",
        "[Result] Memory reclaimed by 60%. System status: HEALTHY (200 OK)"
      ];
    } else if (cleanCmd === 'lexagent') {
      response = [
        `> ${cmd}`,
        "[LexAgent] Query: 'Article 21 Fundamental Rights'",
        "[Step 1] LangChain Agent parsing query parameters...",
        "[Step 2] ChromaDB vector lookup across 37,420 Supreme Court documents...",
        "[Step 3] Local Llama 3.2 synthesizing holding ratio...",
        "[Step 4] SSE Telemetry stream complete. Latency: 1.12s"
      ];
    } else if (cleanCmd === 'matrix') {
      setIsMatrixMode(!isMatrixMode);
      response = [
        `> ${cmd}`,
        isMatrixMode ? "Deactivating Cyber Matrix mode..." : "Activating Cyber Matrix stream overlay..."
      ];
    } else if (cleanCmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      response = [
        `> ${cmd}`,
        `Command not recognized: "${cmd}". Type 'help' for options.`
      ];
    }

    setTerminalLogs(prev => [...prev, ...response, ""]);
    setHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setTerminalInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setTerminalInput(history[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setTerminalInput('');
      }
    }
  };

  return (
    <section
      id="about"
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${isMatrixMode ? 'scanlines' : ''}`}
    >
      {/* Left Column: Interactive Command Terminal (6 cols) */}
      <motion.div
        id="terminal"
        variants={panelVariants}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-6 flex flex-col justify-between border border-border/80 bg-background/90 rounded-2xl overflow-hidden shadow-2xl relative backdrop-blur-md glow-border min-h-[420px]"
      >
        {/* Header window controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-card/90 border-b border-border/80">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-primary/80"></span>
            <span className="ml-2 font-mono text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-primary" /> om@sre-node:~
            </span>
          </div>
          <div className="text-slate-200 font-mono text-[11px] flex items-center gap-2 font-semibold">
            <span>CPU: {metrics.cpu}%</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="p-5 font-mono text-xs space-y-2 overflow-y-auto max-h-[300px] flex-1 terminal-scroll">
          {terminalLogs.map((log, idx) => (
            <div 
              key={idx} 
              className={
                log.startsWith('> ') 
                  ? "text-primary font-bold" 
                  : log.startsWith('  [') 
                  ? "text-primary" 
                  : log.startsWith('[DevGuard]') || log.startsWith('[LexAgent]')
                  ? "text-primary font-semibold"
                  : "text-slate-200 font-sans leading-relaxed"
              }
            >
              {log}
            </div>
          ))}
          <div ref={terminalEndRef}></div>
        </div>

        {/* Terminal Command Shortcuts */}
        <div className="px-4 py-2 border-t border-border/80 bg-background/70 flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold mr-1">Quick Run:</span>
          {['neofetch', 'devguard', 'lexagent', 'skills', 'projects', 'matrix'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 text-[10px] rounded border border-border/80 bg-card hover:bg-muted hover:border-primary/50 font-mono text-primary font-bold transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(terminalInput);
          }}
          className="flex items-center px-4 py-3 bg-card/80 border-t border-border/80"
        >
          <span className="text-primary font-mono font-bold mr-2">$</span>
          <input
            type="text"
            aria-label="Terminal command input"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="bg-transparent border-0 outline-none flex-1 text-white font-mono text-xs focus:ring-0 p-0 placeholder:text-slate-400 font-semibold"
          />
        </form>
      </motion.div>

      {/* Right Column: SRE Metrics & Live Telemetry Waveforms (6 cols) */}
      <motion.div
        variants={panelVariants}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-6 border border-border/80 bg-background/90 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between space-y-4"
      >
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-mono text-white flex items-center gap-2 font-bold">
              <Activity size={18} className="text-primary" /> SRE TELEMETRY &amp; SYSTEM WAVEFORMS
            </h2>
            <span className="text-primary text-xs font-mono font-bold bg-primary/10 px-2.5 py-0.5 rounded border border-primary/40">
              200 OK
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium">Real-time metrics stream for AWS EC2 instance and Docker container stack</p>
        </div>

        {/* Live Canvas Graph */}
        <div className="bg-background border border-border/80 rounded-xl p-3.5 relative">
          <div className="flex justify-between items-center text-[11px] font-mono text-slate-200 mb-2 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-primary inline-block"></span> CPU Load
              <span className="w-2.5 h-0.5 bg-primary inline-block ml-2"></span> Latency Wave
            </span>
            <span className="text-primary font-bold">60 FPS Telemetry</span>
          </div>
          <canvas ref={canvasRef} width={500} height={110} className="w-full h-[110px] rounded"></canvas>
        </div>

        {/* Metrics Grid Cards */}
        <motion.div
          className="grid grid-cols-2 gap-3"
          variants={metricsContainerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={metricCardVariants} className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-slate-300 font-bold uppercase block">LexAgent Latency</span>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-bold text-primary font-mono">{metrics.latency}s</span>
              <span className="text-[10px] text-primary font-mono font-bold">FastAPI</span>
            </div>
          </motion.div>

          <motion.div variants={metricCardVariants} className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-slate-300 font-bold uppercase block">CPU Load</span>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-bold text-primary font-mono">{metrics.cpu}%</span>
              <span className="text-[10px] text-slate-300 font-mono font-bold">AWS EC2</span>
            </div>
          </motion.div>

          <motion.div variants={metricCardVariants} className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-slate-300 font-bold uppercase block">Memory Util</span>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-bold text-primary font-mono">{metrics.memory}%</span>
              <span className="text-[10px] text-slate-300 font-mono font-bold">Docker</span>
            </div>
          </motion.div>

          <motion.div variants={metricCardVariants} className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-slate-300 font-bold uppercase block">ChromaDB Vault</span>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-bold text-primary font-mono">{metrics.vectors.toLocaleString()}</span>
              <span className="text-[10px] text-slate-300 font-mono font-bold">Docs</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
