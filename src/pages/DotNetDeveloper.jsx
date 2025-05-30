import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiDownload, FiStar, FiCode, FiDatabase, FiCloud, FiGithub, FiLinkedin, FiExternalLink, FiArrowRight, FiZap, FiTrendingUp } from 'react-icons/fi';

function DotNetDeveloper() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { 
      name: 'C#', 
      level: 95, 
      color: 'from-blue-600 to-blue-700', 
      bgColor: 'bg-blue-50',
      icon: '🎯',
      description: 'Advanced OOP, LINQ, async/await patterns'
    },
    { 
      name: '.NET Core', 
      level: 90, 
      color: 'from-emerald-600 to-emerald-700', 
      bgColor: 'bg-emerald-50',
      icon: '⚡',
      description: 'Cross-platform development, dependency injection'
    },
    { 
      name: 'ASP.NET', 
      level: 88, 
      color: 'from-indigo-600 to-indigo-700', 
      bgColor: 'bg-indigo-50',
      icon: '🌐',
      description: 'MVC, Web API, SignalR real-time apps'
    },
    { 
      name: 'Entity Framework', 
      level: 85, 
      color: 'from-orange-600 to-orange-700', 
      bgColor: 'bg-orange-50',
      icon: '🗄️',
      description: 'Code-first, migrations, complex queries'
    },
    { 
      name: 'SQL Server', 
      level: 82, 
      color: 'from-red-600 to-red-700', 
      bgColor: 'bg-red-50',
      icon: '🔍',
      description: 'Performance tuning, stored procedures'
    },
    { 
      name: 'Azure', 
      level: 78, 
      color: 'from-cyan-600 to-cyan-700', 
      bgColor: 'bg-cyan-50',
      icon: '☁️',
      description: 'App Services, Functions, DevOps pipelines'
    }
  ];

  const projects = [
    {
      title: "Enterprise ERP System",
      description: "Scalable microservices architecture serving 10,000+ users",
      tech: ["C#", ".NET Core", "Azure", "SQL Server"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "High-performance data processing with SignalR integration",
      tech: ["ASP.NET", "SignalR", "Entity Framework"],
      gradient: "from-emerald-600 to-cyan-600"
    },
    {
      title: "Cloud-Native API Gateway",
      description: "Containerized microservices with Azure Kubernetes",
      tech: ["Docker", "Kubernetes", "Azure Functions"],
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 text-gray-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15 + scrollY / 8,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"
          style={{
            right: mousePosition.x / 20,
            bottom: mousePosition.y / 20,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main Hero Content */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8 shadow-sm">
                <FiZap className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-blue-700">Available for hire</span>
              </div>
              
              <h1 className="text-7xl lg:text-9xl font-black mb-8 leading-none">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  .NET
                </span>
                <br />
                <span className="text-gray-900">Developer</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Crafting <span className="text-blue-600 font-semibold">enterprise-grade solutions</span> with modern .NET ecosystem. 
                Transforming complex business logic into <span className="text-indigo-600 font-semibold">scalable, performant applications</span> 
                that drive real business value.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                {[
                  { number: "5+", label: "Years Experience", icon: FiTrendingUp, color: "blue" },
                  { number: "25+", label: "Projects Delivered", icon: FiCode, color: "emerald" },
                  { number: "15+", label: "Technologies", icon: FiDatabase, color: "indigo" },
                  { number: "99%", label: "Client Satisfaction", icon: FiStar, color: "orange" }
                ].map((stat, index) => (
                  <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-xl mb-3`}>
                      <stat.icon className={`text-${stat.color}-600`} size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <span>View My Projects</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl font-semibold border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 flex items-center gap-3 hover:shadow-md">
                  <FiDownload />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to build tomorrow's applications today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Skills Bars */}
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-900 font-semibold text-xl">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 font-medium text-lg">{skill.level}%</span>
                  </div>
                  
                  {activeSkill === index && (
                    <div className="mb-3 text-sm text-gray-600 transition-all duration-300">
                      {skill.description}
                    </div>
                  )}
                  
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative ${
                        activeSkill === index ? 'shadow-md' : ''
                      }`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Expertise Areas */}
            <div className="space-y-6">
              {[
                {
                  icon: FiCode,
                  title: "Backend Architecture",
                  description: "Designing robust microservices, RESTful APIs, and scalable enterprise solutions with modern .NET technologies and cloud-native patterns.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgColor: "bg-blue-50"
                },
                {
                  icon: FiDatabase,
                  title: "Database Excellence",
                  description: "Optimizing data models, implementing advanced Entity Framework patterns, and ensuring peak SQL Server performance with complex query optimization.",
                  gradient: "from-emerald-600 to-cyan-600",
                  bgColor: "bg-emerald-50"
                },
                {
                  icon: FiCloud,
                  title: "Cloud Solutions",
                  description: "Deploying cloud-native applications on Azure with DevOps practices, containerization strategies, and automated CI/CD pipelines.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgColor: "bg-indigo-50"
                }
              ].map((area, index) => (
                <div key={index} className={`group p-8 ${area.bgColor} rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}>
                  <div className={`inline-flex p-4 bg-gradient-to-r ${area.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Real-world solutions that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${project.gradient} rounded-xl mb-4 transition-all duration-300`}>
                    <FiExternalLink className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-white/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Something 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Amazing?</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into powerful, scalable applications
          </p>
          <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 text-lg">
            <span className="flex items-center gap-3">
              Start a Conversation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default DotNetDeveloper;