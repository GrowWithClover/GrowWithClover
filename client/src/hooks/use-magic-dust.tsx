import { useEffect } from 'react';

export function useMagicDust() {
  useEffect(() => {
    let dustId = 0;
    let interval: number;
    
    const createDustParticle = () => {
      const dust = document.createElement('div');
      dust.className = 'magic-dust';
      dust.id = `dust-${dustId++}`;
      
      // Random horizontal position
      const leftPosition = Math.random() * 100;
      dust.style.left = `${leftPosition}%`;
      
      // Random animation duration between 3-8 seconds
      const duration = Math.random() * 5 + 3;
      dust.style.animationDuration = `${duration}s`;
      
      // Random delay to stagger particles
      const delay = Math.random() * 2;
      dust.style.animationDelay = `${delay}s`;
      
      // Random size variation
      const size = Math.random() * 2 + 2; // 2-4px
      dust.style.width = `${size}px`;
      dust.style.height = `${size}px`;
      
      document.body.appendChild(dust);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (document.getElementById(dust.id)) {
          document.body.removeChild(dust);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles at regular intervals
    interval = window.setInterval(() => {
      // Create 1-3 particles at a time
      const particleCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => createDustParticle(), i * 200); // Stagger creation
      }
    }, 800); // Create new batch every 800ms
    
    return () => {
      clearInterval(interval);
      // Clean up any remaining particles
      const particles = document.querySelectorAll('.magic-dust');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);
}