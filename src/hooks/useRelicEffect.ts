import { useState, useEffect, useCallback } from 'react';

export const useRelicEffect = () => {
    const [isMalfunctioning, setIsMalfunctioning] = useState(false);
    const [glitchFrequency, setGlitchFrequency] = useState('0.00001');
    const [glitchScale, setGlitchScale] = useState(0);

    const triggerSystemMalfunction = useCallback(() => {
        if (isMalfunctioning) return;
        setIsMalfunctioning(true);

        let animationFrameCount = 0;
        // Keep original setInterval for 1:1 visual parity as per requirements
        const isMobile = window.innerWidth <= 768;
        const malfunctionInterval = setInterval(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (prefersReducedMotion) {
                clearInterval(malfunctionInterval);
                setIsMalfunctioning(false);
                return;
            }

            setGlitchFrequency(`${Math.random() * 0.1} ${Math.random() * 0.1}`);
            setGlitchScale(Math.random() * (isMobile ? 30 : 100));

            animationFrameCount++;
            if (animationFrameCount > (isMobile ? 20 : 40)) {
                clearInterval(malfunctionInterval);
                setIsMalfunctioning(false);
                setGlitchFrequency('0.00001');
                setGlitchScale(0);
            }
        }, isMobile ? 100 : 50);
    }, [isMalfunctioning]);

    const stopSystemMalfunction = useCallback(() => {
        if (isMalfunctioning) {
            setIsMalfunctioning(false);
            setGlitchFrequency('0.00001');
            setGlitchScale(0);
        }
    }, [isMalfunctioning]);

    useEffect(() => {
        const autoTriggerInterval = setInterval(() => {
            if (!isMalfunctioning && Math.random() > 0.8) {
                triggerSystemMalfunction();
            }
        }, 5000);

        const handleGlobalClick = () => {
            stopSystemMalfunction();
        };

        window.addEventListener('mousedown', handleGlobalClick);
        return () => {
            clearInterval(autoTriggerInterval);
            window.removeEventListener('mousedown', handleGlobalClick);
        };
    }, [isMalfunctioning, triggerSystemMalfunction, stopSystemMalfunction]);

    return {
        isMalfunctioning,
        baseFrequency: glitchFrequency,
        scale: glitchScale
    };
};
