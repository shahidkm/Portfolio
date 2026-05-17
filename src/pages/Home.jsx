import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

/* ── Typewriter ── */
const ROLES = ['.NET Developer', 'React Developer', 'Full Stack Dev', 'Problem Solver'];
function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const full = ROLES[idx];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting && text === full) { setTimeout(() => setDeleting(true), 2000); return; }
      if (deleting && text === '')   { setDeleting(false); setIdx(i => (i + 1) % ROLES.length); return; }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);
  return (
    <span className="inline-flex items-center gap-1" style={{ color: '#B6B09F' }}>
      {text}<span className="animate-blink" style={{ color: '#B6B09F' }}>|</span>
    </span>
  );
}

/* ── Letter drop ── */
function AnimatedName({ name, delay = 0 }) {
  return (
    <span style={{ display: 'inline-block' }}>
      {name.split('').map((ch, i) => (
        <span key={i} className="inline-block opacity-0"
          style={{ animation: 'letterDrop 0.55s var(--ease-out-expo) forwards', animationDelay: `${delay + i * 0.045}s`, perspective: '500px' }}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

/* ── Magnetic button ── */
function MagneticBtn({ children, className, style, onClick }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.22;
    const y = (e.clientY - r.top  - r.height / 2) * 0.22;
    ref.current.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;
  };
  const leave = () => { ref.current.style.transform = 'translate(0,0) translateZ(0)'; };
  return (
    <button ref={ref} onMouseMove={move} onMouseLeave={leave} onClick={onClick}
      className={`magnetic ${className}`} style={style}>
      {children}
    </button>
  );
}

/* ── Particles (stable, no re-render) ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.8,
  delay: Math.random() * 9,
  duration: Math.random() * 5 + 5,
  opacity: Math.random() * 0.4 + 0.15,
}));

export default function Home() {
  const navigate = useNavigate();
  const containerRef  = useRef(null);
  const glowRef       = useRef(null);   // mouse glow div
  const cursorRef     = useRef(null);   // cursor dot
  const mouseTarget   = useRef({ x: -999, y: -999 });
  const mouseCurrent  = useRef({ x: -999, y: -999 });
  const rafRef        = useRef(null);
  const [ripples, setRipples] = useState([]);

  /* Lerp mouse glow via RAF — silky smooth, zero re-renders */
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      const t = mouseTarget.current;
      const c = mouseCurrent.current;
      c.x = lerp(c.x, t.x, 0.08);
      c.y = lerp(c.y, t.y, 0.08);
      if (glowRef.current) {
        glowRef.current.style.left = `${c.x - 350}px`;
        glowRef.current.style.top  = `${c.y - 350}px`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${t.x}px`;
        cursorRef.current.style.top  = `${t.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseTarget.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  }, []);

  const handleClick = (e) => {
    const id = Date.now();
    setRipples(r => [...r, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 900);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onClick={handleClick}
      className="min-h-screen w-full relative overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg, #080808 0%, #111111 60%, #0a0a0a 100%)' }}>

      {/* Cursor dot — positioned via RAF, no React state */}
      <div ref={cursorRef} className="cursor-glow" style={{ width: 14, height: 14 }} />

      {/* Click ripples */}
      {ripples.map(rp => (
        <div key={rp.id} className="fixed pointer-events-none rounded-full"
          style={{ left: rp.x - 20, top: rp.y - 20, width: 40, height: 40,
            border: '1px solid rgba(182,176,159,0.45)',
            animation: 'ripple 0.9s var(--ease-smooth) forwards' }} />
      ))}

      {/* Mouse glow — moved via RAF lerp */}
      <div ref={glowRef} className="absolute pointer-events-none"
        style={{ width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182,176,159,0.065) 0%, transparent 65%)',
          willChange: 'left, top' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Morphing blobs */}
      <div className="absolute animate-morph animate-glow-pulse pointer-events-none"
        style={{ top: '8%', right: '-6%', width: 520, height: 520,
          background: 'radial-gradient(circle at 40% 40%, rgba(182,176,159,0.11), rgba(234,228,213,0.03) 60%, transparent)',
          filter: 'blur(45px)', willChange: 'border-radius' }} />
      <div className="absolute animate-morph animate-glow-pulse pointer-events-none"
        style={{ bottom: '4%', left: '-9%', width: 420, height: 420,
          background: 'radial-gradient(circle at 60% 60%, rgba(234,228,213,0.07), transparent 70%)',
          filter: 'blur(55px)', animationDelay: '5s', willChange: 'border-radius' }} />

      {/* Orbiting dots */}
      <div className="absolute pointer-events-none" style={{ top: '50%', right: '18%', transform: 'translate(50%,-50%)' }}>
        {[0,1,2].map(i => (
          <div key={i} className="absolute w-2 h-2 rounded-full"
            style={{ background: i === 0 ? '#B6B09F' : i === 1 ? '#EAE4D5' : 'rgba(255,255,255,0.25)',
              animation: `orbit ${9 + i * 3}s linear infinite`, animationDelay: `${i * 2.5}s`,
              top: '50%', left: '50%', marginTop: -4, marginLeft: -4, willChange: 'transform' }} />
        ))}
      </div>

      {/* Particles */}
      {PARTICLES.map(p => (
        <div key={p.id} className="absolute rounded-full pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            background: `rgba(182,176,159,${p.opacity})`,
            animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: 'transform, opacity' }} />
      ))}

      {/* Aurora sweeps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-28 opacity-[0.028] animate-aurora"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(182,176,159,0.9), transparent)', animationDuration: '7s' }} />
        <div className="absolute top-0 left-0 h-full w-20 opacity-[0.018] animate-aurora"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(234,228,213,0.9), transparent)', animationDuration: '11s', animationDelay: '4s' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-8 order-2 lg:order-1">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm opacity-0 animate-bounce-in neon-hover"
              style={{ background: 'rgba(182,176,159,0.08)', border: '1px solid rgba(182,176,159,0.2)', color: '#B6B09F', animationFillMode: 'both' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </div>

            <div className="opacity-0 animate-fade-up delay-100" style={{ animationFillMode: 'both' }}>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="text-gradient"><AnimatedName name="MUHAMMED" delay={0.3} /></span>
                <br />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}><AnimatedName name="SHAHID" delay={0.72} /></span>
              </h1>
            </div>

            <div className="flex items-center gap-4 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'both' }}>
              <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #B6B09F)' }} />
              <span className="text-lg font-light tracking-widest uppercase"><Typewriter /></span>
              <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #B6B09F)' }} />
            </div>

            <p className="text-lg leading-relaxed max-w-lg opacity-0 animate-fade-up delay-400"
              style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, animationFillMode: 'both' }}>
              Self-taught .NET & React Developer crafting modern, scalable software solutions with clean architecture and exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up delay-500" style={{ animationFillMode: 'both' }}>
              {['.NET Developer', 'React Developer', 'Accountant'].map((tag, i) => (
                <span key={tag} className="px-4 py-2 text-sm font-medium rounded-full cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'background 0.35s var(--ease-smooth), color 0.35s var(--ease-smooth), transform 0.35s var(--ease-spring), box-shadow 0.35s var(--ease-smooth)',
                    willChange: 'transform' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(182,176,159,0.1)'; el.style.color = '#B6B09F'; el.style.transform = 'translateY(-3px) translateZ(0)'; el.style.boxShadow = '0 8px 24px rgba(182,176,159,0.15)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.03)'; el.style.color = 'rgba(255,255,255,0.55)'; el.style.transform = 'translateY(0) translateZ(0)'; el.style.boxShadow = 'none'; }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-600" style={{ animationFillMode: 'both' }}>
              <MagneticBtn onClick={() => navigate('/projects')}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)', color: '#0a0a0a',
                  boxShadow: '0 0 36px rgba(182,176,159,0.3)',
                  transition: 'box-shadow 0.4s var(--ease-smooth)' }}>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-aurora"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)', animationDuration: '1.8s' }} />
                <span className="relative">View Projects</span>
                <ArrowRight size={16} className="relative"
                  style={{ transition: 'transform 0.35s var(--ease-spring)', transform: 'translateX(0)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'} />
              </MagneticBtn>

              <MagneticBtn className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm glass neon-hover"
                style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Download size={16} />
                Download CV
              </MagneticBtn>
            </div>

            <div className="flex gap-8 opacity-0 animate-fade-up delay-700" style={{ animationFillMode: 'both' }}>
              {[
                { icon: Github,   href: 'https://github.com/shahidkm',                        label: 'GitHub'   },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammed-shahid-km',      label: 'LinkedIn' },
                { icon: Mail,     href: 'mailto:kmshahid432@gmail.com',                        label: 'Email'    },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 text-sm font-medium reveal-line"
                  style={{ color: 'rgba(255,255,255,0.35)',
                    transition: 'color 0.35s var(--ease-smooth), transform 0.35s var(--ease-spring)',
                    willChange: 'transform' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#B6B09F'; e.currentTarget.style.transform = 'translateY(-3px) translateZ(0)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.transform = 'translateY(0) translateZ(0)'; }}>
                  <Icon size={15} style={{ transition: 'transform 0.35s var(--ease-spring)' }}
                    className="group-hover:rotate-12" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2 opacity-0 animate-fade-right delay-300" style={{ animationFillMode: 'both' }}>
            <div className="relative group" style={{ willChange: 'transform' }}>
              <div className="absolute -inset-6 rounded-[3rem] animate-spin-slow opacity-[0.18]"
                style={{ background: 'conic-gradient(from 0deg, transparent 50%, #B6B09F 70%, #EAE4D5 80%, transparent 100%)', willChange: 'transform' }} />
              <div className="absolute -inset-3 rounded-[2.5rem] animate-spin-rev opacity-[0.12]"
                style={{ background: 'conic-gradient(from 180deg, transparent 60%, rgba(234,228,213,0.55) 75%, transparent 100%)', willChange: 'transform' }} />
              <div className="absolute -inset-2 rounded-[2.5rem] blur-2xl opacity-20 animate-glow-pulse"
                style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)',
                  transition: 'opacity 0.6s var(--ease-smooth)' }} />

              <img src="assets/myImage.JPG" alt="Muhammed Shahid"
                className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-[2rem]"
                style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px rgba(0,0,0,0.65)',
                  transition: 'transform 0.6s var(--ease-spring), filter 0.6s var(--ease-smooth)',
                  willChange: 'transform' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04) translateZ(0)'; e.currentTarget.style.filter = 'brightness(1.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateZ(0)'; e.currentTarget.style.filter = 'brightness(1)'; }} />

              {/* Scan line on hover */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100"
                style={{ transition: 'opacity 0.4s var(--ease-smooth)' }}>
                <div className="absolute left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(182,176,159,0.7), transparent)', animation: 'scanLine 2.2s linear infinite' }} />
              </div>

              {/* Stat badges */}
              {[
                { val: '1+', sub: 'Years Exp.', pos: { bottom: -24, left: -24 }, delay: '0.8s' },
                { val: '5+', sub: 'Projects',   pos: { top: -24, right: -24 },   delay: '0.95s' },
                { val: '15+',sub: 'Tech Stack', pos: { bottom: -24, right: -24 },delay: '1.1s' },
              ].map(({ val, sub, pos, delay }) => (
                <div key={val} className="absolute px-5 py-3 rounded-2xl glass-strong neon-hover opacity-0 animate-bounce-in"
                  style={{ ...pos, animationDelay: delay, animationFillMode: 'both',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.45)',
                    transition: 'transform 0.4s var(--ease-spring), box-shadow 0.4s var(--ease-smooth)',
                    willChange: 'transform' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08) translateZ(0)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateZ(0)'; }}>
                  <div className="text-2xl font-black text-gradient">{val}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-24 opacity-0 animate-fade-up delay-1000" style={{ animationFillMode: 'both' }}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>Scroll</span>
            <div className="relative w-5 h-9 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="absolute left-1/2 top-1.5 w-1 h-2 rounded-full -translate-x-1/2"
                style={{ background: '#B6B09F', animation: 'float 1.6s ease-in-out infinite', willChange: 'transform' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
