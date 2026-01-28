// Simple emoji mesh background with smooth motion.

function createEmojiMesh(container, options) {
  if (!container) return;

  var opts = options || {};
  var EMOJIS = opts.emojis || ["\u26BD\uFE0F", "\uD83C\uDFC0", "\uD83C\uDFBE", "\uD83C\uDFC8"];

  var canvas = document.createElement('canvas');
  canvas.className = 'pg-canvas';
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var W = 0;
  var H = 0;
  var points = [];
  var mouse = { x: -9999, y: -9999 };

  function resize() {
    W = container.offsetWidth || window.innerWidth;
    H = container.offsetHeight || window.innerHeight;
    canvas.width = Math.max(1, W);
    canvas.height = Math.max(1, H);
    buildPoints();
  }

  function buildPoints() {
    var count = Math.max(12, Math.round((W * H) / opts.density));
    points = [];
    for (var i = 0; i < count; i++) {
      points.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * opts.maxSpeed,
        vy: (Math.random() - 0.5) * opts.maxSpeed,
        emoji: EMOJIS[i % EMOJIS.length]
      });
    }
  }

  function applyMouseForce(p) {
    if (!opts.interactive) return;
    var dx = mouse.x - p.x;
    var dy = mouse.y - p.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 0 && dist < opts.mouseRadius) {
      p.vx -= (dx / dist) * opts.mouseForce;
      p.vy -= (dy / dist) * opts.mouseForce;
    }
  }

  var lastTime = performance.now();
  function step(now) {
    var dt = Math.min((now - lastTime) / 16.6667, 2);
    lastTime = now;
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = opts.emojiSize + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";

    var boundsR = Math.max(6, (opts.emojiSize / 2));
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      applyMouseForce(p);
      p.vx *= opts.damping;
      p.vy *= opts.damping;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.x < boundsR) { p.x = boundsR; p.vx = Math.abs(p.vx); }
      if (p.x > W - boundsR) { p.x = W - boundsR; p.vx = -Math.abs(p.vx); }
      if (p.y < boundsR) { p.y = boundsR; p.vy = Math.abs(p.vy); }
      if (p.y > H - boundsR) { p.y = H - boundsR; p.vy = -Math.abs(p.vy); }
      ctx.fillStyle = opts.dotColor;
      ctx.globalAlpha = opts.iconOpacity;
      ctx.fillText(p.emoji, p.x, p.y);
      ctx.globalAlpha = 1;
    }

    if (opts.drawLines) for (var a = 0; a < points.length; a++) {
      for (var b = a + 1; b < points.length; b++) {
        var p1 = points[a];
        var p2 = points[b];
        var lx = p1.x - p2.x;
        var ly = p1.y - p2.y;
        var d = Math.sqrt(lx * lx + ly * ly);
        if (d < opts.proximity) {
          var alpha = 1 - d / opts.proximity;
          ctx.strokeStyle = opts.lineColor.replace('ALPHA', alpha.toFixed(3));
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  if (opts.interactive) {
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  }

  resize();
  requestAnimationFrame(step);
}

createEmojiMesh(document.getElementById('ticker-icons'), {
  dotColor: 'rgba(255, 255, 255, 1)',
  iconOpacity: 0.5,
  lineColor: 'rgba(255, 255, 255, ALPHA)',
  density: 30000,
  proximity: 160,
  maxSpeed: 0.4,
  emojiSize: 16,
  mouseRadius: 220,
  mouseForce: 0.02,
  interactive: false,
  drawLines: false,
  damping: 1
});

var sportsBgs = document.querySelectorAll('.sports-bg');
for (var i = 0; i < sportsBgs.length; i++) {
  var el = sportsBgs[i];
  var emoji = el.getAttribute('data-emoji') || "\u26BD\uFE0F";
  createEmojiMesh(el, {
    emojis: [emoji],
    dotColor: 'rgba(255, 255, 255, 1)',
    iconOpacity: 0.6,
    lineColor: 'rgba(255, 255, 255, ALPHA)',
    density: 24000,
    proximity: 140,
    maxSpeed: 0.25,
    emojiSize: 20,
    mouseRadius: 180,
    mouseForce: 0.01,
    interactive: false,
    drawLines: false,
    damping: 1
  });
}
