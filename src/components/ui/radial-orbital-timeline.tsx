import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className = ""
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 170;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-emerald-400 bg-emerald-950/80 border-emerald-500/50";
      case "in-progress":
        return "text-cyan-300 bg-cyan-950/80 border-cyan-400/50";
      case "pending":
        return "text-slate-400 bg-slate-900/80 border-slate-700/50";
      default:
        return "text-slate-400 bg-slate-900/80 border-slate-700/50";
    }
  };

  return (
    <div
      className={`w-full min-h-[500px] h-full flex flex-col items-center justify-center bg-slate-950/80 rounded-xl border border-slate-900 overflow-hidden relative ${className}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Visual background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Orbit Controls / Banner Header */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center text-xs font-mono">
        <div className="flex items-center space-x-2 text-emerald-400 bg-slate-900/90 px-3 py-1.5 rounded-md border border-emerald-500/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="tracking-wider uppercase">MILESTONE ORBITAL GRAPH</span>
        </div>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {autoRotate ? "Pause Rotation" : "Auto Rotate"}
        </button>
      </div>

      <div className="relative w-full max-w-2xl h-[450px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Core Orb Center */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-600 animate-pulse flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">
            <div className="absolute w-20 h-20 rounded-full border border-emerald-400/30 animate-ping opacity-60"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-cyan-500/20 animate-ping opacity-40"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div className="w-6 h-6 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
          </div>

          {/* Orbital Line */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-slate-800 border-dashed pointer-events-none"></div>

          {/* Timeline Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer flex flex-col items-center"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Aura Energy Glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0) 70%)`,
                    width: `${item.energy * 0.4 + 36}px`,
                    height: `${item.energy * 0.4 + 36}px`,
                    left: `-${(item.energy * 0.4 + 36 - 36) / 2}px`,
                    top: `-${(item.energy * 0.4 + 36 - 36) / 2}px`,
                  }}
                ></div>

                {/* Node Icon Button */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform
                  ${
                    isExpanded
                      ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/40 scale-125"
                      : isRelated
                      ? "bg-cyan-500/80 text-slate-950 animate-pulse border-cyan-300"
                      : "bg-slate-900 text-slate-200 hover:bg-slate-800"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-emerald-300"
                      : isRelated
                      ? "border-cyan-300"
                      : "border-slate-700/80"
                  }
                `}
                >
                  <Icon size={16} />
                </div>

                {/* Title Label */}
                <div
                  className={`
                  mt-2 whitespace-nowrap text-[11px] font-mono font-medium tracking-wide
                  transition-all duration-300
                  ${isExpanded ? "text-emerald-400 scale-110 font-bold" : "text-slate-400"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card Details */}
                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-slate-950/95 backdrop-blur-xl border-emerald-500/40 shadow-2xl shadow-emerald-950/50 overflow-visible z-[250]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-emerald-500/60"></div>
                    <CardHeader className="pb-2 p-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 py-0.5 text-[10px] ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-slate-500">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 font-mono text-white flex items-center justify-between">
                        {item.title}
                        <span className="text-[10px] font-mono font-normal text-emerald-400">
                          {item.category}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-slate-300 p-4 pt-0 leading-relaxed font-sans">
                      <p className="text-slate-400">{item.content}</p>

                      <div className="mt-3 pt-3 border-t border-slate-900">
                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                          <span className="flex items-center text-emerald-400">
                            <Zap size={10} className="mr-1" />
                            System Metric Impact
                          </span>
                          <span>{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-900">
                          <div className="flex items-center mb-1.5">
                            <LinkIcon size={10} className="text-slate-500 mr-1" />
                            <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                              Connected Modules
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 text-[10px] font-mono border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-slate-500"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
