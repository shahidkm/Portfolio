import React from 'react'
import { 
  FaDollarSign, 
  FaBox, 
  FaUsers, 
  FaChartBar, 
  FaShieldAlt, 
  FaCrown, 
  FaUserTie, 
  FaClipboardList,
  FaServer,
  FaDatabase,
  FaCog,
  FaCloud,
  FaLock,
  FaEnvelope,
  FaFileAlt,
  FaChartLine,
  FaEye,
  FaUsersCog,
  FaPlay,
  FaBook
} from 'react-icons/fa'

function Nexfin() {
  return (
    <div className='bg-[#F2F2F2] min-h-screen relative overflow-hidden'>
      {/* Background Design Elements */}
      <div className='absolute inset-0'>
        {/* Top geometric shapes */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-[#EAE4D5] rounded-full opacity-30 transform translate-x-48 -translate-y-48'></div>
        <div className='absolute top-20 left-0 w-64 h-64 bg-[#B6B09F] rounded-full opacity-20 transform -translate-x-32'></div>
        
        {/* Middle section patterns */}
        <div className='absolute top-1/3 right-1/4 w-32 h-32 bg-[#EAE4D5] transform rotate-45 opacity-20'></div>
        <div className='absolute top-1/2 left-1/6 w-24 h-24 bg-[#B6B09F] rounded-full opacity-25'></div>
        
        {/* Bottom geometric elements */}
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-[#EAE4D5] rounded-full opacity-25 transform -translate-x-40 translate-y-40'></div>
        <div className='absolute bottom-20 right-0 w-48 h-48 bg-[#B6B09F] transform rotate-12 opacity-20 translate-x-24'></div>
        
        {/* Scattered dots pattern */}
        <div className='absolute top-1/4 left-1/3 w-3 h-3 bg-[#B6B09F] rounded-full opacity-40'></div>
        <div className='absolute top-1/3 right-1/3 w-2 h-2 bg-[#EAE4D5] rounded-full opacity-50'></div>
        <div className='absolute bottom-1/3 left-1/4 w-4 h-4 bg-[#B6B09F] rounded-full opacity-30'></div>
        <div className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#EAE4D5] rounded-full opacity-40'></div>
      </div>

      {/* Content with relative positioning */}
      <div className='relative z-10'>
        {/* Header */}
        <div className='w-full px-6 py-12'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-[#000000] text-center mb-8 tracking-tight'>
              NexFin ERP
            </h1>
            <p className='text-xl md:text-2xl text-[#000000]/80 text-center max-w-4xl mx-auto leading-relaxed font-light'>
              Comprehensive Business Financial Management Platform built with ASP.NET Core Microservices Architecture
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className='max-w-7xl mx-auto px-6 mb-16'>
          <div className='relative group overflow-hidden rounded-3xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-[#B6B09F]/30 to-[#000000]/20 z-10'></div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop" 
              alt="Financial Dashboard" 
              className='w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105' 
            />
            <div className='absolute bottom-8 left-8 text-white z-20'>
              <h3 className='text-3xl font-bold mb-2'>Advanced Financial Management</h3>
              <p className='text-lg opacity-90 font-light'>Complete ERP solution with microservices architecture</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='max-w-7xl mx-auto px-6 py-16'>
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
            {/* Project Image */}
            <div className='relative group overflow-hidden rounded-3xl'>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="NexFin Dashboard" 
                className='w-full h-80 lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent'></div>
            </div>

            {/* Project Details */}
            <div className='space-y-8'>
              <div className='flex flex-wrap gap-3 mb-8'>
                <span className='px-4 py-2 bg-[#EAE4D5] text-[#000000] rounded-full text-sm font-medium border border-[#B6B09F]/30'>ASP.NET Core</span>
                <span className='px-4 py-2 bg-[#EAE4D5] text-[#000000] rounded-full text-sm font-medium border border-[#B6B09F]/30'>Microservices</span>
                <span className='px-4 py-2 bg-[#EAE4D5] text-[#000000] rounded-full text-sm font-medium border border-[#B6B09F]/30'>CQRS</span>
                <span className='px-4 py-2 bg-[#EAE4D5] text-[#000000] rounded-full text-sm font-medium border border-[#B6B09F]/30'>JWT Auth</span>
                <span className='px-4 py-2 bg-[#EAE4D5] text-[#000000] rounded-full text-sm font-medium border border-[#B6B09F]/30'>Entity Framework</span>
              </div>

              <div className='space-y-8'>
                <div className='border-l-4 border-[#B6B09F] pl-8 py-2'>
                  <h3 className='text-3xl font-bold mb-4 text-[#000000]'>Project Overview</h3>
                  <p className='text-[#000000]/80 leading-relaxed text-lg font-light'>
                    NexFin ERP is a comprehensive business financial management application built with ASP.NET Core Web API and microservices architecture. It provides seamless financial tracking, invoice generation, payroll management, and real-time reporting with role-based authentication and RSA-encrypted license management.
                  </p>
                </div>

                <div className='border-l-4 border-[#B6B09F] pl-8 py-2'>
                  <h3 className='text-3xl font-bold mb-4 text-[#000000]'>Key Capabilities</h3>
                  <p className='text-[#000000]/80 leading-relaxed text-lg font-light'>
                    Advanced accounting & ledger management, inventory & stock control, GST & taxation compliance, sales & purchase automation, comprehensive reporting & analytics, and multi-user payroll processing with automated tax deductions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className='mb-20 relative'>
            {/* Background pattern for this section */}
            <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#EAE4D5] rounded-full opacity-20'></div>
            <div className='absolute -bottom-10 -left-10 w-24 h-24 bg-[#B6B09F] transform rotate-45 opacity-15'></div>
            
            <h2 className='text-4xl lg:text-5xl font-black mb-16 text-center text-[#000000] tracking-tight'>
              Core Modules
            </h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                { title: "Financial Management", desc: "Comprehensive accounting, ledgers, and voucher management", icon: <FaDollarSign className="text-4xl" /> },
                { title: "Inventory Control", desc: "Stock tracking, categorization, and warehouse management", icon: <FaBox className="text-4xl" /> },
                { title: "Payroll System", desc: "Employee management, salary processing, and tax calculations", icon: <FaUsers className="text-4xl" /> },
                { title: "GST & Taxation", desc: "Automated tax calculations, filing, and compliance reports", icon: <FaChartBar className="text-4xl" /> }
              ].map((module, index) => (
                <div key={index} className='bg-[#EAE4D5] rounded-2xl p-6 border border-[#B6B09F]/20 hover:bg-[#B6B09F]/10 transition-all duration-300 hover:scale-105 relative overflow-hidden'>
                  {/* Card background pattern */}
                  <div className='absolute top-0 right-0 w-16 h-16 bg-[#B6B09F] rounded-full opacity-10 transform translate-x-8 -translate-y-8'></div>
                  <div className='text-[#B6B09F] mb-4 text-center relative z-10'>{module.icon}</div>
                  <h3 className='font-bold text-lg text-[#000000] mb-3 text-center relative z-10'>{module.title}</h3>
                  <p className='text-[#000000]/70 font-light text-sm leading-relaxed text-center relative z-10'>{module.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User Roles & Permissions */}
          <div className='mb-20 relative'>
            {/* Background elements */}
            <div className='absolute top-0 left-1/4 w-20 h-20 bg-[#EAE4D5] transform rotate-12 opacity-20'></div>
            <div className='absolute bottom-0 right-1/4 w-16 h-16 bg-[#B6B09F] rounded-full opacity-25'></div>
            
            <h2 className='text-4xl lg:text-5xl font-black mb-16 text-center text-[#000000] tracking-tight'>
              Role-Based Access Control
            </h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                { 
                  role: "Admin", 
                  permissions: ["All companies access", "Block companies", "System configuration", "License management"],
                  color: "bg-[#EAE4D5] border-[#B6B09F]/30",
                  icon: <FaShieldAlt className="text-4xl text-[#B6B09F]" />
                },
                { 
                  role: "Owner", 
                  permissions: ["Company management", "Full financial reports", "Payroll oversight", "Tax details access"],
                  color: "bg-[#EAE4D5] border-[#B6B09F]/30",
                  icon: <FaCrown className="text-4xl text-[#B6B09F]" />
                },
                { 
                  role: "Manager", 
                  permissions: ["Department oversight", "Reports access", "Employee management", "Inventory tracking"],
                  color: "bg-[#EAE4D5] border-[#B6B09F]/30",
                  icon: <FaUserTie className="text-4xl text-[#B6B09F]" />
                },
                { 
                  role: "Accountant", 
                  permissions: ["Ledger management", "Voucher creation", "Financial reports", "GST compliance"],
                  color: "bg-[#EAE4D5] border-[#B6B09F]/30",
                  icon: <FaClipboardList className="text-4xl text-[#B6B09F]" />
                }
              ].map((user, index) => (
                <div key={index} className={`${user.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden border`}>
                  {/* Card background design */}
                  <div className='absolute -top-4 -right-4 w-12 h-12 bg-[#B6B09F] rounded-full opacity-10'></div>
                  <div className='absolute -bottom-2 -left-2 w-8 h-8 bg-[#B6B09F] transform rotate-45 opacity-10'></div>
                  
                  <div className='mb-4 text-center relative z-10'>{user.icon}</div>
                  <h3 className='font-bold text-xl text-[#000000] mb-4 text-center relative z-10'>{user.role}</h3>
                  <ul className='space-y-2 relative z-10'>
                    {user.permissions.map((permission, idx) => (
                      <li key={idx} className='text-[#000000]/70 font-light text-sm flex items-center'>
                        <span className='w-2 h-2 bg-[#B6B09F] rounded-full mr-3 flex-shrink-0'></span>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20 relative'>
            {/* Background elements */}
            <div className='absolute top-1/2 left-0 w-24 h-24 bg-[#EAE4D5] rounded-full opacity-20 transform -translate-x-12'></div>
            <div className='absolute top-0 right-1/4 w-16 h-16 bg-[#B6B09F] transform rotate-45 opacity-15'></div>
            
            <div className='space-y-8 relative z-10'>
              <h2 className='text-4xl lg:text-5xl font-black mb-8 text-[#000000] tracking-tight'>
                Microservices Architecture
              </h2>
              
              <div className='space-y-6'>
                {[
                  { 
                    layer: "API Layer", 
                    tech: "ASP.NET Core Web API", 
                    desc: "RESTful APIs with JWT authentication and middleware pipeline",
                    icon: <FaServer className="text-[#B6B09F]" />
                  },
                  { 
                    layer: "Application Layer", 
                    tech: "CQRS + MediatR", 
                    desc: "Command/Query separation with handlers, DTOs, and validation",
                    icon: <FaCog className="text-[#B6B09F]" />
                  },
                  { 
                    layer: "Domain Layer", 
                    tech: "Clean Architecture", 
                    desc: "Business entities, value objects, and domain logic",
                    icon: <FaCloud className="text-[#B6B09F]" />
                  },
                  { 
                    layer: "Infrastructure Layer", 
                    tech: "Entity Framework Core", 
                    desc: "Data persistence, repositories, and external service integration",
                    icon: <FaDatabase className="text-[#B6B09F]" />
                  }
                ].map((item, index) => (
                  <div key={index} className='flex items-start space-x-6 p-6 bg-[#EAE4D5] rounded-xl border border-[#B6B09F]/20 hover:bg-[#B6B09F]/10 transition-all duration-300 relative overflow-hidden'>
                    {/* Card background */}
                    <div className='absolute top-0 right-0 w-20 h-20 bg-[#B6B09F] rounded-full opacity-5 transform translate-x-10 -translate-y-10'></div>
                    
                    <div className='text-2xl mt-1 relative z-10'>{item.icon}</div>
                    <div className='relative z-10'>
                      <h4 className='font-bold text-[#000000] mb-1 text-lg'>{item.layer}</h4>
                      <p className='font-semibold text-[#000000]/80 mb-2 text-sm'>{item.tech}</p>
                      <p className='text-[#000000]/70 font-light leading-relaxed text-sm'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative group overflow-hidden rounded-3xl'>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                alt="Technical Architecture" 
                className='w-full h-80 lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent'></div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className='mb-20 relative'>
            {/* Background pattern */}
            <div className='absolute -top-5 left-1/3 w-28 h-28 bg-[#EAE4D5] rounded-full opacity-15'></div>
            <div className='absolute -bottom-5 right-1/3 w-20 h-20 bg-[#B6B09F] transform rotate-12 opacity-20'></div>
            
            <h2 className='text-4xl lg:text-5xl font-black mb-16 text-center text-[#000000] tracking-tight'>
              Technology Stack
            </h2>
            
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {[
                { name: "ASP.NET Core", category: "Backend Framework", icon: <FaServer /> },
                { name: "Entity Framework", category: "ORM", icon: <FaDatabase /> },
                { name: "JWT Authentication", category: "Security", icon: <FaLock /> },
                { name: "RSA Encryption", category: "License Security", icon: <FaShieldAlt /> },
                { name: "TLS/SSL", category: "Data Encryption", icon: <FaLock /> },
                { name: "Redis Cache", category: "Caching", icon: <FaServer /> },
                { name: "SendGrid", category: "Email Service", icon: <FaEnvelope /> },
                { name: "RDLC Reports", category: "Report Generation", icon: <FaFileAlt /> }
              ].map((tech, index) => (
                <div key={index} className='bg-[#EAE4D5] rounded-xl p-4 border border-[#B6B09F]/20 hover:bg-[#B6B09F]/10 transition-all duration-300 text-center relative overflow-hidden'>
                  {/* Card background */}
                  <div className='absolute top-0 right-0 w-12 h-12 bg-[#B6B09F] rounded-full opacity-5 transform translate-x-6 -translate-y-6'></div>
                  
                  <div className='text-[#B6B09F] text-2xl mb-3 relative z-10'>{tech.icon}</div>
                  <h4 className='font-bold text-[#000000] mb-2 relative z-10'>{tech.name}</h4>
                  <p className='text-[#000000]/70 font-light text-sm relative z-10'>{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Gallery */}
          <div className='grid md:grid-cols-3 gap-8 mb-20 relative'>
            {/* Background elements */}
            <div className='absolute -top-8 -left-8 w-16 h-16 bg-[#EAE4D5] transform rotate-45 opacity-20'></div>
            <div className='absolute -bottom-8 -right-8 w-20 h-20 bg-[#B6B09F] rounded-full opacity-25'></div>
            
            {[
              { 
                src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", 
                title: "Financial Reporting", 
                desc: "Balance sheet, P&L, trial balance",
                icon: <FaChartLine className="text-white text-2xl" />
              },
              { 
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", 
                title: "Real-time Analytics", 
                desc: "Dashboard insights and KPI tracking",
                icon: <FaEye className="text-white text-2xl" />
              },
              { 
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", 
                title: "Multi-user Access", 
                desc: "Role-based permissions and security",
                icon: <FaUsersCog className="text-white text-2xl" />
              }
            ].map((item, index) => (
              <div key={index} className='relative group overflow-hidden rounded-2xl'>
                <img 
                  src={item.src}
                  alt={item.title}
                  className='w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent'></div>
                <div className='absolute top-6 right-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300'>
                  {item.icon}
                </div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='font-bold text-lg mb-1'>{item.title}</h4>
                  <p className='text-sm opacity-90 font-light'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className='grid md:grid-cols-4 gap-6 mb-20 relative'>
            {/* Background pattern */}
            <div className='absolute top-1/2 left-0 w-8 h-8 bg-[#EAE4D5] rounded-full opacity-30 transform -translate-x-4'></div>
            <div className='absolute top-1/2 right-0 w-6 h-6 bg-[#B6B09F] transform rotate-45 opacity-25 translate-x-3'></div>
            
            {[
              { number: "7+", label: "Core Modules" },
              { number: "4", label: "User Roles" },
              { number: "100%", label: "Secure Encryption" },
              { number: "24/7", label: "System Availability" }
            ].map((stat, index) => (
              <div key={index} className='text-center p-6 bg-[#EAE4D5] rounded-2xl border border-[#B6B09F]/20 hover:bg-[#B6B09F]/10 transition-all duration-300 relative overflow-hidden'>
                {/* Card background design */}
                <div className='absolute -top-4 -right-4 w-16 h-16 bg-[#B6B09F] rounded-full opacity-5'></div>
                <div className='absolute -bottom-2 -left-2 w-12 h-12 bg-[#B6B09F] transform rotate-45 opacity-5'></div>
                
                <div className='text-3xl lg:text-4xl font-black text-[#000000] mb-3 relative z-10'>{stat.number}</div>
                <div className='text-[#000000]/70 font-medium relative z-10'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className='text-center mt-20 p-12 bg-gradient-to-br from-[#EAE4D5] to-[#B6B09F]/50 rounded-3xl border border-[#B6B09F]/30 relative overflow-hidden'>
            {/* Background design elements */}
            <div className='absolute -top-10 -left-10 w-32 h-32 bg-[#B6B09F] rounded-full opacity-10'></div>
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-[#000000] rounded-full opacity-5'></div>
            <div className='absolute top-1/2 left-1/4 w-6 h-6 bg-[#B6B09F] transform rotate-45 opacity-20'></div>
            <div className='absolute top-1/4 right-1/4 w-4 h-4 bg-[#000000] rounded-full opacity-15'></div>
            
            <div className='relative z-10'>
              <h3 className='text-3xl lg:text-4xl font-black mb-6 text-[#000000] tracking-tight'>Ready to Streamline Your Business?</h3>
              <p className='text-[#000000]/80 mb-8 max-w-3xl mx-auto text-lg font-light leading-relaxed'>
                Experience comprehensive financial management with NexFin ERP's powerful microservices architecture, designed for scalability and security.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='px-10 py-4 bg-[#000000] hover:bg-[#000000]/90 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3'>
                  <FaPlay className="text-sm" />
                  View Live Demo
                </button>
                <button className='px-10 py-4 border-2 border-[#000000] hover:bg-[#000000] hover:text-white text-[#000000] rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3'>
                  <FaBook className="text-sm" />
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nexfin