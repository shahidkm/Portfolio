import React, { useState, useEffect, useRef } from 'react';
import { Laptop, Globe, Code } from 'lucide-react';
import Skills from '../components/Skills';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* Animated counter */
function Counter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(target);
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      setCount((c) => {
        if (c + step >= num) { clearInterval(timer); return num; }
        return c + step;
      });
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* Tilt card */
function TiltCard({ children, className, style }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px) scale(1.02) translateZ(0)`;
  };
  const handleLeave = () => {
    ref.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1) translateZ(0)';
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.55s var(--ease-spring)', willChange: 'transform', ...style }}
    >
      {children}
    </div>
  );
}

const stats = [
  { icon: Laptop, target: '1', suffix: '+', label: 'Years Experience', desc: 'Professional development', color: '#B6B09F' },
  { icon: Globe,  target: '5', suffix: '+', label: 'Projects Built',   desc: 'End-to-end delivery',    color: '#EAE4D5' },
  { icon: Code,   target: '15',suffix: '+', label: 'Technologies',     desc: 'Across full stack',      color: '#B6B09F' },
];

export default function Profession() {
  const [headerRef, headerInView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(182,176,159,0.4), transparent)' }} />

      {/* BG orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 animate-float"
        style={{ background: 'radial-gradient(circle, #B6B09F, transparent)' }} />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full blur-3xl opacity-5 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #EAE4D5, transparent)' }} />

      {/* Morphing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none animate-morph opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #B6B09F, transparent)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-24"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0) translateZ(0)' : 'translateY(50px) translateZ(0)',
            transition: 'opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo)',
          }}
        >
          <p className="text-xs font-semibold tracking-[0.5em] uppercase mb-5" style={{ color: '#B6B09F' }}>What I Do</p>
          <h2 className="text-5xl lg:text-8xl font-black mb-6 leading-none">
            <span className="text-gradient">.NET</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}> Developer</span>
          </h2>
          {/* Animated underline */}
          <div className="flex justify-center mt-4">
            <div
              className="h-0.5 rounded-full"
              style={{
                width: headerInView ? '120px' : '0px',
                background: 'linear-gradient(to right, transparent, #B6B09F, transparent)',
                transition: 'width 1.1s var(--ease-out-expo) 0.45s',
              }}
            />
          </div>
          <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Crafting innovative solutions and building scalable applications that make a real difference.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-28">
          {stats.map(({ icon: Icon, target, suffix, label, desc, color }, i) => (
            <TiltCard
              key={label}
              className="relative p-8 rounded-3xl glass cursor-default overflow-hidden group"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0) translateZ(0)' : 'translateY(60px) translateZ(0)',
                transition: `opacity 0.85s var(--ease-out-expo) ${i * 0.18}s, transform 0.85s var(--ease-out-expo) ${i * 0.18}s`,
              }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(135deg, rgba(182,176,159,0.07), transparent)`, transition: 'opacity 0.5s var(--ease-smooth)' }} />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -translate-y-8 translate-x-8"
                style={{ background: color }} />

              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: 'rgba(182,176,159,0.1)', border: `1px solid rgba(182,176,159,0.2)`, transition: 'transform 0.45s var(--ease-spring)', willChange: 'transform' }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <div
                  className="text-6xl font-black mb-2 text-gradient"
                  style={{ opacity: statsInView ? 1 : 0, animation: statsInView ? `counterPop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.18 + 0.4}s both` : 'none' }}
                >
                  <Counter target={target} suffix={suffix} />
                </div>
                <div className="text-base font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>{label}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{desc}</div>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 rounded-full group-hover:w-full"
                style={{ width: '0%', background: `linear-gradient(to right, ${color}, transparent)`, transition: 'width 0.6s var(--ease-out-expo)' }}
              />
            </TiltCard>
          ))}
        </div>

        {/* Skills */}
        <Skills />
      </div>
    </div>
  );
}
