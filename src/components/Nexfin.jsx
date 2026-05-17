import React, { useRef, useState, useEffect } from 'react';
import { FaDollarSign, FaBox, FaUsers, FaChartBar, FaShieldAlt, FaCrown, FaUserTie, FaClipboardList, FaServer, FaDatabase, FaCog, FaCloud, FaLock, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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

const Section = ({ children, className = '', delay = 0, dir = 'up' }) => {
  const [ref, inView] = useInView();
  const transforms = {
    up:    inView ? 'translateY(0)' : 'translateY(60px)',
    left:  inView ? 'translateX(0)' : 'translateX(-60px)',
    right: inView ? 'translateX(0)' : 'translateX(60px)',
    scale: inView ? 'scale(1)'      : 'scale(0.85)',
  };
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: transforms[dir], transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      {children}
    </div>
  );
};

const modules = [
  { title: 'Financial Management', desc: 'Accounting, ledgers & voucher management', icon: FaDollarSign },
  { title: 'Inventory Control', desc: 'Stock tracking & warehouse management', icon: FaBox },
  { title: 'Payroll System', desc: 'Salary processing & tax calculations', icon: FaUsers },
  { title: 'GST & Taxation', desc: 'Automated tax & compliance reports', icon: FaChartBar },
];

const roles = [
  { role: 'Admin', perms: ['All companies access', 'Block companies', 'License management'], icon: FaShieldAlt },
  { role: 'Owner', perms: ['Company management', 'Full financial reports', 'Tax details access'], icon: FaCrown },
  { role: 'Manager', perms: ['Department oversight', 'Reports access', 'Inventory tracking'], icon: FaUserTie },
  { role: 'Accountant', perms: ['Ledger management', 'Voucher creation', 'GST compliance'], icon: FaClipboardList },
];

const architecture = [
  { layer: 'API Layer', tech: 'ASP.NET Core Web API', desc: 'RESTful APIs with JWT auth', icon: FaServer },
  { layer: 'Application Layer', tech: 'CQRS + MediatR', desc: 'Command/Query separation', icon: FaCog },
  { layer: 'Domain Layer', tech: 'Clean Architecture', desc: 'Business entities & logic', icon: FaCloud },
  { layer: 'Infrastructure', tech: 'Entity Framework Core', desc: 'Data persistence & repos', icon: FaDatabase },
];

const techStack = [
  { name: 'ASP.NET Core', cat: 'Backend', icon: FaServer },
  { name: 'Entity Framework', cat: 'ORM', icon: FaDatabase },
  { name: 'JWT Auth', cat: 'Security', icon: FaLock },
  { name: 'RSA Encryption', cat: 'License', icon: FaShieldAlt },
  { name: 'Redis Cache', cat: 'Caching', icon: FaServer },
  { name: 'SendGrid', cat: 'Email', icon: FaEnvelope },
  { name: 'RDLC Reports', cat: 'Reporting', icon: FaFileAlt },
  { name: 'TLS/SSL', cat: 'Encryption', icon: FaLock },
];

export default function Nexfin() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(182,176,159,0.3), transparent)' }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 animate-float"
        style={{ background: 'radial-gradient(circle, #B6B09F, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* Hero */}
        <Section className="text-center mb-20" dir="scale">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-8"
            style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)', color: '#B6B09F' }}>
            Project 02
          </div>
          <h1 className="text-6xl lg:text-9xl font-black mb-6">
            <span className="text-gradient">NexFin</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}> ERP</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Comprehensive Business Financial Management Platform built with ASP.NET Core Microservices Architecture
          </p>
        </Section>

        {/* Hero Image + Overview */}
        <Section className="grid lg:grid-cols-2 gap-16 items-center mb-24" delay={0.1} dir="up">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)' }} />
            <img src="assets/Nx01.jpg" alt="NexFin Dashboard"
              className="relative w-full h-80 lg:h-[28rem] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }} />
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {['ASP.NET Core', 'Microservices', 'CQRS', 'JWT Auth', 'Entity Framework'].map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs rounded-full glass" style={{ color: '#B6B09F' }}>{t}</span>
              ))}
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl glass" style={{ borderLeft: '3px solid #B6B09F' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>Project Overview</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  NexFin ERP is a comprehensive business financial management application with microservices architecture, providing financial tracking, invoice generation, payroll management, and real-time reporting with RSA-encrypted license management.
                </p>
              </div>
              <div className="p-6 rounded-2xl glass" style={{ borderLeft: '3px solid rgba(182,176,159,0.4)' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>Key Capabilities</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Advanced accounting, inventory control, GST compliance, sales automation, comprehensive analytics, and multi-user payroll with automated tax deductions.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Core Modules */}
        <Section className="mb-24" delay={0.1} dir="up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#B6B09F' }}>Features</p>
            <h2 className="text-4xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>Core Modules</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map(({ title, desc, icon: Icon }, i) => (
              <div key={title} className="group p-6 rounded-2xl glass card-hover text-center"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)' }}>
                  <Icon style={{ color: '#B6B09F', fontSize: 20 }} />
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>{title}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Roles */}
        <Section className="mb-24" delay={0.1} dir="up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#B6B09F' }}>Access Control</p>
            <h2 className="text-4xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>Role-Based Permissions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map(({ role, perms, icon: Icon }, i) => (
              <div key={role} className="group p-6 rounded-2xl glass card-hover"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)' }}>
                  <Icon style={{ color: '#B6B09F', fontSize: 18 }} />
                </div>
                <div className="text-base font-bold mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>{role}</div>
                <ul className="space-y-2">
                  {perms.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#B6B09F' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Architecture + Image */}
        <Section className="grid lg:grid-cols-2 gap-16 items-center mb-24" delay={0.1} dir="left">
          <div className="space-y-4">
            <h2 className="text-4xl font-black mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="text-gradient">Microservices</span> Architecture
            </h2>
            {architecture.map(({ layer, tech, desc, icon: Icon }, i) => (
              <div key={layer} className="group flex items-start gap-4 p-5 rounded-2xl glass transition-all duration-300 hover:scale-[1.02]"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(182,176,159,0.1)' }}>
                  <Icon style={{ color: '#B6B09F', fontSize: 16 }} />
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: 'rgba(255,255,255,0.8)' }}>{layer}</div>
                  <div className="text-xs font-medium mb-1" style={{ color: '#B6B09F' }}>{tech}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-700"
              style={{ background: 'linear-gradient(135deg, #EAE4D5, #B6B09F)' }} />
            <img src="assets/Nx02.jpg" alt="Architecture"
              className="relative w-full h-80 lg:h-[28rem] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
        </Section>

        {/* Tech Stack */}
        <Section className="mb-24" delay={0.1} dir="scale">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#B6B09F' }}>Built With</p>
            <h2 className="text-4xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>Technology Stack</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map(({ name, cat, icon: Icon }, i) => (
              <div key={name} className="group p-5 rounded-2xl glass card-hover text-center"
                style={{ transitionDelay: `${i * 0.06}s` }}>
                <Icon style={{ color: '#B6B09F', fontSize: 22, margin: '0 auto 12px' }} />
                <div className="text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{name}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{cat}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section dir="scale">
          <div className="text-center p-12 rounded-3xl glass-strong relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl opacity-30"
              style={{ background: 'linear-gradient(135deg, rgba(182,176,159,0.05), transparent)' }} />
            <div className="relative">
              <h3 className="text-3xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>Ready to Streamline Your Business?</h3>
              <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Experience comprehensive financial management with NexFin ERP's powerful microservices architecture.
              </p>
              <button className="px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)', color: '#0a0a0a', boxShadow: '0 0 30px rgba(182,176,159,0.3)' }}>
                View Live Demo
              </button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
