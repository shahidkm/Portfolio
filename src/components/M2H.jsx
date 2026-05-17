import React, { useState, useRef, useEffect } from 'react';
import { Code, Server, Database, Shield, Globe, GitBranch, Users, Zap } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const technologies = [
  { name: '.NET Core',    icon: Code,      category: 'Backend'  },
  { name: 'Entity Framework', icon: Database, category: 'ORM'  },
  { name: 'SQL Server',   icon: Database,  category: 'Database' },
  { name: 'JWT Auth',     icon: Shield,    category: 'Security' },
  { name: 'React',        icon: Code,      category: 'Frontend' },
  { name: 'TypeScript',   icon: Code,      category: 'Language' },
  { name: 'Tailwind CSS', icon: Code,      category: 'Styling'  },
  { name: 'Git',          icon: GitBranch, category: 'VCS'      },
];

const achievements = [
  { title: 'Scalable Backend Systems',  desc: 'Developed robust backend systems using .NET Core and Entity Framework Core with clean architecture patterns', icon: Server },
  { title: 'API Development',           desc: 'Built RESTful APIs with proper authentication, authorization, and error handling', icon: Globe },
  { title: 'Security Implementation',   desc: 'Created secure JWT-based authentication with session management for multi-tenant applications', icon: Shield },
  { title: 'Performance Optimization',  desc: 'Designed and optimized database queries for high performance and data integrity', icon: Zap },
  { title: 'Full-Stack Integration',    desc: 'Integrated responsive UIs using React, TypeScript, and Tailwind CSS', icon: Code },
  { title: 'Team Collaboration',        desc: 'Used Git for version control and collaborated across teams maintaining high code quality', icon: Users },
];

const overview = [
  { title: 'Backend Development',       desc: 'Developed scalable backend systems using .NET Core, Entity Framework Core, and SQL Server, following clean architecture and CQRS patterns.' },
  { title: 'API Design',                desc: 'Designed and implemented RESTful APIs with proper versioning, documentation, and error handling for seamless frontend integration.' },
  { title: 'Security & Authentication', desc: 'Created secure JWT-based authentication and session management with cookie support for multi-tenant applications.' },
  { title: 'Frontend Integration',      desc: 'Integrated responsive UIs using React, TypeScript, and Tailwind CSS, ensuring smooth frontend-backend interaction.' },
];

const TABS = ['overview', 'technologies', 'achievements'];

const shown  = (delay = 0) => ({ opacity: 1, transform: 'translateY(0) translateZ(0)', transition: `opacity 0.85s var(--ease-out-expo) ${delay}s, transform 0.85s var(--ease-out-expo) ${delay}s` });
const hidden = { opacity: 0, transform: 'translateY(30px) translateZ(0)' };

export default function M2H() {
  const [activeTab, setActiveTab] = useState('overview');
  const [headerRef, headerInView] = useInView();
  const [contentRef, contentInView] = useInView();

  return (
    <div className="min-h-screen relative overflow-hidden py-24" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(182,176,159,0.3), transparent)' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #EAE4D5, transparent)', willChange: 'transform' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none animate-morph opacity-[0.025]"
        style={{ background: 'radial-gradient(circle, #B6B09F, transparent)', filter: 'blur(60px)', willChange: 'border-radius' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16"
          style={headerInView ? shown(0) : hidden}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-6"
            style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)', color: '#B6B09F' }}>
            Work Experience
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-gradient">M2H</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}> Info Tech</span>
          </h1>
          <div className="flex justify-center my-4">
            <div style={{
              width: headerInView ? '100px' : '0px', height: '2px',
              background: 'linear-gradient(to right, transparent, #B6B09F, transparent)',
              borderRadius: '2px',
              transition: 'width 1s var(--ease-out-expo) 0.45s',
            }} />
          </div>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Calicut · .NET Developer
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8"
          style={headerInView ? { ...shown(0.25), display: 'flex' } : { ...hidden, display: 'flex' }}>
          <div className="flex p-1 rounded-2xl glass-strong gap-1">
            {TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="relative px-6 py-2.5 text-sm font-medium capitalize rounded-xl overflow-hidden"
                style={{
                  background: activeTab === tab ? 'linear-gradient(135deg, #B6B09F, #EAE4D5)' : 'transparent',
                  color:      activeTab === tab ? '#0a0a0a' : 'rgba(255,255,255,0.4)',
                  transform:  activeTab === tab ? 'scale(1.04) translateZ(0)' : 'scale(1) translateZ(0)',
                  boxShadow:  activeTab === tab ? '0 0 20px rgba(182,176,159,0.3)' : 'none',
                  transition: 'background 0.35s var(--ease-smooth), color 0.35s var(--ease-smooth), transform 0.4s var(--ease-spring), box-shadow 0.35s var(--ease-smooth)',
                  willChange: 'transform',
                }}>
                {activeTab === tab && (
                  <span className="absolute inset-0 animate-aurora opacity-25"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', animationDuration: '2s' }} />
                )}
                <span className="relative">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div ref={contentRef} className="p-8 rounded-3xl glass-strong"
          style={contentInView ? shown(0.3) : hidden}>
          <div key={activeTab} style={{ animation: 'fadeInUp 0.45s var(--ease-out-expo) both' }}>

            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-5">
                {overview.map(({ title, desc }) => (
                  <div key={title} className="p-6 rounded-2xl glass"
                    style={{
                      borderLeft: '2px solid rgba(182,176,159,0.3)',
                      transition: 'transform 0.45s var(--ease-spring), box-shadow 0.45s var(--ease-smooth)',
                      willChange: 'transform',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01) translateZ(0)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1) translateZ(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <h3 className="text-base font-bold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'technologies' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map(({ name, icon: Icon, category }) => (
                  <div key={name} className="group p-4 rounded-2xl glass text-center"
                    style={{
                      transition: 'transform 0.5s var(--ease-spring), box-shadow 0.5s var(--ease-smooth)',
                      willChange: 'transform',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.03) translateZ(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.35), 0 0 30px rgba(182,176,159,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1) translateZ(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <Icon size={22} className="mx-auto mb-3 group-hover:scale-125 group-hover:rotate-6"
                      style={{ color: '#B6B09F', transition: 'transform 0.45s var(--ease-spring)', willChange: 'transform' }} />
                    <div className="text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{category}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="grid md:grid-cols-2 gap-5">
                {achievements.map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="group flex items-start gap-4 p-5 rounded-2xl glass"
                    style={{
                      transition: 'transform 0.45s var(--ease-spring), box-shadow 0.45s var(--ease-smooth)',
                      willChange: 'transform',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01) translateZ(0)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1) translateZ(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.15)', transition: 'transform 0.45s var(--ease-spring)', willChange: 'transform' }}>
                      <Icon size={18} style={{ color: '#B6B09F' }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>{title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-10"
          style={contentInView ? { ...shown(0.5), display: 'flex' } : { ...hidden, display: 'flex' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-strong neon-hover"
            style={{ transition: 'transform 0.45s var(--ease-spring), box-shadow 0.45s var(--ease-smooth)', willChange: 'transform' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05) translateZ(0)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateZ(0)'; }}>
            <GitBranch size={16} className="animate-float" style={{ color: '#B6B09F', animationDuration: '3s' }} />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Committed to Excellence in Software Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}
