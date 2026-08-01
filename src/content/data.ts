import { BookOpen, Server, Cpu, Zap, Activity } from 'lucide-react';
export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: any;
  relatedIds?: number[];
  status: string;
  energy: number;
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export interface Education {
  institution: string;
  location: string;
  degree: string;
  timeline: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  github?: string;
  live?: string;
  description: string;
  tech: string[];
  status: string;
}

export interface Achievement {
  title: string;
  organization: string;
  desc: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  education: Education;
  skills: SkillGroup[];
  projects: Project[];
  achievements: Achievement[];
}

export const resumeData: ResumeData = {
  name: "Om Chauhan",
  title: "AI & DevOps/SRE Engineer",
  location: "Pune, Maharashtra, India",
  phone: "+91 7862909368",
  email: "omchauhan5505@gmail.com",
  linkedin: "https://linkedin.com/in/om-chauhan-7a2b0a290",
  github: "https://github.com/themysteriousi",
  summary:
    "Result-oriented Data Science and Artificial Intelligence student with hands-on experience building, optimizing, and deploying machine learning workflows and production-grade system infrastructure. Skilled in Python, AWS cloud deployments, SRE monitoring, and Multi-Agent RAG architectures.",
  education: {
    institution: "Dr. D. Y. Patil Institute of Technology",
    location: "Pimpri-Chinchwad, Pune, India",
    degree: "B.E. in Artificial Intelligence and Data Science",
    timeline: "Expected June 2027",
  },
  skills: [
    {
      category: "Programming & Core",
      items: ["Python", "SQL", "Git", "Bash", "FastAPI", "Flask", "Pandas", "NumPy", "Scikit-Learn"],
    },
    {
      category: "DevOps & Cloud (SRE)",
      items: ["Docker", "Docker Compose", "Ansible", "AWS EC2", "UFW/Firewalls", "Nginx", "Prometheus", "Grafana", "Node Exporter"],
    },
    {
      category: "AI, NLP & Databases",
      items: ["Transformers", "BERT", "Embeddings", "LangChain", "PostgreSQL", "Vector Databases", "ChromaDB", "Llama 3.2"],
    },
  ],
  projects: [
    {
      title: "DevGuard",
      subtitle: "Self-healing infrastructure that pages you less",
      github: "https://github.com/themysteriousi/devguard",
      live: "http://13.201.93.49",
      description:
        "Our team's EC2 instances kept hitting memory spikes overnight with nobody awake to fix them. I built a monitoring stack with Prometheus, Grafana, and a custom Python anomaly detector that scores metric deviations using Z-scores, then auto-triggers Ansible playbooks to reclaim resources before alerts fire. Containerized the whole thing with Docker Compose, which cut the deployment footprint by 60%. The system has held 99.9% uptime since going live.",
      tech: ["AWS EC2", "Docker", "Ansible", "Prometheus", "Grafana", "Python Z-Score", "Nginx"],
      status: "HEALTHY",
    },
    {
      title: "LexAgent",
      subtitle: "Ask a legal question, get a cited answer in 1.12 seconds",
      github: "https://github.com/Rishikesh073/JUDICARY-SYSTEM",
      description:
        "Indian legal research still means manually sifting through thousands of PDFs. I designed a 3-tier RAG pipeline: a React workspace for queries, an Express SSE bridge for real-time progress, and a FastAPI engine running local Llama 3.2 through LangChain. Indexed 37,000+ Supreme Court judgments into ChromaDB and pinned source documents to IPFS so citations are tamper-proof. End-to-end query latency sits around 1.12 seconds.",
      tech: ["FastAPI", "React", "Express", "LangChain", "ChromaDB", "Llama 3.2", "IPFS"],
      status: "ACTIVE",
    },
    {
      title: "Smart Energy Trading",
      subtitle: "Predict consumption, route power automatically",
      description:
        "Household energy pricing is inefficient when demand patterns are unknown. I trained a regression model on consumption data to forecast demand curves, then wired it to an IoT controller prototype that dynamically routes power to minimize cost. The model handles the prediction; the hardware handles the switching.",
      tech: ["Python", "Scikit-Learn", "IoT Prototype", "Regression"],
      status: "STABLE",
    },
    {
      title: "QuoraTech Dashboard",
      subtitle: "RSS in, drafted Quora posts out, zero manual work",
      github: "https://github.com/themysteriousi/quora-",
      description:
        "Keeping up with tech news and turning it into Quora content was eating hours every week. I built a Flask pipeline that pulls RSS feeds, sends articles to Groq's LLaMA-3.3-70b for drafting, and streams progress back to a React dashboard over SSE. The whole flow runs unattended — I just review and publish.",
      tech: ["Flask", "React", "Groq API", "LLaMA 3.3", "SSE Streaming"],
      status: "ACTIVE",
    },
  ],
  achievements: [
    {
      title: "Treasurer",
      organization: "DSAII Club",
      desc: "Managed budgeting and organized college tech workshops.",
    },
    {
      title: "Hackathon Competitor",
      organization: "Vortexa 2.0, Arcadia, SIH, Solana Cypherpunk",
      desc: "Built rapid production prototypes under tight timelines.",
    },
    {
      title: "Certifications",
      organization: "Python (Data Science), AI Foundational Track",
      desc: "Validated core competencies in AI and software engineering.",
    },
  ],
};

// ─── Orbital Timeline ─────────────────────────────────────────────────────────

export const timelineMilestones: TimelineItem[] = [
  {
    id: 1,
    title: "AI & DS Degree",
    date: "Jun 2023 - 2027",
    content:
      "Pursuing B.E. in Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology.",
    category: "Academic",
    icon: BookOpen,
    relatedIds: [2, 3],
    status: "in-progress",
    energy: 90,
  },
  {
    id: 2,
    title: "DevGuard SRE",
    date: "Jun 2024",
    content:
      "Built multi-container AWS EC2 monitoring with Prometheus, Grafana, and Python Z-score self-healing scripts.",
    category: "DevOps/SRE",
    icon: Server,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "LexAgent RAG",
    date: "Aug 2024",
    content:
      "Designed multi-agent legal RAG engine querying 37,000+ Supreme Court judgments with Llama 3.2 & ChromaDB.",
    category: "AI/Agentic",
    icon: Cpu,
    relatedIds: [2, 4],
    status: "completed",
    energy: 100,
  },
  {
    id: 4,
    title: "Smart Energy IoT",
    date: "Oct 2024",
    content:
      "Engineered ML regression model predicting household energy demand coupled with an IoT hardware prototype.",
    category: "ML/IoT",
    icon: Zap,
    relatedIds: [3, 5],
    status: "completed",
    energy: 85,
  },
  {
    id: 5,
    title: "QuoraTech AI",
    date: "Dec 2024",
    content:
      "Created automated news curation pipeline leveraging Groq API (LLaMA-3.3-70b) and SSE background telemetry.",
    category: "AI/Web",
    icon: Activity,
    relatedIds: [4],
    status: "completed",
    energy: 88,
  },
];
