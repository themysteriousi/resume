import { Suspense, lazy } from 'react';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-slate-950/40 rounded-xl min-h-[300px]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
            <span className="text-xs font-mono text-emerald-400/80">Loading 3D Canvas...</span>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[500px] bg-black/[0.96] relative overflow-hidden border-zinc-800/80 shadow-2xl rounded-2xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
        {/* Left content */}
        <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
              AI & DEVOPS / SRE ENGINEER
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-500 tracking-tight">
              Om Chauhan Portfolio
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-mono font-medium">
              Autonomous Systems, RAG Architectures & Cloud Infrastructure
            </p>
          </div>

          <p className="text-neutral-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Data Science & AI student at Dr. D. Y. Patil Institute of Technology. Building production-grade AWS SRE monitoring platforms, multi-agent legal RAG systems, and self-healing cloud pipelines.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm font-mono transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <span>↓</span>
            </a>
            <a 
              href="#terminal" 
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <span>Run SRE Console</span>
              <span className="text-emerald-400">$</span>
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-xs sm:text-sm transition-all"
            >
              <span>Contact Om</span>
            </a>
          </div>
        </div>

        {/* Right content: 3D Spline Canvas */}
        <div className="flex-1 relative min-h-[350px] lg:min-h-[500px] w-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </Card>
  )
}

