"use client"
import React, { useState, useEffect } from 'react';

const TitanTechnologiesLanding = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }>>([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 250; i++) {
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

      {/* Logo in top left */}
      <div className="absolute top-12 left-12 z-20">
        <img 
          src="/titan.png" 
          alt="Titan Technologies Logo" 
          className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

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
              <span className="block text-gray-300">being crafted</span>
            </h2>
          
          </div>

     

          {/* Call to Action */}
          <div className="space-y-8 pt-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group cursor-pointer hover:border-white hover:border-2 hover:bg-black hover:text-white px-8 py-3 bg-white text-black font-medium tracking-wide transition-all duration-300 text-sm">
                GET NOTIFIED
              </button>
              
            
            </div>
            
            {/* <p className="text-xs text-gray-600 tracking-wider">
              COMING SOON
            </p> */}
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