import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
    <nav className="bg-white/20 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">MUHAMMED SHAHID</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={()=>navigate("/")} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a onClick={()=>navigate("/projects")}  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Projects
            </a>
            <a onClick={()=>navigate("/experiences")} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Experience
            </a>
         
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md border-t border-gray-200">
              <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">
                About
              </a>
              <a onClick={()=>navigate("/projects")} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">
                Projects
              </a>
              <a onClick={()=>navigate("/experiences")}  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">
                Experience
              </a>
            
            </div>
          </div>
        )}
      </div>
    </nav>

  
    </>
  );
}