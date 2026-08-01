import { useState, useEffect, useRef, SVGProps } from 'react';
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Database, 
  Layers, 
  ExternalLink,
  BookOpen,
  Award,
  FileText,
  Activity,
  GitBranch,
  Server,
  Zap,
  Send,
  MapPin,
  Phone,
  Sparkles,
  Code,
  ArrowUpRight,
  Menu,
  X,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import RadialOrbitalTimeline, { TimelineItem } from './components/ui/radial-orbital-timeline';
import { SplineSceneBasic } from './components/ui/splite';

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Profile Data
const resumeData = {
  name: "Om Chauhan",
  title: "AI & DevOps/SRE Engineer",
  location: "Pune, Maharashtra, India",
  phone: "+91 7862909368",
  email: "omchauhan5505@gmail.com",
  linkedin: "https://linkedin.com/in/om-chauhan-7a2b0a290",
  github: "https://github.com/themysteriousi",
  summary: "Result-oriented Data Science and Artificial Intelligence student with hands-on experience building, optimizing, and deploying machine learning workflows and production-grade system infrastructure. Skilled in Python, AWS cloud deployments, SRE monitoring, and Multi-Agent RAG architectures.",
  education: {
    institution: "Dr. D. Y. Patil Institute of Technology",
    location: "Pimpri-Chinchwad, Pune, India",
    degree: "B.E. in Artificial Intelligence and Data Science",
    timeline: "Expected June 2027"
  },
  skills: [
    { category: "Programming & Core", items: ["Python", "SQL", "Git", "Bash", "FastAPI", "Flask", "Pandas", "NumPy", "Scikit-Learn"] },
    { category: "DevOps & Cloud (SRE)", items: ["Docker", "Docker Compose", "Ansible", "AWS EC2", "UFW/Firewalls", "Nginx", "Prometheus", "Grafana", "Node Exporter"] },
    { category: "AI, NLP & Databases", items: ["Transformers", "BERT", "Embeddings", "LangChain", "PostgreSQL", "Vector Databases", "ChromaDB", "Llama 3.2"] }
  ],
  projects: [
    {
      title: "DevGuard",
      subtitle: "Automated SRE & Intelligent Self-Healing Platform",
      github: "https://github.com/themysteriousi/devguard",
      live: "http://13.201.93.49",
      description: "Multi-container monitoring stack on AWS EC2 via Docker Compose, reducing footprint by 60%. Features custom Python Z-score anomaly detector that auto-triggers healing playbooks to maintain 99.9% uptime.",
      tech: ["AWS EC2", "Docker", "Ansible", "Prometheus", "Grafana", "Python Z-Score", "Nginx"],
      status: "HEALTHY"
    },
    {
      title: "LexAgent",
      subtitle: "Multi-Agent Legal Intelligence & RAG System",
      github: "https://github.com/Rishikesh073/JUDICARY-SYSTEM",
      description: "Decoupled 3-tier legal workspace with React, Express, and FastAPI RAG engine. Uses local Llama 3.2 via LangChain to query 37,000+ Supreme Court judgments with ChromaDB vector search and Web3 IPFS storage.",
      tech: ["FastAPI", "React", "Express", "LangChain", "ChromaDB", "Llama 3.2", "IPFS"],
      status: "ACTIVE"
    },
    {
      title: "Smart Energy Trading",
      subtitle: "ML-Enhanced IoT Grid Controller",
      description: "ML regression model predicting household energy consumption patterns to automate electrical trading. Integrated with IoT controller prototype for dynamic power routing.",
      tech: ["Python", "Scikit-Learn", "IoT Prototype", "Regression"],
      status: "STABLE"
    },
    {
      title: "QuoraTech Dashboard",
      subtitle: "AI-Powered News Curation Pipeline",
      github: "https://github.com/themysteriousi/quora-",
      description: "Automated RSS curation pipeline with Flask & React. Integrates Groq API (LLaMA-3.3-70b) to draft Quora posts with real-time SSE task streaming.",
      tech: ["Flask", "React", "Groq API", "LLaMA 3.3", "SSE Streaming"],
      status: "ACTIVE"
    }
  ],
  achievements: [
    { title: "Treasurer", organization: "DSAII Club", desc: "Managed budgeting and organized college tech workshops." },
    { title: "Hackathon Competitor", organization: "Vortexa 2.0, Arcadia, SIH, Solana Cypherpunk", desc: "Built rapid production prototypes under tight timelines." },
    { title: "Certifications", organization: "Python (Data Science), AI Foundational Track", desc: "Validated core competencies in AI and software engineering." }
  ]
};

// Orbital Timeline Milestone Data
const timelineMilestones: TimelineItem[] = [
  {
    id: 1,
    title: "AI & DS Degree",
    date: "Jun 2023 - 2027",
    content: "Pursuing B.E. in Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology.",
    category: "Academic",
    icon: BookOpen,
    relatedIds: [2, 3],
    status: "in-progress",
    energy: 90
  },
  {
    id: 2,
    title: "DevGuard SRE",
    date: "Jun 2024",
    content: "Built multi-container AWS EC2 monitoring with Prometheus, Grafana, and Python Z-score self-healing scripts.",
    category: "DevOps/SRE",
    icon: Server,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95
  },
  {
    id: 3,
    title: "LexAgent RAG",
    date: "Aug 2024",
    content: "Designed multi-agent legal RAG engine querying 37,000+ Supreme Court judgments with Llama 3.2 & ChromaDB.",
    category: "AI/Agentic",
    icon: Cpu,
    relatedIds: [2, 4],
    status: "completed",
    energy: 100
  },
  {
    id: 4,
    title: "Smart Energy IoT",
    date: "Oct 2024",
    content: "Engineered ML regression model predicting household energy demand coupled with an IoT hardware prototype.",
    category: "ML/IoT",
    icon: Zap,
    relatedIds: [3, 5],
    status: "completed",
    energy: 85
  },
  {
    id: 5,
    title: "QuoraTech AI",
    date: "Dec 2024",
    content: "Created automated news curation pipeline leveraging Groq API (LLaMA-3.3-70b) and SSE background telemetry.",
    category: "AI/Web",
    icon: Activity,
    relatedIds: [4],
    status: "completed",
    energy: 88
  }
];

function App() {
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  // Multi-Agent Architecture step loop simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
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
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.5)';
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

      // Wave 1: Emerald CPU Wave
      ctx.beginPath();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.03 + step) * 20 + Math.cos(x * 0.01 + step * 1.5) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2: Cyan Latency Wave
      ctx.beginPath();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.02 - step * 1.2) * 25 + Math.sin(x * 0.05 + step) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response: string[] = [];

    if (cleanCmd === '') {
      response = ['>'];
    } else if (cleanCmd === 'help') {
      response = [
        `> ${cmd}`,
        "AVAILABLE SYSTEM COMMANDS:",
        "  about        - View professional profile summary",
        "  skills       - List engineering stack & libraries",
        "  projects     - View SRE & AI project deployment specs",
        "  education    - Academic timeline & degree",
        "  contact      - Contact channels & social profiles",
        "  neofetch     - Display SRE system diagnostic logo",
        "  devguard     - Simulate DevGuard self-healing script",
        "  lexagent     - View multi-agent RAG engine status",
        "  matrix       - Toggle Cyber Matrix visual mode",
        "  clear        - Clear console buffer"
      ];
    } else if (cleanCmd === 'about') {
      response = [
        `> ${cmd}`,
        `NAME: ${resumeData.name}`,
        `ROLE: ${resumeData.title}`,
        `SUMMARY: ${resumeData.summary}`
      ];
    } else if (cleanCmd === 'skills') {
      response = [
        `> ${cmd}`,
        "ENGINEERING CAPABILITIES:",
        ...resumeData.skills.map(s => `  [${s.category}]: ${s.items.join(', ')}`)
      ];
    } else if (cleanCmd === 'projects') {
      response = [
        `> ${cmd}`,
        "DEPLOYED PRODUCTION BUILDS:",
        ...resumeData.projects.map(p => `  • ${p.title} - ${p.subtitle} [Status: ${p.status}]`)
      ];
    } else if (cleanCmd === 'education') {
      response = [
        `> ${cmd}`,
        `INSTITUTION: ${resumeData.education.institution}`,
        `DEGREE: ${resumeData.education.degree}`,
        `TIMELINE: ${resumeData.education.timeline}`
      ];
    } else if (cleanCmd === 'contact') {
      response = [
        `> ${cmd}`,
        `EMAIL: ${resumeData.email}`,
        `PHONE: ${resumeData.phone}`,
        `GITHUB: ${resumeData.github}`,
        `LINKEDIN: ${resumeData.linkedin}`
      ];
    } else if (cleanCmd === 'neofetch') {
      response = [
        `> ${cmd}`,
        "   .----------------.    OS: OmOS v2.4 x86_64",
        "  |  OM_CHAUHAN.SRE |   Host: AWS EC2 (t3.micro)",
        "   '----------------'    Kernel: Linux 6.8.0-aws",
        "  CPU: AWS Graviton     Uptime: 99.98% (42 days)",
        "  RAM: 46% Utilized     Agents: LexAgent / DevGuard",
        "  Shell: zsh 5.9        Terminal: React CyberConsole"
      ];
    } else if (cleanCmd === 'devguard') {
      response = [
        `> ${cmd}`,
        "[DevGuard] Initiating Z-Score Anomaly Diagnostic...",
        "[Metrics] CPU spike detected: 92% on node-02",
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative scroll-smooth ${isMatrixMode ? 'scanlines' : ''}`}>
      
      {/* Framer-inspired Sticky Header Navigation */}
      <header className="border-b border-slate-900/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full group-hover:border-emerald-500/40 transition-all">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider">
                OM CHAUHAN
              </span>
            </div>
            <span className="hidden md:inline font-mono text-xs text-slate-400">| AI & DevOps Portfolio</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono">
            <a href="#hero" className="text-slate-300 hover:text-emerald-400 transition-colors">#hero</a>
            <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">#about</a>
            <a href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors">#projects</a>
            <a href="#architecture" className="text-slate-300 hover:text-emerald-400 transition-colors">#architecture</a>
            <a href="#timeline" className="text-slate-300 hover:text-emerald-400 transition-colors">#timeline</a>
            <a href="#skills" className="text-slate-300 hover:text-emerald-400 transition-colors">#skills</a>
            <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">#contact</a>
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <a href={resumeData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-900">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-900">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${resumeData.email}`} className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-900">
              <MailIcon className="h-4 w-4" />
            </a>
            <a 
              href="Om_Chauhan_Resume.pdf" 
              target="_blank" 
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono border border-emerald-500/30 transition-all shadow-sm"
            >
              <FileText size={13} />
              <span>RESUME.PDF</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-900 px-4 py-4 space-y-3 font-mono text-xs">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#hero</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#about</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#projects</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#architecture</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#timeline</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-emerald-400">#contact</a>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-900">
              <a href="Om_Chauhan_Resume.pdf" target="_blank" className="text-emerald-400 flex items-center gap-1">
                <FileText size={14} /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20">
        
        {/* HERO SECTION: Interactive 3D Spline Scene Element as Requested */}
        <section id="hero" className="space-y-6">
          <SplineSceneBasic />

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="border border-slate-900 bg-slate-950/60 p-4 rounded-xl flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Server size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">AWS SRE Uptime</span>
                <span className="text-sm font-mono font-bold text-white">99.98% SLA</span>
              </div>
            </div>

            <div className="border border-slate-900 bg-slate-950/60 p-4 rounded-xl flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Database size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">ChromaDB RAG Vault</span>
                <span className="text-sm font-mono font-bold text-white">37,420 Cases</span>
              </div>
            </div>

            <div className="border border-slate-900 bg-slate-950/60 p-4 rounded-xl flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Zap size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Groq LLaMA 3.3</span>
                <span className="text-sm font-mono font-bold text-white">SSE Telemetry</span>
              </div>
            </div>

            <div className="border border-slate-900 bg-slate-950/60 p-4 rounded-xl flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <BookOpen size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Academic Degree</span>
                <span className="text-sm font-mono font-bold text-white">B.E. AI & DS '27</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & SRE TELEMETRY SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Command Terminal (6 cols) */}
          <div id="terminal" className="lg:col-span-6 flex flex-col justify-between border border-slate-900 bg-slate-950/80 rounded-2xl overflow-hidden shadow-2xl relative backdrop-blur-md glow-border min-h-[500px]">
            {/* Header window controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-900">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <TerminalIcon size={13} className="text-emerald-400" /> om@sre-node:~
                </span>
              </div>
              <div className="text-slate-500 font-mono text-[11px] flex items-center gap-2">
                <span>CPU: {metrics.cpu}%</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="p-5 font-mono text-xs space-y-2 overflow-y-auto max-h-[360px] flex-1 terminal-scroll">
              {terminalLogs.map((log, idx) => (
                <div 
                  key={idx} 
                  className={
                    log.startsWith('>') 
                      ? "text-emerald-400 font-semibold" 
                      : log.startsWith('  [') 
                      ? "text-cyan-300" 
                      : log.startsWith('[DevGuard]') || log.startsWith('[LexAgent]')
                      ? "text-purple-300"
                      : "text-slate-300"
                  }
                >
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef}></div>
            </div>

            {/* Terminal Command Shortcuts */}
            <div className="px-4 py-2 border-t border-slate-900/80 bg-slate-950/50 flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-1">Quick Run:</span>
              {['neofetch', 'devguard', 'lexagent', 'skills', 'projects', 'matrix'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 text-[10px] rounded border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-emerald-500/40 font-mono text-emerald-400 transition-all cursor-pointer"
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
              className="flex items-center px-4 py-3 bg-slate-900/60 border-t border-slate-900"
            >
              <span className="text-emerald-400 font-mono mr-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or command..."
                className="bg-transparent border-0 outline-none flex-1 text-slate-100 font-mono text-xs focus:ring-0 p-0"
              />
            </form>
          </div>

          {/* Right Column: SRE Metrics & Live Telemetry Waveforms (6 cols) */}
          <div className="lg:col-span-6 border border-slate-900 bg-slate-950/60 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-mono text-emerald-400 flex items-center gap-2 font-bold">
                  <Activity size={18} /> SRE TELEMETRY & SYSTEM WAVEFORMS
                </h3>
                <span className="text-emerald-400 text-xs font-mono font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  200 OK
                </span>
              </div>
              <p className="text-xs text-slate-400">Real-time metrics stream for AWS EC2 instance and Docker container stack</p>
            </div>

            {/* Live Canvas Graph */}
            <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 relative">
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-0.5 bg-emerald-400 inline-block"></span> CPU Load
                  <span className="w-2.5 h-0.5 bg-cyan-400 inline-block ml-2"></span> Latency Wave
                </span>
                <span className="text-emerald-400">60 FPS Telemetry</span>
              </div>
              <canvas ref={canvasRef} width={500} height={130} className="w-full h-[130px] rounded"></canvas>
            </div>

            {/* Metrics Grid Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/90 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">LexAgent Latency</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold text-cyan-400 font-mono">{metrics.latency}s</span>
                  <span className="text-[10px] text-emerald-400 font-mono">FastAPI</span>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">CPU Load</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold text-emerald-400 font-mono">{metrics.cpu}%</span>
                  <span className="text-[10px] text-slate-400 font-mono">AWS EC2</span>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Memory Util</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold text-purple-400 font-mono">{metrics.memory}%</span>
                  <span className="text-[10px] text-slate-400 font-mono">Docker</span>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">ChromaDB Vault</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold text-yellow-400 font-mono">{metrics.vectors.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 font-mono">Docs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MULTI-AGENT ARCHITECTURE VISUALIZER (LEXAGENT FLOW) */}
        <section id="architecture" className="border border-slate-900 bg-slate-950/50 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 font-mono">
                <GitBranch size={20} className="text-purple-400" /> LEXAGENT: 4-STAGE MULTI-AGENT RAG ARCHITECTURE
              </h3>
              <p className="text-xs text-slate-400 mt-1">Decoupled 3-tier legal intelligence engine & real-time SSE telemetry flow</p>
            </div>
            <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30 w-fit">
              Step 0{activeStep + 1} / 04
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stage: "01", title: "React Workspace", desc: "User prompt entry & stateful workspace visualizer", icon: Server },
              { stage: "02", title: "Node.js SSE Bridge", desc: "Express telemetry proxy & Server-Sent Events stream", icon: Activity },
              { stage: "03", title: "FastAPI RAG Engine", desc: "LangChain + local Llama 3.2 query parsing & synthesis", icon: Cpu },
              { stage: "04", title: "ChromaDB & IPFS", desc: "37,000+ indexed Supreme Court cases & CID doc vault", icon: Database }
            ].map((node, idx) => (
              <div 
                key={idx}
                className={`border p-5 rounded-xl transition-all duration-500 relative flex flex-col justify-between ${
                  activeStep === idx 
                    ? "border-purple-500/80 bg-purple-500/10 shadow-lg shadow-purple-500/10 scale-105" 
                    : "border-slate-900 bg-slate-950/80 text-slate-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-purple-400">STAGE {node.stage}</span>
                    {activeStep === idx && (
                      <span className="flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-ping"></span>
                    )}
                  </div>
                  <h4 className="font-mono font-bold text-white text-base mb-1">{node.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Pipeline Node</span>
                  <span className="text-purple-400">Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS BENTO GRID */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
                <Layers size={20} className="text-cyan-400" /> FEATURED SYSTEM BUILDS
              </h3>
              <p className="text-xs text-slate-400 mt-1">Production-grade infrastructure and intelligent AI applications</p>
            </div>
            <a href={resumeData.github} target="_blank" rel="noreferrer" className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1">
              View Github Repositories <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((project, idx) => (
              <div 
                key={idx} 
                className="border border-slate-900 bg-slate-950/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-800 hover:shadow-2xl transition-all duration-300 glow-border group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-white font-mono text-lg group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-900">
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors p-1 rounded hover:bg-slate-900 flex items-center gap-1 font-mono text-xs">
                          <span>Live</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-cyan-400 font-mono font-semibold">{project.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-900/80">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3D RADIAL ORBITAL TIMELINE */}
        <section id="timeline" className="space-y-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <Sparkles size={20} className="text-yellow-400" /> RADIAL ORBITAL TIMELINE & MILESTONES
            </h3>
            <p className="text-xs text-slate-400 mt-1">Interactive 3D radial orbital visualization of key projects and academic timeline</p>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]">
            <RadialOrbitalTimeline timelineData={timelineMilestones} />
          </div>
        </section>

        {/* TECHNICAL CAPABILITIES */}
        <section id="skills" className="space-y-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <Code size={20} className="text-emerald-400" /> TECHNICAL STACK & CAPABILITIES
            </h3>
            <p className="text-xs text-slate-400 mt-1">Core engineering capabilities across SRE, AI, Data Science, and Cloud Infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resumeData.skills.map((skillGroup, idx) => (
              <div key={idx} className="border border-slate-900 bg-slate-950/70 rounded-2xl p-6 space-y-4 hover:border-slate-800 transition-all">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider border-b border-slate-900 pb-3 flex items-center justify-between">
                  <span>{skillGroup.category}</span>
                  <span className="text-[10px] text-slate-500">{skillGroup.items.length} Techs</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:text-emerald-300 hover:border-emerald-500/40 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC & ACHIEVEMENTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono">
                <BookOpen size={20} className="text-emerald-400" /> ACADEMIC BACKGROUND
              </h3>
            </div>
            <div className="border border-slate-900 bg-slate-950/70 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-base font-mono">{resumeData.education.institution}</h4>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">{resumeData.education.timeline}</span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin size={13} className="text-slate-500" /> {resumeData.education.location}
              </p>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono font-semibold pt-1">{resumeData.education.degree}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono">
                <Award size={20} className="text-yellow-400" /> ACTIVITIES & CERTIFICATIONS
              </h3>
            </div>
            <div className="space-y-3">
              {resumeData.achievements.map((item, idx) => (
                <div key={idx} className="border border-slate-900 bg-slate-950/70 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-xs sm:text-sm font-mono font-bold text-white">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{item.organization}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="border border-slate-900 bg-slate-950/80 rounded-2xl p-6 sm:p-10 space-y-8 backdrop-blur-md">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
              <MessageSquare size={20} className="text-purple-400" /> GET IN TOUCH WITH OM
            </h3>
            <p className="text-xs text-slate-400 mt-1">Open for AI Engineering, DevOps/SRE, and Software Engineering opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-500 text-[10px] uppercase">Direct Email</span>
                <a href={`mailto:${resumeData.email}`} className="text-emerald-400 font-semibold text-sm hover:underline block">
                  {resumeData.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-500 text-[10px] uppercase">Phone & Location</span>
                <p className="text-slate-200 text-xs">{resumeData.phone} • {resumeData.location}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-slate-500 text-[10px] uppercase block">Social Channels</span>
                <div className="flex gap-3">
                  <a 
                    href={resumeData.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={resumeData.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 flex items-center justify-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 border border-slate-900 bg-slate-950 p-6 rounded-xl relative">
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-3 text-center">
                  <CheckCircle2 size={42} className="text-emerald-400 animate-bounce" />
                  <h4 className="text-base font-bold text-white font-mono">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-400 max-w-sm">Thank you for reaching out. Om will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-100 focus:outline-none focus:border-emerald-500/60"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Your Email</label>
                      <input 
                        type="email" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-100 focus:outline-none focus:border-emerald-500/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Message</label>
                    <textarea 
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Hi Om, I'd like to discuss a project..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-100 focus:outline-none focus:border-emerald-500/60 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Direct Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 font-mono space-y-1.5">
        <p>© 2026 Om Chauhan. Built with React, TypeScript, Tailwind CSS & 3D Spline Controls.</p>
        <p className="text-[10px] text-slate-600">AI & DevOps SRE Operations Engine • Pune, Maharashtra, India</p>
      </footer>
    </div>
  );
}

export default App;
