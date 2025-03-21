import React, { useEffect, useRef } from 'react';
const Hero = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    });
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="home" className="min-h-screen flex flex-col justify-center relative py-20">
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div ref={textRef} className="max-w-3xl opacity-0 transition-opacity duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
            Jivy Mae
          </span>
        </h1>
        <div className="h-px w-24 bg-purple-500 mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
          Crafting digital experiences that blend creativity with cutting-edge
          technology. I specialize in creating futuristic designs that push
          boundaries and captivate audiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-purple-900/50 hover:bg-purple-800/70 border border-purple-500/50 rounded-md text-white font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] relative overflow-hidden group">
            <span className="relative z-10">View Portfolio</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button className="px-8 py-3 bg-transparent hover:bg-purple-900/20 border border-purple-500/50 rounded-md text-white font-medium transition-all duration-300 hover:border-purple-400">
            Contact Me
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-purple-400 text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;