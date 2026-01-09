import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const particles = [];
        const particleCount = 200; // Final count requested
        const mouse = { x: -1000, y: -1000 };
        const interactionRadius = 400;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.baseX = this.x;
                this.baseY = this.y;

                // Random drift speed
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;

                this.size = 1 + Math.random() * 2;
                this.density = (Math.random() * 15) + 1;
            }

            update() {
                // Return to base position with spring-like force
                const dxBase = this.baseX - this.x;
                const dyBase = this.baseY - this.y;
                this.x += dxBase * 0.05; // Faster return force
                this.y += dyBase * 0.05;

                // Natural drift
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    const directionX = (dx / distance) * force * this.density;
                    const directionY = (dy / distance) * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            draw() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Brighten near mouse
                const opacity = Math.max(0.1, 1 - distance / interactionRadius);

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.fill();

                // Draw faint connecting lines between nearby particles
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Clear with slight trail effect
            ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#0f172a]"
        />
    );
};

export default InteractiveBackground;
