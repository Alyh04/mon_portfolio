"use client";

import { useEffect, useRef } from "react";

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let shootingStars: ShootingStar[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const spawnShootingStar = () => {
      const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.3;
      shootingStars.push({
        x: Math.random() * width * 0.9 + width * 0.05,
        y: Math.random() * height * 0.35,
        length: Math.random() * 150 + 80,
        speed: Math.random() * 15 + 10,
        angle,
        alpha: 1,
        life: 0,
        maxLife: 30 + Math.random() * 25,
      });
    };

    resize();
    window.addEventListener("resize", resize);

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      if (frameCount % 50 === 0 && Math.random() < 0.75) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;

        const progress = s.life / s.maxLife;
        s.alpha = 1 - progress * progress;

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const trailX = s.x - Math.cos(s.angle) * s.length;
        const trailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, trailX, trailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha * 0.95})`);
        grad.addColorStop(0.15, `rgba(210, 225, 255, ${s.alpha * 0.5})`);
        grad.addColorStop(0.5, `rgba(180, 200, 255, ${s.alpha * 0.15})`);
        grad.addColorStop(1, "rgba(180, 200, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(1.5, s.alpha * 3);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(trailX, trailY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.15})`;
        ctx.fill();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
