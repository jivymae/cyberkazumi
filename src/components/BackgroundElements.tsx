import React from 'react';
import AnimatedBackground from './AnimatedBackground';
const BackgroundElements = () => {
  return <div className="fixed inset-0 z-0 overflow-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
        backgroundImage: 'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>
      </div>
      {/* Diagonal lines */}
      <div className="absolute right-0 top-0 h-screen w-1/3">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute left-0 top-2/4 h-px w-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-purple-600/40 to-transparent"></div>
      </div>
    </div>;
};
export default BackgroundElements;