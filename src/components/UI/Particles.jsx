import React, { useEffect, useRef } from 'react';

const Particles = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const particleCount = 30;

        // Clear existing particles if any (though usually react handles this via mount/unmount)
        container.innerHTML = '';

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = 100 + Math.random() * 20 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = 15 + Math.random() * 20 + 's';
            particle.style.width = 1 + Math.random() * 2 + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" ref={containerRef}></div>
    );
};

export default Particles;
