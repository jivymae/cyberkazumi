import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    // Custom shader material for glowing particles
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 2.0;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          vec3 color = mix(vec3(0.4, 0.2, 0.9), vec3(0.8, 0.3, 1.0), vPosition.z * 0.5 + 0.5);
          gl_FragColor = vec4(color, strength * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 3;
    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX / window.innerWidth * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', onMouseMove);
    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      // Rotate particles
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;
      // React to mouse movement
      particlesMesh.rotation.x += mousePosition.current.y * 0.0003;
      particlesMesh.rotation.y += mousePosition.current.x * 0.0003;
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="fixed inset-0 z-0" style={{
    opacity: 0.6
  }} />;
};
export default AnimatedBackground;