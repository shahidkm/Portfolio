import React from 'react';
import { Code, Database, Server, Globe, Smartphone, Brain } from 'lucide-react';

function Skills() {
  const skills = [
    {
      name: 'C#',
      percentage: 80,
      icon: Code
    },
    {
      name: 'ASP.NET',
      percentage: 90,
      icon: Server
    },
    {
      name: 'Entity Framework',
      percentage: 85,
      icon: Database
    },
    {
      name: 'JavaScript',
      percentage: 75,
      icon: Globe
    },
    {
      name: 'React',
      percentage: 70,
      icon: Smartphone
    },
    {
      name: 'SQL',
      percentage: 85,
      icon: Brain
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here's a breakdown of my technical expertise and proficiency levels
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {skill.name}
                  </h3>
                  <span className="text-2xl font-bold text-gray-800">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gray-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.percentage}%`,
                    animation: `fillProgress 2s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>

              {/* Skill Level Text */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Proficiency</span>
                <span className="font-medium">
                  {skill.percentage >= 90 ? 'Expert' : 
                   skill.percentage >= 80 ? 'Advanced' : 
                   skill.percentage >= 70 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: ${skills.map(s => s.percentage).join('%, ')}%;
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;