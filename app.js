'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let width = 0, height = 0, angle = 0, pointerX = 0, pointerY = 0, frame;
const points = [];
// A Fibonacci lattice keeps the neural globe evenly distributed in 3D.
for (let i = 0; i < 210; i++) {
  const y = 1 - (i / 209) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = Math.PI * (3 - Math.sqrt(5)) * i;
  points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
}
const edges = [];
points.forEach((a, i) => points.slice(i + 1).forEach((b, j) => {
  if (Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 0.32) edges.push([i, i + j + 1]);
}));
function resize() {
  const rect = canvas.getBoundingClientRect();
  width = rect.width; height = rect.height;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr; canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (reducedMotion.matches) draw();
}
function draw() {
  ctx.clearRect(0, 0, width, height);
  const radius = Math.min(width * 0.40, height * 0.36);
  const cx = width * 0.51, cy = height * 0.48;
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.45);
  glow.addColorStop(0, 'rgba(137,206,83,.09)'); glow.addColorStop(1, 'rgba(137,206,83,0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
  const ry = angle + pointerX * .3, rx = -.18 + pointerY * .22;
  const projected = points.map(p => {
    const x = p.x * Math.cos(ry) + p.z * Math.sin(ry);
    const z0 = p.z * Math.cos(ry) - p.x * Math.sin(ry);
    const y = p.y * Math.cos(rx) - z0 * Math.sin(rx);
    const z = p.y * Math.sin(rx) + z0 * Math.cos(rx);
    const scale = 3.4 / (3.4 - z);
    return { x: cx + x * radius * scale, y: cy + y * radius * scale, z };
  });
  edges.forEach(([a, b]) => {
    const p = projected[a], q = projected[b];
    const opacity = .08 + ((p.z + q.z + 2) / 4) * .39;
    ctx.strokeStyle = `rgba(162,218,110,${opacity})`; ctx.lineWidth = .65;
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
  });
  projected.sort((a,b) => a.z - b.z).forEach(p => {
    ctx.fillStyle = `rgba(194,246,139,${.22 + (p.z + 1) * .36})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.z > .4 ? 1.7 : 1, 0, Math.PI * 2); ctx.fill();
  });
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(-.32);
  ctx.strokeStyle = 'rgba(162,218,110,.18)'; ctx.lineWidth = .7;
  ctx.beginPath(); ctx.ellipse(0, 0, radius * 1.32, radius * .42, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}
function animate() {
  if (!document.hidden) { angle += .0025; draw(); }
  frame = requestAnimationFrame(animate);
}
canvas.addEventListener('pointermove', e => {
  const r = canvas.getBoundingClientRect();
  pointerX = (e.clientX - r.left) / width - .5; pointerY = (e.clientY - r.top) / height - .5;
  if (reducedMotion.matches) draw();
});
canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; if (reducedMotion.matches) draw(); });
window.addEventListener('resize', resize);
function updateMotion() { cancelAnimationFrame(frame); draw(); if (!reducedMotion.matches) animate(); }
reducedMotion.addEventListener('change', updateMotion);
resize(); updateMotion();
