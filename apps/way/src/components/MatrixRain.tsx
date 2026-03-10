'use client';

import { useEffect, useRef } from 'react';

const CHAR_SET = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFWAIWAY';
const FONT_SIZE = 14;
const DROP_SPEED = 0.6;
const FADE_ALPHA = 0.04;
const BG_COLOR = 'rgba(13, 18, 8, '; // dark green (#0d1208)
const COLOR = '#00ff41';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let alive = true;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };

    const draw = () => {
      if (!alive) return;

      ctx.fillStyle = `${BG_COLOR}${FADE_ALPHA})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = COLOR;
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i += 2) {
        const char = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.globalAlpha = 1;
        ctx.fillText(char, x, y);

        ctx.globalAlpha = 0.3;
        ctx.fillText(CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)], x, y - FONT_SIZE);

        ctx.globalAlpha = 1;

        drops[i] += DROP_SPEED;

        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    // Fill black immediately so no white flash before rain starts
    ctx.fillStyle = '#0d1208';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();

    window.addEventListener('resize', resize);

    return () => {
      alive = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4,
      }}
    />
  );
}
