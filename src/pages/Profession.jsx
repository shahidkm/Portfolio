import React, { useState, useEffect } from 'react';
import { Laptop, Globe, Code, Award, ChevronUp, Menu, X, Home, User, Briefcase, Mail, FileText } from 'lucide-react';

// Mock Skills component with your color palette
const Skills = () => (
  <div className="mt-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-200">
    <h3 className="text-2xl font-bold text-black mb-6 text-center">Technical Skills</h3>
    <div className="flex flex-wrap gap-3 justify-center">
      {['C#', '.NET Core', 'ASP.NET', 'React', 'SQL Server', 'Azure', 'Docker', 'Git'].map((skill) => (
        <span 
          key={skill} 
          className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium hover:bg-black transition-all duration-300 hover:scale-105"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);


function Profession() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      icon: Laptop, 
      title: 'Experience', 
      value: '1+', 
      subtitle: 'Years',
      color: 'bg-black'
    },
    { 
      icon: Globe, 
      title: 'Projects', 
      value: '5+', 
      subtitle: 'Completed',
      color: 'bg-black'
    },
    { 
      icon: Code, 
      title: 'Technologies', 
      value: '15+', 
      subtitle: 'Mastered',
      color: 'bg-black'
    }
  ];

  return (
    <>
   
      <div className="min-h-screen relative overflow-hidden pt-16" style={{ backgroundColor: '#F2F2F2' }}>
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30 animate-pulse"
          style={{ backgroundColor: '#EAE4D5' }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: '#B6B09F', animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{ backgroundColor: '#EAE4D5', animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-4 h-4 rounded-full animate-bounce"
          style={{ backgroundColor: '#B6B09F', animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-40 right-32 w-6 h-6 rotate-45 animate-pulse"
          style={{ backgroundColor: '#000000', animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/4 w-3 h-3 rounded-full animate-bounce"
          style={{ backgroundColor: '#B6B09F', animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight relative z-10">
              .NET Developer
            </h1>
            {/* Decorative underline */}
            <div 
              className="absolute -bottom-2 left-0 h-2 rounded-full transform origin-left transition-all duration-2000"
              style={{ 
                backgroundColor: '#B6B09F',
                width: isVisible ? '100%' : '0%'
              }}
            ></div>
            {/* Background accent */}
            <div 
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20 -z-10"
              style={{ backgroundColor: '#EAE4D5' }}
            ></div>
          </div>
        </div>

        {/* Description Section */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <p className="text-lg sm:text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed font-light">
              Passionate about crafting{' '}
              <span className="font-semibold relative">
                innovative solutions
                <div 
                  className="absolute -bottom-1 left-0 h-1 rounded-full"
                  style={{ backgroundColor: '#B6B09F', width: '100%' }}
                ></div>
              </span>
              {' '}and building scalable applications that make a difference
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  backgroundColor: '#EAE4D5',
                  transitionDelay: `${index * 150}ms` 
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover overlay */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-20' : 'opacity-0'}`}
                  style={{ backgroundColor: '#B6B09F' }}
                ></div>
                
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div 
                    className={`mx-auto w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.color}`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 
                    className="text-sm font-medium mb-2 tracking-wider uppercase"
                    style={{ color: '#B6B09F' }}
                  >
                    {stat.title}
                  </h3>
                  <div className="text-4xl font-bold text-black mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p 
                    className="text-xs font-medium"
                    style={{ color: '#B6B09F' }}
                  >
                    {stat.subtitle}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-4 -translate-y-4 opacity-50"
                  style={{ backgroundColor: '#B6B09F' }}
                ></div>

                {/* Hover border effect */}
                <div 
                  className={`absolute inset-0 rounded-3xl border-2 transition-all duration-300 ${
                    hoveredCard === index ? 'border-black' : 'border-transparent'
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Skills />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce p-3 rounded-full" style={{ backgroundColor: '#EAE4D5' }}>
            <ChevronUp className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#EAE4D5"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#B6B09F"
          ></path>
        </svg>
      </div>
    </div>
    </>
  );
}

export default Profession;