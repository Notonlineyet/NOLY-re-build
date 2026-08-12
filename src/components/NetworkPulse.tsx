"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  glow: number;
};

type Pulse = {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
};

const NODE_COUNT = 46;
const LINK_DISTANCE = 170;
const PULSE_SPAWN_CHANCE = 0.018;

export function NetworkPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let frame = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        glow: 0,
      }));
      pulses = [];
    }

    function neighbors(index: number) {
      const result: number[] = [];
      const a = nodes[index];
      for (let i = 0; i < nodes.length; i++) {
        if (i === index) continue;
        const b = nodes[i];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DISTANCE) result.push(i);
      }
      return result;
    }

    function step() {
      frame++;
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.glow = Math.max(0, n.glow - 0.02);
      }

      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DISTANCE) {
            const alpha = (1 - d / LINK_DISTANCE) * 0.14;
            ctx!.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      if (!reduceMotion && Math.random() < PULSE_SPAWN_CHANCE) {
        const fromIndex = Math.floor(Math.random() * nodes.length);
        const options = neighbors(fromIndex);
        if (options.length > 0) {
          const toIndex = options[Math.floor(Math.random() * options.length)];
          pulses.push({
            fromIndex,
            toIndex,
            progress: 0,
            speed: 0.012 + Math.random() * 0.01,
          });
        }
      }

      pulses = pulses.filter((p) => p.progress < 1);
      for (const p of pulses) {
        p.progress += p.speed;
        const a = nodes[p.fromIndex];
        const b = nodes[p.toIndex];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.progress;
        const y = a.y + (b.y - a.y) * p.progress;

        const grad = ctx!.createRadialGradient(x, y, 0, x, y, 5);
        grad.addColorStop(0, "rgba(165, 232, 255, 0.95)");
        grad.addColorStop(1, "rgba(165, 232, 255, 0)");
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(x, y, 5, 0, Math.PI * 2);
        ctx!.fill();

        if (p.progress >= 1) {
          nodes[p.toIndex].glow = 1;
        }
      }

      for (const n of nodes) {
        const baseAlpha = 0.35;
        ctx!.fillStyle = `rgba(148, 197, 220, ${baseAlpha})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx!.fill();

        if (n.glow > 0) {
          const grad = ctx!.createRadialGradient(
            n.x,
            n.y,
            0,
            n.x,
            n.y,
            14 * n.glow + 2
          );
          grad.addColorStop(0, `rgba(165, 232, 255, ${0.55 * n.glow})`);
          grad.addColorStop(1, "rgba(165, 232, 255, 0)");
          ctx!.fillStyle = grad;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, 14 * n.glow + 2, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    resize();
    seed();
    step();

    let raf = 0;
    function loop() {
      step();
      raf = requestAnimationFrame(loop);
    }
    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
    }

    function onResize() {
      resize();
      seed();
      step();
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
