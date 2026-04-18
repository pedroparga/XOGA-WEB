"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
};

export default function EmojiMesh({
  className,
  density,
  emojis,
  emojiSize,
  maxSpeed
}: {
  className: string;
  density: number;
  emojis: string[];
  emojiSize: number;
  maxSpeed: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");

    if (!canvas || !parent || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let lastTime = performance.now();

    const resize = () => {
      width = parent.offsetWidth || window.innerWidth;
      height = parent.offsetHeight || window.innerHeight;
      canvas.width = Math.max(1, width);
      canvas.height = Math.max(1, height);
      const count = Math.max(12, Math.round((width * height) / density));
      points = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        emoji: emojis[index % emojis.length]
      }));
    };

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.6667, 2);
      lastTime = now;
      context.clearRect(0, 0, width, height);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = `${emojiSize}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;

      const radius = Math.max(6, emojiSize / 2);
      for (const point of points) {
        point.x += point.vx * dt;
        point.y += point.vy * dt;

        if (point.x < radius) {
          point.x = radius;
          point.vx = Math.abs(point.vx);
        }
        if (point.x > width - radius) {
          point.x = width - radius;
          point.vx = -Math.abs(point.vx);
        }
        if (point.y < radius) {
          point.y = radius;
          point.vy = Math.abs(point.vy);
        }
        if (point.y > height - radius) {
          point.y = height - radius;
          point.vy = -Math.abs(point.vy);
        }

        context.globalAlpha = 0.5;
        context.fillText(point.emoji, point.x, point.y);
        context.globalAlpha = 1;
      }

      frameRef.current = window.requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);
    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [density, emojiSize, emojis, maxSpeed]);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}
