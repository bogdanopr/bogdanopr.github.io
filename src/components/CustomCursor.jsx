import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouseX.set(clientX);
            mouseY.set(clientY);

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName)
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Main Cursor Dot - 2.6px 
                Reverted to original primary indigo color
                Direct follows (no springs) to remove elastic feel */}
            <motion.div
                className="absolute w-[2.6px] h-[2.6px] bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 3 : 1,
                }}
                transition={{ duration: 0 }}
            />
        </div>
    );
};

export default CustomCursor;
