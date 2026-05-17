import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Globe, Smartphone, Brain } from 'lucide-react';

const skills = [
  { name: 'C#',               pct: 80, icon: Code,       color: '#B6B09F' },
  { name: 'ASP.NET',          pct: 90, icon: Server,     color: '#EAE4D5' },
  { name: 'Entity Framework', pct: 85, icon: Database,   color: '#B6B09F' },
  { name: 'JavaScript',       pct: 75, icon: Globe,      color: '#EAE4D5' },
  { name: 'React',            pct: 70, icon: Smartphone, color: '#B6B09F' },
  { name: 'SQL',              pct: 85, icon: Brain,      color: '#EAE4D5' },
];

const level = (p) => p >= 90 ? 'Expert' : p >= 80 ? 'Advanced' : p >= 70 ? 'Intermediate' : 'Beginner';

function TiltCard({ children, className, style }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    ref.current.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) translateZ(0)`;
  };
  const leave = () => {
    ref.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0) translateZ(0)';
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={className}
      style={{ transition: 'transform 0.55s var(--ease-spring)', willChange: 'transform', ...style }}>
      {children}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="text-center mb-14">
        <p className="text-xs font-semibold tracking-[0.5em] uppercase mb-3" style={{ color: '#B6B09F' }}>Expertise</p>
        <h3 className="text-4xl lg:text-5xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>Technical Skills</h3>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 rounded-full" style={{
            width: inView ? '80px' : '0px',
            background: 'linear-gradient(to right, transparent, #B6B09F, transparent)',
            transition: 'width 1s var(--ease-out-expo) 0.3s',
          }} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map(({ name, pct, icon: Icon, color }, i) => (
          <TiltCard
            key={name}
            className="group relative p-6 rounded-2xl glass overflow-hidden cursor-default"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) translateZ(0)' : 'translateY(40px) translateZ(0)',
              transition: `opacity 0.75s var(--ease-out-expo) ${i * 0.1}s, transform 0.75s var(--ease-out-expo) ${i * 0.1}s`,
            }}
          >
            {/* BG glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`,
                transition: 'opacity 0.45s var(--ease-smooth)',
              }} />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 h-0.5 rounded-t-2xl group-hover:w-full"
              style={{
                width: '0%',
                background: `linear-gradient(to right, ${color}, transparent)`,
                transition: 'width 0.6s var(--ease-out-expo)',
              }} />

            <div className="relative flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  transition: 'transform 0.45s var(--ease-spring)',
                }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div className="text-right">
                <div className="text-sm font-bold" style={{ color: 'rgba(255,255,255,0.8)' }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color }}>{level(pct)}</div>
              </div>
            </div>

            {/* Bar */}
            <div className="h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: inView ? `${pct}%` : '0%',
                  background: `linear-gradient(to right, ${color}, ${color}aa)`,
                  transition: `width 1.1s var(--ease-out-expo) ${i * 0.12 + 0.4}s`,
                  boxShadow: `0 0 10px ${color}55`,
                  willChange: 'width',
                }}>
                <div className="absolute inset-0 animate-aurora opacity-40"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', animationDuration: '2.2s' }} />
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Proficiency</span>
              <span className="text-xs font-bold" style={{
                color,
                opacity: inView ? 1 : 0,
                animation: inView ? `counterPop 0.55s var(--ease-spring) ${i * 0.12 + 0.6}s both` : 'none',
              }}>
                {pct}%
              </span>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
