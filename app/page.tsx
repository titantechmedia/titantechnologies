"use client"
import React, { useState, useEffect } from 'react';

const TitanTechnologiesLanding = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }>>([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);
  

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite, drift ${20 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-wider text-white">
              TITAN
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-400 font-light tracking-[0.2em]">
              TECHNOLOGIES
            </p>
          </div>

          {/* Main Message */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed">
              Something extraordinary is
              <span className="block text-gray-300 mt-2">being crafted</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            We are building the future of personal finance. Intelligent solutions that redefine how people manage, grow, and secure their money
            </p>
          </div>

     

          {/* Call to Action */}
          <div className="space-y-8 pt-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-3 bg-white text-black font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 text-sm">
                GET NOTIFIED
              </button>
              
              <a 
                href="https://titantechinvestments.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-3 border border-gray-600 text-white font-medium tracking-wide hover:border-gray-400 transition-all duration-300 text-sm"
              >
                EXPLORE INVESTMENTS
              </a>
            </div>
            
            <p className="text-xs text-gray-600 tracking-wider">
              COMING SOON
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(-5px) translateY(-20px); }
          75% { transform: translateX(-10px) translateY(-10px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default TitanTechnologiesLanding;