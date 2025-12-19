import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onLoadComplete }) => {
    const loaderRef = useRef(null);

    useEffect(() => {
        const loader = loaderRef.current;

        // Simulate load
        // In a real app we might wait for something, but here we just replicate the timeout

        gsap.to(loader, {
            width: "100%",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(loader, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.2, // slight pause
                    onComplete: () => {
                        if (onLoadComplete) onLoadComplete();
                    }
                });
            }
        });

    }, [onLoadComplete]);

    return (
        <div className="loader-line" ref={loaderRef} style={{ width: '0%' }}></div>
    );
};

export default Loader;
