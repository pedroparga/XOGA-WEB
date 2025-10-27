/**
 * XOGA Interactive Neon
 * Optimizado para Cloudflare Pages
 * - Pelotas físicas con colisiones y arrastre táctil/ratón
 * - Fondo neón fijo
 */

window.onload = () => {
  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d');

  // --- CONFIGURACIÓN ---
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const EMOJIS = ["⚽️", "🏀", "🎾", "🏐"];
  const GRAVITY = 0.25;
  const BOUNCE = 0.9;
  const FRICTION = 0.98;
  const BALL_SIZE = 70;

  class Ball {
    constructor(emoji) {
      this.emoji = emoji;
      this.reset();
    }

    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 6;
      this.vy = (Math.random() - 0.5) * 6;
      this.dragging = false;
      this.offsetX = 0;
      this.offsetY = 0;
    }

    applyPhysics() {
      if (!this.dragging) {
        this.vy += GRAVITY;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    bounceEdges() {
      const r = BALL_SIZE / 2;
      if (this.x + r > W) { this.x = W - r; this.vx *= -BOUNCE; }
      else if (this.x - r < 0) { this.x = r; this.vx *= -BOUNCE; }

      if (this.y + r > H) {
        this.y = H - r;
        this.vy *= -BOUNCE;
        this.vx *= FRICTION;
      } else if (this.y - r < 0) {
        this.y = r;
        this.vy *= -BOUNCE;
      }
    }

    draw(ctx) {
      ctx.font = `${BALL_SIZE}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.emoji, this.x, this.y);
    }
  }

  const balls = EMOJIS.map(e => new Ball(e));

  // --- INTERACCIÓN ---
  let draggingBall = null;
  let lastPos = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };

  function startDrag(x, y) {
    for (const b of balls) {
      const dx = x - b.x, dy = y - b.y;
      if (Math.hypot(dx, dy) < BALL_SIZE / 2) {
        draggingBall = b;
        b.dragging = true;
        b.offsetX = dx;
        b.offsetY = dy;
        break;
      }
    }
  }

  function moveDrag(x, y) {
    if (draggingBall) {
      draggingBall.x = x - draggingBall.offsetX;
      draggingBall.y = y - draggingBall.offsetY;
    }
    vel.x = x - lastPos.x;
    vel.y = y - lastPos.y;
    lastPos = { x, y };
  }

  function endDrag() {
    if (draggingBall) {
      draggingBall.vx = vel.x * 0.4;
      draggingBall.vy = vel.y * 0.4;
      draggingBall.dragging = false;
      draggingBall = null;
    }
  }

  // --- EVENTOS DE INTERACCIÓN ---
  const events = [
    ["mousedown", e => startDrag(e.clientX, e.clientY)],
    ["mousemove", e => moveDrag(e.clientX, e.clientY)],
    ["mouseup", endDrag],
    ["touchstart", e => { const t = e.touches[0]; startDrag(t.clientX, t.clientY); }],
    ["touchmove", e => { const t = e.touches[0]; moveDrag(t.clientX, t.clientY); }],
    ["touchend", endDrag]
  ];
  events.forEach(([evt, fn]) => canvas.addEventListener(evt, fn, { passive: true }));

  // --- COLISIONES ENTRE PELOTAS ---
  function collide(b1, b2) {
    const dx = b2.x - b1.x;
    const dy = b2.y - b1.y;
    const dist = Math.hypot(dx, dy);
    const minDist = BALL_SIZE;
    if (dist < minDist) {
      const nx = dx / dist;
      const ny = dy / dist;
      const overlap = (minDist - dist) / 2;

      b1.x -= nx * overlap;
      b1.y -= ny * overlap;
      b2.x += nx * overlap;
      b2.y += ny * overlap;

      const p = (b1.vx * nx + b1.vy * ny) - (b2.vx * nx + b2.vy * ny);
      b1.vx -= p * nx;
      b1.vy -= p * ny;
      b2.vx += p * nx;
      b2.vy += p * ny;
    }
  }

  // --- LOOP PRINCIPAL ---
  function animate() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      b.applyPhysics();
      b.bounceEdges();

      for (let j = i + 1; j < balls.length; j++) {
        collide(b, balls[j]);
      }

      b.draw(ctx);
    }

    requestAnimationFrame(animate);
  }

  // --- RESIZE ---
  window.addEventListener("resize", () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });

  // --- START ---
  animate();
};
