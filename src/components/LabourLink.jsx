import React, { useRef, useState, useEffect } from 'react';

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

const transforms = {
  up:    (v) => v ? 'translateY(0) translateZ(0)'   : 'translateY(60px) translateZ(0)',
  left:  (v) => v ? 'translateX(0) translateZ(0)'   : 'translateX(-60px) translateZ(0)',
  right: (v) => v ? 'translateX(0) translateZ(0)'   : 'translateX(60px) translateZ(0)',
  scale: (v) => v ? 'scale(1) translateZ(0)'        : 'scale(0.88) translateZ(0)',
};

function Section({ children, className = '', delay = 0, dir = 'up' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity:    inView ? 1 : 0,
      transform:  transforms[dir](inView),
      transition: `opacity 0.9s var(--ease-out-expo) ${delay}s, transform 0.9s var(--ease-out-expo) ${delay}s`,
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
}

const techs = [
  { name: 'ASP.NET Core',  desc: 'Backend APIs'           },
  { name: 'Microservices', desc: 'Scalable architecture'  },
  { name: 'RabbitMQ',      desc: 'Real-time messaging'    },
  { name: 'Docker',        desc: 'Containerized deployment'},
  { name: 'Azure',         desc: 'Cloud infrastructure'   },
  { name: 'React',         desc: 'Frontend UI'            },
];

const imgHover = {
  enter: (e) => { e.currentTarget.style.transform = 'scale(1.025) translateZ(0)'; },
  leave: (e) => { e.currentTarget.style.transform = 'scale(1) translateZ(0)'; },
};

export default function LabourLink() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(182,176,159,0.3), transparent)' }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 animate-float"
        style={{ background: 'radial-gradient(circle, #B6B09F, transparent)', willChange: 'transform' }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-5 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #EAE4D5, transparent)', willChange: 'transform' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* Hero */}
        <Section className="grid lg:grid-cols-2 gap-16 items-center mb-32" dir="up">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: 'rgba(182,176,159,0.1)', border: '1px solid rgba(182,176,159,0.2)', color: '#B6B09F' }}>
              Project 01
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-none">
              <span className="text-gradient">Labour</span><br />
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>Link</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Connecting talent with opportunity in the modern workforce through intelligent matching and seamless communication.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Smart Matching', 'Verified Profiles', 'Secure Platform'].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full glass" style={{ color: 'rgba(255,255,255,0.6)' }}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 group-hover:opacity-40"
              style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)', transition: 'opacity 0.6s var(--ease-smooth)' }} />
            <img src="assets/Lb01.png" alt="Labour Link"
              className="relative w-full h-80 lg:h-[28rem] object-cover rounded-3xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.6s var(--ease-spring)', willChange: 'transform' }}
              onMouseEnter={imgHover.enter} onMouseLeave={imgHover.leave} />
          </div>
        </Section>

        {/* About */}
        <Section className="grid lg:grid-cols-2 gap-16 items-center mb-32" delay={0.1} dir="up">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-15 group-hover:opacity-30"
              style={{ background: 'linear-gradient(135deg, #EAE4D5, #B6B09F)', transition: 'opacity 0.6s var(--ease-smooth)' }} />
            <img src="assets/Lb02.png" alt="About Labour Link"
              className="relative w-full h-72 lg:h-[24rem] object-cover rounded-3xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.6s var(--ease-spring)', willChange: 'transform' }}
              onMouseEnter={imgHover.enter} onMouseLeave={imgHover.leave} />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>
              About the <span className="text-gradient">Platform</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Labour Link revolutionizes workforce connections through intelligent matching and seamless communication. We bridge the gap between skilled professionals and forward-thinking employers.
            </p>
            <div className="p-6 rounded-2xl glass" style={{ borderLeft: '3px solid #B6B09F' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Built with a focus on reliability, security, and user experience — making job discovery effortless for both workers and employers.
              </p>
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section delay={0.1} dir="scale">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#B6B09F' }}>Stack</p>
            <h2 className="text-4xl font-black" style={{ color: 'rgba(255,255,255,0.9)' }}>Technologies Used</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {techs.map(({ name, desc }) => (
              <div key={name} className="group p-5 rounded-2xl glass"
                style={{ transition: 'transform 0.5s var(--ease-spring), box-shadow 0.5s var(--ease-smooth)', willChange: 'transform' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02) translateZ(0)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4), 0 0 30px rgba(182,176,159,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1) translateZ(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="text-sm font-semibold mb-1 group-hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.35s var(--ease-smooth)' }}>{name}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{desc}</div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-15 group-hover:opacity-30"
              style={{ background: 'linear-gradient(135deg, #B6B09F, #EAE4D5)', transition: 'opacity 0.6s var(--ease-smooth)' }} />
            <img src="assets/Lb03.png" alt="Labour Link Features"
              className="relative w-full h-72 lg:h-[32rem] object-cover rounded-3xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.6s var(--ease-spring)', willChange: 'transform' }}
              onMouseEnter={imgHover.enter} onMouseLeave={imgHover.leave} />
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.6), transparent 50%)' }} />
            <div className="absolute bottom-8 left-8">
              <div className="text-2xl font-black mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>Labour Link</div>
              <div className="text-sm" style={{ color: '#B6B09F' }}>Full-stack workforce platform</div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
