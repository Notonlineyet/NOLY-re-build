"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  bornAt: number;
};

const LIFETIME_MS = 650;
const MIN_DISTANCE = 6;
const MAX_POINTS = 80;

export function PointerTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let last: { x: number; y: number } | null = null;
    let raf = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function addPoint(x: number, y: number) {
      if (last) {
        const d = Math.hypot(x - last.x, y - last.y);
        if (d < MIN_DISTANCE) return;
      }
      last = { x, y };
      points.push({ x, y, bornAt: performance.now() });
      if (points.length > MAX_POINTS) points.shift();
    }

    function onPointerMove(event: PointerEvent) {
      addPoint(event.clientX, event.clientY);
    }

    function onPointerLeave() {
      last = null;
    }

    function draw() {
      const now = performance.now();
      ctx!.clearRect(0, 0, width, height);

      points = points.filter((p) => now - p.bornAt < LIFETIME_MS);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const age = (now - p.bornAt) / LIFETIME_MS;
        const alpha = (1 - age) * 0.5;
        const radius = 5 * (1 - age) + 1.5;

        const grad = ctx!.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          radius
        );
        grad.addColorStop(0, `rgba(125, 211, 252, ${alpha})`);
        grad.addColorStop(1, "rgba(125, 211, 252, 0)");
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (points.length > 1) {
        ctx!.lineWidth = 1.5;
        ctx!.strokeStyle = "rgba(125, 211, 252, 0.18)";
        ctx!.beginPath();
        ctx!.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx!.lineTo(points[i].x, points[i].y);
        }
        ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointercancel", onPointerLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointercancel", onPointerLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[999]"
    />
  );
}
