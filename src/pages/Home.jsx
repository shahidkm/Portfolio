import React, { useState, useEffect } from 'react';


const BlurText = ({ text, className, delay = 0, onAnimationComplete, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (onAnimationComplete) {
        setTimeout(onAnimationComplete, 1200);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, onAnimationComplete]);
  
  return (
    <h1 
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0 blur-0' : 'opacity-0 transform translate-y-12 blur-sm'
      }`}
      style={style}
    >
      {text}
    </h1>
  );
};

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden mt-16"
      style={{ backgroundColor: '#F2F2F2' }}
      onMouseMove={handleMouseMove}
    >
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(182, 176, 159, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(182, 176, 159, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      {/* Enhanced Mouse-Following Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full transition-all duration-700 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: `radial-gradient(circle, rgba(182, 176, 159, 0.12) 0%, rgba(234, 228, 213, 0.06) 40%, transparent 70%)`,
          transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
          filter: 'blur(1px)'
        }}
      ></div>

      {/* Refined Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-24 left-[12%] w-[2px] h-32"
          style={{ 
            background: `linear-gradient(to bottom, rgba(182, 176, 159, 0.8), rgba(234, 228, 213, 0.4), transparent)`,
            animation: 'pulse 4s infinite',
            animationDelay: '0.5s'
          }}
        ></div>
        <div 
          className="absolute top-40 right-[18%] w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: 'rgba(182, 176, 159, 0.6)',
            animation: 'pulse 5s infinite',
            boxShadow: '0 0 20px rgba(182, 176, 159, 0.3)'
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-[6%] w-4 h-4 rotate-45 rounded-sm"
          style={{ 
            backgroundColor: 'rgba(234, 228, 213, 0.8)',
            animation: 'spin 15s linear infinite'
          }}
        ></div>
        <div 
          className="absolute top-[65%] right-[8%] w-16 h-[1px]"
          style={{ 
            background: `linear-gradient(to right, transparent, rgba(182, 176, 159, 0.7), transparent)`,
            animation: 'pulse 6s infinite'
          }}
        ></div>
        <div 
          className="absolute top-[20%] left-[70%] w-1 h-20 rounded-full"
          style={{ 
            background: `linear-gradient(to bottom, rgba(234, 228, 213, 0.6), transparent)`,
            animation: 'pulse 3.5s infinite',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side - Enhanced Profile */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Enhanced Border Effect */}
              <div className="absolute -inset-4">
                <div 
                  className="w-full h-full rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-1000"
                  style={{ 
                    background: `conic-gradient(from 0deg, transparent, rgba(182, 176, 159, 0.4), transparent, rgba(234, 228, 213, 0.4), transparent)`,
                    animation: isHovered ? 'spin 4s linear infinite' : 'none',
                    filter: 'blur(1px)'
                  }}
                ></div>
              </div>
              
              {/* Image Container */}
              <div className="relative">
                <img 
                  src="assets/myImage.JPG" 
                  alt="Muhammed Shahid" 
                  className={`w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-[2rem] transition-all duration-1000 ${
                    isHovered ? 'scale-[1.03] brightness-110' : ''
                  }`}
                  style={{
                    boxShadow: isHovered 
                      ? '0 50px 100px -20px rgba(182, 176, 159, 0.4), 0 20px 60px -20px rgba(0, 0, 0, 0.2)' 
                      : '0 30px 60px -15px rgba(0, 0, 0, 0.2), 0 10px 30px -10px rgba(182, 176, 159, 0.1)',
                    filter: isHovered ? 'saturate(1.15) contrast(1.05)' : 'saturate(1)'
                  }}
                />
                
                {/* Enhanced Overlay */}
                <div 
                  className="absolute inset-0 rounded-[2rem] transition-all duration-1000"
                  style={{ 
                    background: `linear-gradient(135deg, rgba(0, 0, 0, 0.03), transparent 40%, rgba(182, 176, 159, 0.08))`,
                    opacity: isHovered ? 0.8 : 0.4
                  }}
                ></div>
              </div>
              
              {/* Enhanced Status Badge */}
              <div 
                className="absolute -bottom-4 -right-4 flex items-center gap-3 backdrop-blur-lg px-6 py-3 rounded-2xl border transition-all duration-700"
                style={{ 
                  backgroundColor: 'rgba(242, 242, 242, 0.98)',
                  borderColor: 'rgba(182, 176, 159, 0.3)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(182, 176, 159, 0.2)'
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full relative"
                  style={{ backgroundColor: '#B6B09F' }}
                >
                  <div 
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: '#B6B09F', animationDuration: '3s' }}
                  ></div>
                </div>
                <span 
                  className="text-sm font-medium tracking-wide"
                  style={{ color: '#000000' }}
                >
                  Available for Work
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="space-y-12 text-center lg:text-left order-1 lg:order-2">
            
            {/* Name Section */}
            <div className="space-y-8">
              <BlurText
                className="text-5xl lg:text-7xl xl:text-8xl font-extralight leading-[0.85] tracking-tight"
                text="MUHAMMED SHAHID"
                delay={300}
                onAnimationComplete={handleAnimationComplete}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 200,
                  background: `linear-gradient(135deg, #000000 0%, #B6B09F 40%, #000000 70%, #B6B09F 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '300% 300%',
                  animation: 'gradient 8s ease infinite'
                }}
              />
              
              {/* Enhanced Role */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div 
                  className="w-16 h-[2px] rounded-full"
                  style={{ 
                    background: `linear-gradient(to right, transparent, #B6B09F, transparent)` 
                  }}
                ></div>
                <span 
                  className="text-xl lg:text-2xl font-extralight tracking-[0.25em] uppercase"
                  style={{ color: '#000000', opacity: 0.8 }}
                >
                  Full Stack Developer
                </span>
                <div 
                  className="w-16 h-[2px] rounded-full"
                  style={{ 
                    background: `linear-gradient(to right, transparent, #B6B09F, transparent)` 
                  }}
                ></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-8">
              <p 
                className="text-lg lg:text-xl leading-relaxed max-w-2xl font-light"
                style={{ color: '#000000', lineHeight: 1.8, opacity: 0.9 }}
              >
              Hi, I'm Shahid — a self-taught .NET Developer focused on creating modern, user-friendly, and robust software solutions.
              </p>
              
              {/* Key Highlights */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start max-w-xl">
                {[
                 
                  'Dot Net Developer',
                  'React Developer',
                 
                  'Accountant'
                ].map((highlight, index) => (
                  <div 
                    key={highlight}
                    className="group relative overflow-hidden px-5 py-2.5 rounded-full border transition-all duration-500 hover:scale-105 cursor-default"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      borderColor: 'rgba(182, 176, 159, 0.25)',
                      backdropFilter: 'blur(10px)',
                      animationDelay: `${index * 150}ms`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(182, 176, 159, 0.15)';
                      e.target.style.borderColor = 'rgba(182, 176, 159, 0.5)';
                      e.target.style.transform = 'scale(1.05) translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                      e.target.style.borderColor = 'rgba(182, 176, 159, 0.25)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <span 
                      className="text-sm font-medium tracking-wide"
                      style={{ color: '#000000' }}
                    >
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-8">
              <button 
                className="group relative px-10 py-5 font-medium rounded-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{
                  backgroundColor: '#000000',
                  color: '#F2F2F2',
                  boxShadow: '0 12px 24px -6px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 8px 20px -5px rgba(182, 176, 159, 0.3)';
                  e.target.style.transform = 'scale(1.02) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 12px 24px -6px rgba(0, 0, 0, 0.3)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span className="relative z-10 tracking-wide text-base">View Portfolio</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ 
                    background: `linear-gradient(135deg, #B6B09F, #000000, #B6B09F)`,
                    backgroundSize: '300% 300%',
                    animation: 'gradient 3s ease infinite'
                  }}
                ></div>
              </button>
              
              <button 
                className="group px-10 py-5 font-medium rounded-2xl border transition-all duration-500 hover:scale-[1.02] relative overflow-hidden backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#000000',
                  borderColor: 'rgba(182, 176, 159, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(182, 176, 159, 0.2)';
                  e.target.style.borderColor = '#B6B09F';
                  e.target.style.transform = 'scale(1.02) translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 25px -5px rgba(182, 176, 159, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                  e.target.style.borderColor = 'rgba(182, 176, 159, 0.4)';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span className="tracking-wide text-base">Download CV</span>
              </button>
            </div>

            {/* Enhanced Social Links */}
           <div className="flex gap-10 justify-center lg:justify-start pt-8">
  {[
    { name: 'GitHub', hoverColor: '#000000', link: 'https://github.com/shahidkm' },
    { name: 'LinkedIn', hoverColor: '#B6B09F', link: 'www.linkedin.com/in/muhammed-shahid-km' },
    { name: 'Email', hoverColor: '#000000', link: 'kmshahid432@gmail.com' }
  ].map((social) => (
    <a 
      key={social.name}
      href={social.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative text-base font-medium tracking-wide transition-all duration-300 hover:-translate-y-2"
      style={{ color: 'rgba(0, 0, 0, 0.6)' }}
      onMouseEnter={(e) => {
        e.target.style.color = social.hoverColor;
        e.target.style.textShadow = `0 4px 12px ${social.hoverColor}30`;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = 'rgba(0, 0, 0, 0.6)';
        e.target.style.textShadow = 'none';
      }}
    >
      {social.name}
      <span 
        className="absolute -bottom-2 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500 rounded-full"
        style={{ backgroundColor: social.hoverColor }}
      ></span>
    </a>
  ))}
</div>

          </div>
        </div>
      </div>

      {/* Enhanced Bottom Accent */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <div 
          className="w-20 h-[2px] rounded-full"
          style={{ 
            background: `linear-gradient(to right, transparent, #B6B09F, transparent)` 
          }}
        ></div>
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: '#B6B09F', animation: 'pulse 3s infinite' }}
        ></div>
        <div 
          className="w-20 h-[2px] rounded-full"
          style={{ 
            background: `linear-gradient(to right, transparent, #B6B09F, transparent)` 
          }}
        ></div>
      </div>

      {/* Enhanced custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 50% 0%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}

export default Home;