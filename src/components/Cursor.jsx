import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const Cursor = () => {
    const [isPointer, setIsPointer] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for the cursor dot
    const dotX = useSpring(mouseX, { stiffness: 500, damping: 28 })
    const dotY = useSpring(mouseY, { stiffness: 500, damping: 28 })

    // Smooth springs for the large glow (slower for that "fluid" feel)
    const glowX = useSpring(mouseX, { stiffness: 100, damping: 20 })
    const glowY = useSpring(mouseY, { stiffness: 100, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            const target = e.target
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            )
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <>
            {/* Large Spotlight Glow */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
                }}
            />

            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isPointer ? 3 : 1,
                    opacity: 1,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    opacity: isPointer ? 0.3 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            />
        </>
    )
}

export default Cursor
