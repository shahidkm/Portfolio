import React, { useState } from 'react';
import { Code, Server, Database, Shield, Globe, GitBranch, Users, Zap } from 'lucide-react';

const BridgeonExperience = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: '.NET Core', icon: Code, category: 'Backend' },
    { name: 'Entity Framework', icon: Database, category: 'ORM' },
    { name: 'SQL Server', icon: Database, category: 'Database' },
    { name: 'MassTransit', icon: Server, category: 'Messaging' },
    { name: 'RabbitMQ', icon: Server, category: 'Queue' },
    { name: 'Docker', icon: Server, category: 'Container' },
    { name: 'Azure AKS', icon: Globe, category: 'Cloud' },
    { name: 'JWT Auth', icon: Shield, category: 'Security' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'TypeScript', icon: Code, category: 'Language' },
    { name: 'Tailwind CSS', icon: Code, category: 'Styling' },
    { name: 'Git', icon: GitBranch, category: 'VCS' }
  ];

  const achievements = [
    {
      title: 'Scalable Backend Systems',
      description: 'Developed robust backend systems using .NET Core and Entity Framework Core with clean architecture patterns',
      icon: Server
    },
    {
      title: 'Microservices Architecture',
      description: 'Built and deployed microservices with MassTransit, RabbitMQ, and Docker orchestration',
      icon: Globe
    },
    {
      title: 'Security Implementation',
      description: 'Created secure JWT-based authentication with session management for multi-tenant applications',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Designed RESTful APIs and optimized database queries for high performance and data integrity',
      icon: Zap
    },
    {
      title: 'Full-Stack Integration',
      description: 'Integrated responsive UIs using React, TypeScript, and Tailwind CSS with seamless backend interaction',
      icon: Code
    },
    {
      title: 'Team Collaboration',
      description: 'Used Git for version control and collaborated across teams maintaining high code quality',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen p-8 relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #F2F2F2 0%, #EAE4D5 50%, #B6B09F 100%)'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#000000' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rotate-45 opacity-5" 
             style={{ backgroundColor: '#000000' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full opacity-10 animate-bounce" 
             style={{ backgroundColor: '#B6B09F', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 rotate-12 opacity-5" 
             style={{ backgroundColor: '#000000' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
             style={{
               background: 'radial-gradient(circle, #000000 0%, transparent 70%)',
               transform: 'translate(-50%, -50%)'
             }}>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
             style={{
               background: 'radial-gradient(circle, #B6B09F 0%, transparent 70%)'
             }}>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full rounded-2xl opacity-10"
                 style={{
                   background: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%)'
                 }}>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black">
            Bridgeon Solution
          </h1>
          <div className="relative inline-block">
            <p className="text-xl px-6 py-2 rounded-full backdrop-blur-sm border border-white/20" 
               style={{ 
                 color: '#B6B09F',
                 background: 'rgba(255, 255, 255, 0.1)'
               }}>
              Calicut • Full-Stack Developer Experience • 1 Year
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 shadow-2xl" 
               style={{ 
                 background: 'rgba(234, 228, 213, 0.8)',
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
               }}>
            {['overview', 'technologies', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-all duration-500 relative overflow-hidden ${
                  activeTab === tab 
                    ? 'text-white transform scale-105' 
                    : 'hover:opacity-80 hover:scale-105'
                }`}
                style={{
                  backgroundColor: activeTab === tab ? '#000000' : 'transparent',
                  color: activeTab === tab ? '#F2F2F2' : '#000000'
                }}
              >
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 animate-pulse"></div>
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-3xl p-8 shadow-2xl backdrop-blur-md border border-white/20 relative overflow-hidden" 
             style={{ 
               background: 'rgba(234, 228, 213, 0.9)',
               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
             }}>
          {/* Content Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full" 
                 style={{ background: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full" 
                 style={{ background: 'radial-gradient(circle, #B6B09F 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
                Professional Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>
                    Backend Development
                  </h3>
                  <p style={{ color: '#B6B09F' }}>
                    Developed scalable backend systems using .NET Core, Entity Framework Core, and SQL Server, 
                    following clean architecture and CQRS patterns for maintainable and robust applications.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>
                    Microservices & Cloud
                  </h3>
                  <p style={{ color: '#B6B09F' }}>
                    Built and deployed microservices with MassTransit, RabbitMQ, and Docker, 
                    orchestrated via Azure Kubernetes Service (AKS) for scalable cloud solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>
                    Security & Authentication
                  </h3>
                  <p style={{ color: '#B6B09F' }}>
                    Created secure JWT-based authentication and session management with cookie support 
                    for multi-tenant applications, ensuring robust security protocols.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>
                    Frontend Integration
                  </h3>
                  <p style={{ color: '#B6B09F' }}>
                    Integrated responsive UIs using React, TypeScript, and Tailwind CSS, 
                    ensuring smooth frontend-backend interaction and optimal user experience.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technologies' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 rounded-2xl text-center hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(242, 242, 242, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                             style={{ background: 'linear-gradient(45deg, #000000, #B6B09F)' }}></div>
                        <IconComponent className="w-8 h-8 mx-auto mb-2 transition-transform duration-500 group-hover:scale-125 relative z-10" 
                                     style={{ color: '#000000' }} />
                        <h3 className="font-semibold text-sm mb-1 relative z-10" style={{ color: '#000000' }}>
                          {tech.name}
                        </h3>
                        <p className="text-xs relative z-10" style={{ color: '#B6B09F' }}>
                          {tech.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div 
                      key={index}
                      className="p-6 rounded-2xl hover:scale-105 transition-all duration-500 group backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl relative overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(242, 242, 242, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                           style={{ background: 'linear-gradient(45deg, #000000, #B6B09F)' }}></div>
                      <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                           style={{ background: 'radial-gradient(circle, #000000, transparent)' }}></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-500"
                             style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                          <IconComponent className="w-6 h-6 flex-shrink-0" style={{ color: '#000000' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                            {achievement.title}
                          </h3>
                          <p className="text-sm" style={{ color: '#B6B09F' }}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%)',
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
               }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                 style={{ background: 'linear-gradient(45deg, #B6B09F, #EAE4D5)' }}></div>
            <GitBranch className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-500" 
                     style={{ color: '#F2F2F2' }} />
            <span className="font-medium relative z-10" style={{ color: '#F2F2F2' }}>
              Committed to Excellence in Software Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeonExperience;