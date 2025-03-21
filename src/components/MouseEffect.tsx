import React, { useEffect, useRef } from 'react';
const MouseEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({
    x: 0,
    y: 0
  });
  const currentPosition = useRef({
    x: 0,
    y: 0
  });
  const isVisible = useRef(false);
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;
    if (!cursor || !cursorOuter) return;
    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
      if (!isVisible.current) {
        isVisible.current = true;
        cursor.style.opacity = '1';
        cursorOuter.style.opacity = '1';
      }
    };
    const onMouseLeave = () => {
      isVisible.current = false;
      cursor.style.opacity = '0';
      cursorOuter.style.opacity = '0';
    };
    const animate = () => {
      // Smooth animation for cursor position
      const easing = 0.2;
      currentPosition.current = {
        x: currentPosition.current.x + (mousePosition.current.x - currentPosition.current.x) * easing,
        y: currentPosition.current.y + (mousePosition.current.y - currentPosition.current.y) * easing
      };
      // Update cursor position
      cursor.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
      cursorOuter.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
      requestAnimationFrame(animate);
    };
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    // Start animation
    animate();
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);
  return <>
      {/* Inner cursor */}
      <div ref={cursorRef} className="fixed pointer-events-none z-50 w-2 h-2 bg-purple-500 rounded-full opacity-0 transition-opacity duration-300" style={{
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1)'
    }} />
      {/* Outer cursor */}
      <div ref={cursorOuterRef} className="fixed pointer-events-none z-50 w-8 h-8 rounded-full opacity-0 transition-opacity duration-300" style={{
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
      backdropFilter: 'blur(2px)'
    }} />
    </>;
};
export default MouseEffect;