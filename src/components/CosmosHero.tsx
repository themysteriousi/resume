import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Server, Database, Zap, BookOpen, Terminal, ArrowDown } from 'lucide-react';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

const metrics = [
  { icon: Server, label: 'AWS SRE Uptime', value: '99.98% SLA' },
  { icon: Database, label: 'ChromaDB RAG Vault', value: '37,420 Cases' },
  { icon: Zap, label: 'Groq LLaMA 3.3', value: 'SSE Telemetry' },
  { icon: BookOpen, label: 'Academic Degree', value: "B.E. AI & DS '27" },
] as const;

export default function CosmosHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 300 });
  const [isReady, setIsReady] = useState(false);

  // Three.js instances ref
  const threeRefs = useRef<any>({
    scene: null,
    camera: null,
    renderer: null,
    composer: null,
    stars: [],
    nebula: null,
    mountains: [],
    animationId: null,
    targetCameraX: 0,
    targetCameraY: 30,
    targetCameraZ: 300,
    locations: []
  });

  // Forward global mouse movements to Spline canvas for full-screen tracking
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const splineCanvas = containerRef.current.querySelector('canvas:not(.hero-canvas)');
      if (splineCanvas && e.target !== splineCanvas) {
        splineCanvas.dispatchEvent(new MouseEvent('mousemove', {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          view: window
        }));
        splineCanvas.dispatchEvent(new PointerEvent('pointermove', {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('pointermove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('pointermove', handleGlobalMouseMove);
    };
  }, []);

  // Initialize Three.js cosmic background canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const initThree = () => {
      const refs = threeRefs.current;
      
      refs.scene = new THREE.Scene();
      refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

      refs.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      refs.camera.position.z = 300;
      refs.camera.position.y = 30;

      refs.renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current || undefined,
        antialias: true,
        alpha: true
      });
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      refs.renderer.toneMappingExposure = 0.5;

      refs.composer = new EffectComposer(refs.renderer);
      const renderPass = new RenderPass(refs.scene, refs.camera);
      refs.composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.8,
        0.4,
        0.85
      );
      refs.composer.addPass(bloomPass);

      createStarField();
      createNebula();
      createMountains();
      createAtmosphere();
      
      refs.locations = refs.mountains.map((m: any) => m.position.z);

      animate();
      setIsReady(true);
    };

    const createStarField = () => {
      const refs = threeRefs.current;
      const starCount = 4000;
      
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let j = 0; j < starCount; j++) {
          const radius = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[j * 3 + 2] = radius * Math.cos(phi);

          const color = new THREE.Color();
          const colorChoice = Math.random();
          if (colorChoice < 0.7) {
            color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
          } else if (colorChoice < 0.9) {
            color.setHSL(0.5, 0.5, 0.8);
          } else {
            color.setHSL(0.4, 0.5, 0.8);
          }
          
          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;
          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            depth: { value: i }
          },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        const stars = new THREE.Points(geometry, material);
        refs.scene.add(stars);
        refs.stars.push(stars);
      }
    };

    const createNebula = () => {
      const refs = threeRefs.current;
      const geometry = new THREE.PlaneGeometry(8000, 4000, 100, 100);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x0a4668) },
          color2: { value: new THREE.Color(0xf76046) },
          opacity: { value: 0.18 }
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const nebula = new THREE.Mesh(geometry, material);
      nebula.position.z = -1050;
      refs.scene.add(nebula);
      refs.nebula = nebula;
    };

    const createMountains = () => {
      const refs = threeRefs.current;
      const layers = [
        { distance: -50, height: 60, color: 0x151b21, opacity: 1 },
        { distance: -100, height: 80, color: 0x1e252e, opacity: 0.9 },
        { distance: -150, height: 100, color: 0x253447, opacity: 0.7 },
        { distance: -200, height: 120, color: 0x313942, opacity: 0.5 }
      ];

      layers.forEach((layer, index) => {
        const points = [];
        const segments = 50;
        
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments - 0.5) * 1000;
          const y = Math.sin(i * 0.1) * layer.height + 
                   Math.sin(i * 0.05) * layer.height * 0.5 +
                   Math.random() * layer.height * 0.2 - 100;
          points.push(new THREE.Vector2(x, y));
        }
        
        points.push(new THREE.Vector2(5000, -300));
        points.push(new THREE.Vector2(-5000, -300));

        const shape = new THREE.Shape(points);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: layer.opacity,
          side: THREE.DoubleSide
        });

        const mountain = new THREE.Mesh(geometry, material);
        mountain.position.z = layer.distance;
        mountain.position.y = layer.distance;
        mountain.userData = { baseZ: layer.distance, index };
        refs.scene.add(mountain);
        refs.mountains.push(mountain);
      });
    };

    const createAtmosphere = () => {
      const refs = threeRefs.current;
      const geometry = new THREE.SphereGeometry(600, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          uniform float time;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.06, 0.72, 0.5) * intensity;
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            gl_FragColor = vec4(atmosphere, intensity * 0.15);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });
      const atmosphere = new THREE.Mesh(geometry, material);
      refs.scene.add(atmosphere);
    };

    const animate = () => {
      const refs = threeRefs.current;
      refs.animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;

      refs.stars.forEach((starField: any) => {
        if (starField.material.uniforms) {
          starField.material.uniforms.time.value = time;
        }
      });

      if (refs.nebula && refs.nebula.material.uniforms) {
        refs.nebula.material.uniforms.time.value = time * 0.5;
      }

      if (refs.camera) {
        const smoothingFactor = 0.05;
        smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * smoothingFactor;
        smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * smoothingFactor;
        smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * smoothingFactor;
        
        const floatX = Math.sin(time * 0.1) * 2;
        const floatY = Math.cos(time * 0.15) * 1;
        
        refs.camera.position.x = smoothCameraPos.current.x + floatX;
        refs.camera.position.y = smoothCameraPos.current.y + floatY;
        refs.camera.position.z = smoothCameraPos.current.z;
        refs.camera.lookAt(0, 10, -600);
      }

      refs.mountains.forEach((mountain: any, i: number) => {
        const parallaxFactor = 1 + i * 0.5;
        mountain.position.x = Math.sin(time * 0.1) * 2 * parallaxFactor;
        mountain.position.y = 50 + (Math.cos(time * 0.15) * 1 * parallaxFactor);
      });

      if (refs.composer) {
        refs.composer.render();
      }
    };

    initThree();

    const handleResize = () => {
      const refs = threeRefs.current;
      if (refs.camera && refs.renderer && refs.composer) {
        refs.camera.aspect = window.innerWidth / window.innerHeight;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.composer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      const refs = threeRefs.current;
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);
      refs.stars.forEach((s: any) => { s.geometry.dispose(); s.material.dispose(); });
      refs.mountains.forEach((m: any) => { m.geometry.dispose(); m.material.dispose(); });
      if (refs.nebula) { refs.nebula.geometry.dispose(); refs.nebula.material.dispose(); }
      if (refs.renderer) refs.renderer.dispose();
    };
  }, []);

  // GSAP Entry Animations
  useEffect(() => {
    if (!isReady) return;

    const tl = gsap.timeline();

    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.title-char');
      tl.from(chars, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power4.out"
      });
    }

    if (subtitleRef.current) {
      const lines = subtitleRef.current.querySelectorAll('.subtitle-line');
      tl.from(lines, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6");
    }

    return () => { tl.kill(); };
  }, [isReady]);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="title-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="cosmos-style relative overflow-hidden min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-16 pb-12">
      {/* Three.js Cosmic Background Canvas */}
      <canvas ref={canvasRef} className="hero-canvas absolute inset-0 pointer-events-none z-0 opacity-50" />

      {/* Cursor Tracker Spotlight Effect */}
      <Spotlight size={500} className="-top-20 left-0" />

      {/* Main Hero Container - Seamless Two Column Layout (Card-less structure) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Side Content - Shifted to Left */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center text-left space-y-6 pt-4 lg:pt-0">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
              AI & DevOps / SRE Engineer
            </span>
          </div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase font-sans leading-none whitespace-nowrap">
            {splitText("OM CHAUHAN")}
          </h1>

          {/* Subtitle / Role & Description */}
          <div ref={subtitleRef} className="space-y-3 max-w-2xl text-left">
            <p className="subtitle-line text-base sm:text-xl font-mono text-primary font-semibold tracking-wide uppercase">
              AI & DEVOPS / SRE ENGINEER
            </p>
            <p className="subtitle-line text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Building production-grade AWS SRE monitoring platforms, multi-agent legal RAG systems, and self-healing cloud pipelines.
            </p>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm font-mono transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Builds</span>
              <ArrowDown size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-sm transition-all flex items-center gap-2 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Terminal size={16} className="text-primary" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {metrics.map((m) => (
              <div 
                key={m.label} 
                className="bg-white/[0.03] border border-white/10 rounded-xl p-3 backdrop-blur-sm flex flex-col justify-center space-y-1 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-primary">
                  <m.icon size={14} />
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider truncate">{m.label}</span>
                </div>
                <span className="text-xs font-mono font-bold text-white tracking-tight">{m.value}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side - Interactive 3D Spline Scene */}
        <div className="w-full lg:w-5/12 h-[380px] sm:h-[480px] lg:h-[580px] relative rounded-2xl overflow-hidden flex items-center justify-center z-10">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}
