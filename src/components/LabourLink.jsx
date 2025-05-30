import React from 'react'

function LabourLink() {
  return (
    <div className='bg-[#F2F2F2] min-h-screen overflow-hidden mt-12'>
      {/* Hero Section */}
      <div className='relative w-full flex flex-col lg:flex-row justify-center items-center px-6 pt-12 lg:pt-20 gap-12'>
        {/* Background Elements */}
        <div className='absolute top-10 left-10 w-32 h-32 bg-[#EAE4D5] rounded-full opacity-20 animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-24 h-24 bg-[#B6B09F] rounded-full opacity-30 animate-bounce delay-1000'></div>
        
        <div className='w-full lg:w-[55vw] flex flex-col items-center lg:items-start justify-center z-10'>
          <div className='text-center lg:text-left lg:ml-8 transform hover:scale-105 transition-transform duration-300'>
            <div className='relative'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-[#000000] leading-tight tracking-tight'>
                Labour
                <span className='block text-[#B6B09F] relative'>
                  Link
                  <div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B6B09F] to-[#EAE4D5] rounded-full'></div>
                </span>
              </h1>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-[#B6B09F] font-medium mt-6 max-w-lg'>
              Connecting Talent with Opportunity in the Modern Workforce
            </h2>
          </div>
          
          {/* Modern accent line */}
          <div className='mt-8 lg:ml-8 w-full max-w-md'>
            <div className='h-2 bg-gradient-to-r from-[#000000] via-[#B6B09F] to-[#EAE4D5] rounded-full shadow-lg'></div>
          </div>
        </div>
        
        <div className='w-full lg:w-[45vw] flex items-center justify-center px-4 z-10'>
          <div className='relative group w-full max-w-lg lg:max-w-none lg:w-[45vw] h-72 sm:h-96 lg:h-[55vh]'>
            {/* Floating background card */}
            <div className='absolute inset-0 bg-[#EAE4D5] rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500'></div>
            <div className='absolute inset-2 bg-[#000000] rounded-3xl shadow-xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500'></div>
            <img 
              src="assets/Lb01.png" 
              alt="Labour Link Platform" 
              className='relative w-full h-full object-fill rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-[#F2F2F2]' 
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative flex flex-col lg:flex-row w-full mt-20 lg:mt-32 px-6 gap-12">
        {/* Decorative elements */}
        <div className='absolute top-0 left-1/2 w-16 h-16 bg-[#B6B09F] rounded-full opacity-40 transform -translate-x-1/2 animate-pulse'></div>
        
        <div className="w-full lg:w-[50vw] flex justify-center items-center order-2 lg:order-1">
          <div className="relative group w-full max-w-lg lg:max-w-none lg:w-[45vw] h-72 sm:h-96 lg:h-[45vh]">
            {/* Modern card stack effect */}
            <div className='absolute inset-0 bg-[#B6B09F] rounded-2xl shadow-xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500'></div>
            <div className='absolute inset-1 bg-[#EAE4D5] rounded-2xl shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500'></div>
            <img 
              src="assets/Lb02.png" 
              alt="About Labour Link" 
              className="relative w-full h-full object-fill rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border-3 border-[#F2F2F2]" 
            />
          </div>
        </div>

        <div className="w-full lg:w-[50vw] flex flex-col items-center lg:items-start justify-center order-1 lg:order-2 text-center lg:text-left">
          <div className='transform hover:translate-x-2 transition-transform duration-300'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#000000] relative'>
              About Website
              <div className='absolute -bottom-2 left-0 w-1/3 h-1 bg-[#B6B09F] rounded-full'></div>
            </h1>
            <div className='bg-[#EAE4D5] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-prose'>
              <p className="text-lg sm:text-xl leading-relaxed text-[#000000] font-medium">
                Labour Link revolutionizes workforce connections through intelligent matching and seamless communication. We bridge the gap between skilled professionals and forward-thinking employers.
              </p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <span className='px-4 py-2 bg-[#B6B09F] text-[#F2F2F2] rounded-full text-sm font-medium'>Smart Matching</span>
                <span className='px-4 py-2 bg-[#000000] text-[#F2F2F2] rounded-full text-sm font-medium'>Verified Profiles</span>
                <span className='px-4 py-2 bg-[#B6B09F] text-[#F2F2F2] rounded-full text-sm font-medium'>Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative flex flex-col lg:flex-row w-full mt-20 lg:mt-32 px-6 gap-12 pb-20">
        {/* Background accent */}
        <div className='absolute bottom-10 right-10 w-40 h-40 bg-[#EAE4D5] rounded-full opacity-20 animate-pulse delay-500'></div>
        
        <div className="w-full lg:w-[50vw] flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className='transform hover:translate-x-2 transition-transform duration-300'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#000000] relative'>
              Technologies
              <div className='absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#000000] to-[#B6B09F] rounded-full'></div>
            </h1>
            <div className='bg-[#000000] p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-prose'>
              <p className="text-lg sm:text-xl leading-relaxed text-[#F2F2F2] font-medium mb-6">
                Smart. Scalable. Secure. Labour Link connects laborers and employers through a robust microservice-powered platform
              </p>
              
              {/* Feature highlights */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-[#B6B09F] p-4 rounded-xl'>
                  <h3 className='font-bold text-[#F2F2F2] text-sm mb-1'>ASP.NET Core</h3>
                  <p className='text-[#F2F2F2] text-xs opacity-90'>Backend logic and APIs</p>
                </div>
                <div className='bg-[#EAE4D5] p-4 rounded-xl'>
                  <h3 className='font-bold text-[#000000] text-sm mb-1'>Microservices</h3>
                  <p className='text-[#000000] text-xs opacity-70'>Modular, scalable architecture</p>
                </div>
                <div className='bg-[#EAE4D5] p-4 rounded-xl'>
                  <h3 className='font-bold text-[#000000] text-sm mb-1'>RabbitMQ </h3>
                  <p className='text-[#000000] text-xs opacity-70'>For real-time messaging and decoupled services</p>
                </div>
                <div className='bg-[#B6B09F] p-4 rounded-xl'>
                  <h3 className='font-bold text-[#F2F2F2] text-sm mb-1'>Docker </h3>
                  <p className='text-[#F2F2F2] text-xs opacity-90'> Containerized deployment</p>
                </div>
                   <div className='bg-[#B6B09F] p-4 rounded-xl'>
                  <h3 className='font-bold text-[#F2F2F2] text-sm mb-1'>Azure</h3>
                  <p className='text-[#F2F2F2] text-xs opacity-90'>Secure, cloud-native infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50vw] flex justify-center items-center">
          <div className="relative group w-full max-w-lg lg:max-w-none lg:w-[45vw] h-72 sm:h-96 lg:h-[50vh]">
            {/* Modern layered effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#000000] to-[#B6B09F] rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-500'></div>
            <div className='absolute inset-2 bg-[#EAE4D5] rounded-3xl shadow-xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500'></div>
            <img 
              src="assets/Lb03.png" 
              alt="Labour Link Features" 
              className="relative w-full h-full object-fill rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-[#F2F2F2]" 
            />
            
            {/* Floating action button */}
            <div className='absolute bottom-6 right-6 w-16 h-16 bg-[#000000] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300'>
              <div className='w-6 h-6 border-2 border-[#F2F2F2] rounded-full flex items-center justify-center'>
                <div className='w-0 h-0 border-l-[6px] border-l-[#F2F2F2] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabourLink