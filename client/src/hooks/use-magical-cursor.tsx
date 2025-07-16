import { useEffect } from 'react';

export function useMagicalCursor() {
  useEffect(() => {
    let particleId = 0;
    
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'magical-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.id = `particle-${particleId++}`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (document.getElementById(particle.id)) {
          document.body.removeChild(particle);
        }
      }, 2000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create multiple particles with higher frequency
      if (Math.random() < 0.8) { // 80% chance to create particles
        const particleCount = Math.floor(Math.random() * 3) + 1; // Create 1-3 particles
        
        for (let i = 0; i < particleCount; i++) {
          const offsetX = (Math.random() - 0.5) * 15; // Random offset between -7.5 and 7.5
          const offsetY = (Math.random() - 0.5) * 15;
          createParticle(e.clientX + offsetX, e.clientY + offsetY);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining particles
      const particles = document.querySelectorAll('.magical-particle');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);
}