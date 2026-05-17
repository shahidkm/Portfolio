import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function MagneticLogo({ children, onClick }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.28;
    const y = (e.clientY - r.top  - r.height / 2) * 0.28;
    ref.current.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;
  };
  const leave = () => { ref.current.style.transform = 'translate(0,0) translateZ(0)'; };
  return (
    <button ref={ref} onMouseMove={move} onMouseLeave={leave} onClick={onClick}
      style={{ transition: 'transform 0.5s var(--ease-spring)', willChange: 'transform' }}>
      {children}
    </button>
  );
}

const links = [
  { label: 'Home',       path: '/'            },
  { label: 'Projects',   path: '/projects'    },
  { label: 'Experience', path: '/experiences' },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isActive = (p) => location.pathname === p;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:       scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter:   scrolled ? 'blur(24px)'        : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)'   : 'none',
        borderBottom:     scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        boxShadow:        scrolled ? '0 4px 30px rgba(0,0,0,0.4)'       : 'none',
        transition: 'background 0.5s var(--ease-smooth), box-shadow 0.5s var(--ease-smooth), border-color 0.5s var(--ease-smooth)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <MagneticLogo onClick={() => navigate('/')}>
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gradient opacity-0 animate-fade-left"
              style={{ animationFillMode: 'both' }}>
              MS
            </span>
          </MagneticLogo>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 opacity-0 animate-fade-up delay-200"
            style={{ animationFillMode: 'both' }}>
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="relative px-5 py-2 text-sm font-medium rounded-xl group overflow-hidden"
                style={{
                  color: isActive(link.path) ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  transition: 'color 0.35s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                onMouseLeave={(e) => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-xl animate-scale-in"
                    style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)' }} />
                )}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(255,255,255,0.04)', transition: 'opacity 0.35s var(--ease-smooth)' }} />
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('/experiences')}
            className="hidden md:block relative px-5 py-2 text-sm font-semibold rounded-full overflow-hidden group opacity-0 animate-fade-right"
            style={{
              background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)',
              color: '#0a0a0a',
              animationFillMode: 'both',
              boxShadow: '0 0 20px rgba(182,176,159,0.25)',
              transition: 'box-shadow 0.4s var(--ease-smooth), transform 0.4s var(--ease-spring)',
              willChange: 'transform',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(182,176,159,0.5)'; e.currentTarget.style.transform = 'scale(1.05) translateZ(0)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(182,176,159,0.25)'; e.currentTarget.style.transform = 'scale(1) translateZ(0)'; }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-aurora"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)', animationDuration: '1.8s' }} />
            <span className="relative">Hire Me</span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{
              color: 'rgba(255,255,255,0.6)',
              transform: isOpen ? 'rotate(90deg) translateZ(0)' : 'rotate(0deg) translateZ(0)',
              transition: 'transform 0.4s var(--ease-spring), color 0.3s var(--ease-smooth)',
              willChange: 'transform',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: isOpen ? '280px' : '0',
          opacity:   isOpen ? 1 : 0,
          transition: 'max-height 0.5s var(--ease-out-expo), opacity 0.4s var(--ease-smooth)',
        }}
      >
        <div className="px-6 pb-5 pt-2 space-y-1"
          style={{ background: 'rgba(8,8,8,0.96)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {links.map((link, i) => (
            <button
              key={link.path}
              onClick={() => { navigate(link.path); setIsOpen(false); }}
              className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl"
              style={{
                color:      isActive(link.path) ? '#ffffff' : 'rgba(255,255,255,0.45)',
                background: isActive(link.path) ? 'rgba(182,176,159,0.1)' : 'transparent',
                transform:  isOpen ? 'translateX(0) translateZ(0)' : 'translateX(-20px) translateZ(0)',
                opacity:    isOpen ? 1 : 0,
                transition: `transform 0.45s var(--ease-out-expo) ${i * 0.07}s, opacity 0.4s var(--ease-smooth) ${i * 0.07}s, color 0.3s var(--ease-smooth)`,
                willChange: 'transform, opacity',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
