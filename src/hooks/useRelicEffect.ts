import { useState, useEffect, useCallback } from 'react';

export const useRelicEffect = () => {
    const [isMalfunctioning, setIsMalfunctioning] = useState(false);
    const [baseFrequency, setBaseFrequency] = useState('0.00001');
    const [scale, setScale] = useState(0);

    const triggerMalfunction = useCallback(() => {
        if (isMalfunctioning) return;
        setIsMalfunctioning(true);

        let frames = 0;
        const interval = setInterval(() => {
            setBaseFrequency(`${Math.random() * 0.1} ${Math.random() * 0.1}`);
            setScale(Math.random() * 100);

            frames++;
            if (frames > 40) {
                clearInterval(interval);
                setIsMalfunctioning(false);
                setBaseFrequency('0.00001');
                setScale(0);
            }
        }, 50);
    }, [isMalfunctioning]);

    const stopMalfunction = useCallback(() => {
        if (isMalfunctioning) {
            setIsMalfunctioning(false);
            setBaseFrequency('0.00001');
            setScale(0);
        }
    }, [isMalfunctioning]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMalfunctioning && Math.random() > 0.8) {
                triggerMalfunction();
            }
        }, 5000);

        const handleMouseDown = () => {
            stopMalfunction();
        };

        window.addEventListener('mousedown', handleMouseDown);
        return () => {
            clearInterval(interval);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isMalfunctioning, triggerMalfunction, stopMalfunction]);

    return { isMalfunctioning, baseFrequency, scale };
};
