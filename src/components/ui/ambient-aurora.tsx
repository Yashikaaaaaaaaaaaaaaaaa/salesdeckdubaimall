"use client"

import React, { useRef, useEffect } from 'react';

interface Orb {
    x: number;
    y: number;
    radius: number;
    color: { r: number; g: number; b: number };
    vx: number;
    vy: number;
    draw: (ctx: CanvasRenderingContext2D, time: number) => void;
    update: (canvas: HTMLCanvasElement, time: number) => void;
}

const AuroraCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        let animationFrameId: number;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Refined luxury colors: deeper, less saturated
        const colors = [
            { r: 20, g: 80, b: 70 },   // Deep Teal
            { r: 60, g: 30, b: 90 },   // Deep Purple
            { r: 20, g: 45, b: 85 },   // Deep Blue
            { r: 85, g: 25, b: 55 }    // Deep Maroon/Pink
        ];

        class OrbImpl implements Orb {
            x: number;
            y: number;
            radius: number;
            color: { r: number; g: number; b: number };
            vx: number;
            vy: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.radius = Math.random() * 800 + 400; // Larger for fluffier feel
                this.color = colors[Math.floor(Math.random() * colors.length)];
                // Extremely slow drift as requested
                this.vx = (Math.random() - 0.5) * 0.1;
                this.vy = (Math.random() - 0.5) * 0.1;
            }

            draw(ctx: CanvasRenderingContext2D, time: number) {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                // Lower opacity for subtle effect
                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.15)`);
                gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update(canvas: HTMLCanvasElement, time: number) {
                // Subtle sine wave motion for "living" feel
                this.x += this.vx + Math.sin(time * 0.0005) * 0.1;
                this.y += this.vy + Math.cos(time * 0.0005) * 0.1;

                // Loop back orbs when they go too far
                const margin = this.radius;
                if (this.x < -margin) this.x = canvas.width / (window.devicePixelRatio || 1) + margin;
                if (this.x > canvas.width / (window.devicePixelRatio || 1) + margin) this.x = -margin;
                if (this.y < -margin) this.y = canvas.height / (window.devicePixelRatio || 1) + margin;
                if (this.y > canvas.height / (window.devicePixelRatio || 1) + margin) this.y = -margin;
            }
        }

        let orbs: OrbImpl[] = [];
        const orbCount = 8;
        for (let i = 0; i < orbCount; i++) {
            orbs.push(new OrbImpl(canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1)));
        }

        function animate() {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            time++;

            orbs.forEach(orb => {
                orb.update(canvas, time);
                orb.draw(ctx!, time);
            });

            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="block w-full h-full opacity-60 pointer-events-none" />;
};

export default AuroraCanvas;
