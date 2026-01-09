import React, { useEffect, useRef } from 'react';

const VortexBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const particles = [];
        const particleCount = 1500;
        const lightRadius = 180;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                // Position particles in a large circle around a central vortex point (off-center like the original)
                const centerX = canvas.width * 0.7;
                const centerY = canvas.height * 0.4;
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * Math.max(canvas.width, canvas.height);

                this.x = centerX + Math.cos(angle) * radius;
                this.y = centerY + Math.sin(angle) * radius;

                this.baseX = this.x;
                this.baseY = this.y;

                // Motion properties
                this.angle = angle;
                this.radius = radius;
                this.speed = 0.001 + Math.random() * 0.002;
                this.size = 1 + Math.random() * 2;
                this.length = 5 + Math.random() * 10;
            }

            update() {
                // Swirl around the vortex point
                this.angle += this.speed;
                const centerX = canvas.width * 0.7;
                const centerY = canvas.height * 0.4;

                this.x = centerX + Math.cos(this.angle) * this.radius;
                this.y = centerY + Math.sin(this.angle) * this.radius;

                // Interaction: mouse spotlight
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                this.opacity = Math.max(0, 1 - distance / lightRadius);
            }

            draw() {
                if (this.opacity <= 0) return;

                ctx.beginPath();
                ctx.strokeStyle = `rgba(139, 92, 246, ${this.opacity * 0.6})`; // Indigo/Violet color
                ctx.lineWidth = this.size;

                // Draw as a dash (oriented along it's movement path)
                const cos = Math.cos(this.angle + Math.PI / 2);
                const sin = Math.sin(this.angle + Math.PI / 2);

                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + cos * this.length, this.y + sin * this.length);
                ctx.stroke();
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default VortexBackground;
